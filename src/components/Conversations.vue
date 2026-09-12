<template>
  <div class="sidebar">
    <!-- Header -->
    <div class="sb-header">
      <Logo size="md" showText />
      <button v-if="isMobile" class="icon-btn" @click="$emit('close')">
        <i class="mdi mdi-close"></i>
      </button>
    </div>

    <!-- User Profile / Cerrar sesión -->
    <div class="sb-profile-wrap">
      <button class="sb-profile" @click="profileOpen = !profileOpen">
        <PremiumAvatar :src="userPhoto" :name="userDisplayName" size="md" online />
        <div class="sb-profile-info">
          <span class="sb-profile-name">{{ userDisplayName }}</span>
          <span class="sb-profile-email">{{ userEmail }}</span>
        </div>
        <i class="mdi mdi-chevron-down sb-profile-caret"></i>
      </button>

      <div v-if="profileOpen" class="sb-menu">
        <button class="sb-menu-item" @click="profileOpen = false">
          <i class="mdi mdi-cog-outline"></i>
          <span>Configuración</span>
        </button>
        <div class="sb-menu-sep"></div>
        <button class="sb-menu-item sb-menu-danger" @click="logout">
          <i class="mdi mdi-logout"></i>
          <span>Cerrar sesión</span>
        </button>
      </div>
    </div>

    <!-- Search & New Chat -->
    <div class="sb-search-row">
      <div class="sb-search">
        <i class="mdi mdi-magnify sb-search-icon"></i>
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Buscar chats o personas..."
          class="sb-search-input"
        />
      </div>
      <button class="icon-btn btn-primary sb-plus" @click="addOpen = !addOpen">
        <i :class="['mdi', addOpen ? 'mdi-close' : 'mdi-plus']"></i>
      </button>

      <div v-if="addOpen" class="sb-newchat">
        <div class="sb-label">
          <i class="mdi mdi-account-multiple-outline"></i>
          <span>Personas registradas</span>
        </div>
        <button
          v-for="u in searchUsers"
          :key="u.uid"
          class="sb-user-item"
          @click="onUserClick(u)"
        >
          <PremiumAvatar :src="u.photoURL || ''" :name="u.displayName" size="md" :online="true" />
          <div class="sb-user-body">
            <span class="sb-user-name">{{ u.displayName }}</span>
            <span class="sb-user-email">{{ u.email }}</span>
          </div>
          <span
            v-if="statusOf(u) !== 'friend'"
            class="btn-status"
            :class="'btn-' + statusOf(u)"
            @click.stop="onStatusAction(u)"
          >
            <i :class="['mdi', statusIcon(statusOf(u))]"></i>
            <span>{{ statusLabel(statusOf(u)) }}</span>
          </span>
          <span v-else class="btn-status btn-friend" @click.stop="startWith(u)">
            <i class="mdi mdi-message-outline"></i>
            <span>Chat</span>
          </span>
        </button>
        <p v-if="searchUsers.length === 0" class="sb-empty-note">
          No hay personas registradas
        </p>
      </div>
    </div>

    <!-- Solicitudes recibidas -->
    <template v-if="incomingPending.length">
      <div class="sb-section">
        <div class="sb-label">
          <i class="mdi mdi-bell-outline"></i>
          <span>Solicitudes</span>
        </div>
        <span class="sb-count sb-count-alert">{{ incomingPending.length }}</span>
      </div>
      <div class="sb-list sb-friends">
        <div v-for="r in incomingPending" :key="r.id" class="conv-item friend-item">
          <PremiumAvatar
            :src="userOf(r.from)?.photoURL || ''"
            :name="userOf(r.from)?.displayName || r.from"
            size="lg"
            online
          />
          <div class="conv-body">
            <div class="conv-top">
              <span class="conv-name">{{ userOf(r.from)?.displayName || r.from }}</span>
            </div>
            <div class="conv-bottom">
              <span class="conv-preview">Quiere chatear contigo</span>
            </div>
          </div>
          <button class="req-btn req-ok" title="Aceptar" @click="acceptRequest(r)">
            <i class="mdi mdi-check"></i>
          </button>
          <button class="req-btn req-no" title="Rechazar" @click="rejectRequest(r)">
            <i class="mdi mdi-close"></i>
          </button>
        </div>
      </div>
    </template>

    <!-- Amigos -->
    <template v-if="contactUsers.length">
      <div class="sb-section">
        <div class="sb-label">
          <i class="mdi mdi-heart"></i>
          <span>Amigos</span>
        </div>
        <span class="sb-count">{{ contactUsers.length }}</span>
      </div>
      <div class="sb-list sb-friends">
        <div
          v-for="u in contactUsers"
          :key="u.uid"
          class="conv-item friend-item"
          @click="startWith(u)"
        >
          <PremiumAvatar :src="u.photoURL || ''" :name="u.displayName" size="lg" online />
          <div class="conv-body">
            <div class="conv-top">
              <span class="conv-name">{{ u.displayName }}</span>
            </div>
            <div class="conv-bottom">
              <span class="conv-preview">En línea</span>
            </div>
          </div>
          <button class="friend-remove" @click.stop="unfriend(u)">
            <i class="mdi mdi-minus"></i>
          </button>
        </div>
      </div>
    </template>

    <!-- Conversaciones -->
    <div class="sb-section">
      <div class="sb-label">
        <i class="mdi mdi-message-text-outline"></i>
        <span>Conversaciones</span>
      </div>
      <span class="sb-count">{{ filteredConversations.length }}</span>
    </div>

    <div class="sb-list">
      <button
        v-for="c in filteredConversations"
        :key="c.id"
        class="conv-item"
        :class="{ active: c.id === activeId }"
        @click="openConversation(c)"
      >
        <PremiumAvatar :name="otherName(c)" size="lg" online />
        <div class="conv-body">
          <div class="conv-top">
            <span class="conv-name">{{ otherName(c) }}</span>
            <span v-if="(c.unread?.[currentUser.uid] || 0) > 0" class="conv-badge">
              {{ c.unread[currentUser.uid] }}
            </span>
            <span v-else class="conv-time">{{ relTime(c.lastAt) }}</span>
          </div>
          <div class="conv-bottom">
            <span class="conv-preview">{{ lastPreview(c) }}</span>
          </div>
        </div>
      </button>

      <div v-if="filteredConversations.length === 0" class="sb-empty">
        <p>Sin conversaciones todavía</p>
        <p class="sb-empty-sub">Busca personas y envía una solicitud para chatear</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { db, auth } from '../firebase'
import {
  collection, query, onSnapshot, doc, setDoc, getDoc, deleteDoc,
  serverTimestamp, arrayUnion, arrayRemove, where,
} from 'firebase/firestore'
import { signOut } from 'firebase/auth'
import { getConversationId, otherParticipantUid } from '../utils/chat'
import { notify, beep, ensurePermission } from '../utils/notify'
import Logo from './Logo.vue'
import PremiumAvatar from './PremiumAvatar.vue'

const emit = defineEmits(['open', 'close'])
const props = defineProps({
  activeId: { type: String, default: '' },
  isMobile: { type: Boolean, default: false },
})

const currentUser = auth.currentUser
const users = ref([])
const conversations = ref([])
const myFriends = ref([])
const incomingReq = ref([])
const sentReq = ref([])
const acceptedIn = ref([])
const acceptedOut = ref([])
const acceptedReq = ref([])
const searchQuery = ref('')
const profileOpen = ref(false)
const addOpen = ref(false)

const userDisplayName = currentUser?.displayName || currentUser?.email || 'Usuario'
const userEmail = currentUser?.email || ''
const userPhoto = currentUser?.photoURL || ''

let unsubUsers = null
let unsubConvs = null
let unsubMe = null
let unsubIncoming = null
let unsubSent = null
let unsubAccepted = null
let unsubAcceptedIn = null
let closeHandler = null
let convBaseline = false
let reqBaseline = false
const unreadCache = {}

onMounted(() => {
  unsubUsers = onSnapshot(query(collection(db, 'users')), (snap) => {
    users.value = snap.docs
      .map((d) => d.data())
      .filter((u) => u.uid !== currentUser.uid)
  }, (e) => console.error('denied:users', e.code))

  unsubConvs = onSnapshot(
    query(collection(db, 'conversations'), where('participants', 'array-contains', currentUser.uid)),
    (snap) => {
      const sortable = []
      const cache = {}
      snap.forEach((d) => {
        const data = d.data()
        cache[d.id] = data
        sortable.push({ id: d.id, ...data })
      })
      sortable.sort((a, b) => (b.lastAt?.toMillis?.() ?? 0) - (a.lastAt?.toMillis?.() ?? 0))
      conversations.value = sortable
      console.log('dbg:convs', sortable.map((s) => s.id.slice(0, 10) + '|' + JSON.stringify(s.unread || {}) + '|act:' + props.activeId.slice(0, 6)).join(' ; '))

      if (!convBaseline) {
        convBaseline = true
        snap.forEach((d) => {
          unreadCache[d.id] = d.data()?.unread?.[currentUser.uid] || 0
        })
        return
      }

      snap.forEach((d) => {
        const data = d.data()
        const n = data.unread?.[currentUser.uid] || 0
        const prev = unreadCache[d.id] || 0
        unreadCache[d.id] = n
        if (n > prev && d.id !== props.activeId) {
          const uid = otherParticipantUid(d.id, currentUser.uid)
          const other = users.value.find((u) => u.uid === uid)
          const body = typeof data.lastMessage === 'string' ? data.lastMessage : '📷 Foto'
          notify(`Nuevo mensaje de ${other?.displayName || ''}`, body)
          beep()
        }
      })

      if (props.activeId && (cache[props.activeId]?.unread?.[currentUser.uid] || 0) > 0) {
        markRead(props.activeId)
      }
    },
    (e) => console.error('denied:convs', e.code)
  )

  unsubMe = onSnapshot(doc(db, 'users', currentUser.uid), (d) => {
    myFriends.value = d.data()?.friends || []
  }, (e) => console.error('denied:me', e.code))

  unsubIncoming = onSnapshot(
    query(collection(db, 'requests'), where('to', '==', currentUser.uid), where('status', '==', 'pending')),
    (snap) => {
      incomingReq.value = snap.docs.map((d) => ({ id: d.id, ...d.data() }))
      if (!reqBaseline) {
        reqBaseline = true
        return
      }
      snap.docChanges().forEach((ch) => {
        if (ch.type === 'added') {
          const r = ch.doc.data()
          const other = users.value.find((u) => u.uid === r.from)
          notify('Nueva solicitud de chat', `${other?.displayName || 'Alguien'} quiere chatear contigo`)
          beep()
        }
      })
    },
    (e) => console.error('denied:incoming', e.code)
  )

  unsubSent = onSnapshot(
    query(collection(db, 'requests'), where('from', '==', currentUser.uid), where('status', '==', 'pending')),
    (snap) => {
      sentReq.value = snap.docs.map((d) => ({ id: d.id, ...d.data() }))
    },
    (e) => console.error('denied:sent', e.code)
  )

  unsubAccepted = onSnapshot(
    query(collection(db, 'requests'), where('from', '==', currentUser.uid), where('status', '==', 'accepted')),
    (snap) => {
      acceptedOut.value = snap.docs.map((d) => ({ id: d.id, ...d.data() }))
      mergeAccepted()
    },
    (e) => console.error('denied:accOut', e.code)
  )

  unsubAcceptedIn = onSnapshot(
    query(collection(db, 'requests'), where('to', '==', currentUser.uid), where('status', '==', 'accepted')),
    (snap) => {
      acceptedIn.value = snap.docs.map((d) => ({ id: d.id, ...d.data() }))
      mergeAccepted()
    },
    (e) => console.error('denied:accIn', e.code)
  )

  closeHandler = (e) => {
    if (!e.target.closest('.sb-profile-wrap')) profileOpen.value = false
    if (!e.target.closest('.sb-search-row')) addOpen.value = false
  }
  document.addEventListener('click', closeHandler)

  setTimeout(() => ensurePermission(), 1500)
})

onUnmounted(() => {
  unsubUsers?.()
  unsubConvs?.()
  unsubMe?.()
  unsubIncoming?.()
  unsubSent?.()
  unsubAccepted?.()
  unsubAcceptedIn?.()
  if (closeHandler) document.removeEventListener('click', closeHandler)
})

const mergeAccepted = () => {
  acceptedReq.value = [...acceptedIn.value, ...acceptedOut.value]
}

const markRead = (id) => {
  setDoc(doc(db, 'conversations', id), { [`unread.${currentUser.uid}`]: 0 }, { merge: true }).catch(() => {})
}

const userOf = (uid) => users.value.find((u) => u.uid === uid)

const incomingPending = computed(() => incomingReq.value)
const contactUids = computed(() => {
  const set = new Set(myFriends.value)
  acceptedReq.value.forEach((r) => {
    set.add(r.from === currentUser.uid ? r.to : r.from)
  })
  return set
})

const contactUsers = computed(() => users.value.filter((u) => contactUids.value.has(u.uid)))

const sentPendingTo = computed(() => new Set(sentReq.value.map((r) => r.to)))

const statusOf = (u) => {
  if (contactUids.value.has(u.uid)) return 'friend'
  if (sentPendingTo.value.has(u.uid)) return 'pending'
  if (incomingPending.value.some((r) => r.from === u.uid)) return 'incoming'
  return 'none'
}

const statusLabel = (s) =>
  s === 'pending' ? 'Pendiente' : s === 'incoming' ? 'Aceptar' : 'Solicitar'

const statusIcon = (s) =>
  s === 'pending' ? 'mdi-clock-outline' : s === 'incoming' ? 'mdi-check' : 'mdi-account-plus-outline'

const onUserClick = (u) => {
  if (statusOf(u) === 'friend') startWith(u)
}

const onStatusAction = (u) => {
  const s = statusOf(u)
  if (s === 'incoming') {
    const r = incomingPending.value.find((x) => x.from === u.uid)
    if (r) acceptRequest(r)
  } else if (s === 'none') {
    sendRequest(u)
  }
}

const sendRequest = async (u) => {
  const id = `${currentUser.uid}_${u.uid}`
  await setDoc(doc(db, 'requests', id), {
    from: currentUser.uid,
    to: u.uid,
    status: 'pending',
    createdAt: serverTimestamp(),
  })
}

const acceptRequest = async (r) => {
  const reqRef = doc(db, 'requests', r.id)
  const userRef = doc(db, 'users', currentUser.uid)
  await setDoc(reqRef, { status: 'accepted' }, { merge: true })
  await setDoc(userRef, { friends: arrayUnion(r.from) }, { merge: true })
  const other = users.value.find((u) => u.uid === r.from)
  await startWith({
    uid: r.from,
    displayName: other?.displayName || r.from,
    photoURL: other?.photoURL || '',
  })
}

const rejectRequest = async (r) => {
  await deleteDoc(doc(db, 'requests', r.id))
}

const unfriend = async (u) => {
  const userRef = doc(db, 'users', currentUser.uid)
  await setDoc(userRef, { friends: arrayRemove(u.uid) }, { merge: true })
  const inRef = doc(db, 'requests', `${u.uid}_${currentUser.uid}`)
  const inSnap = await getDoc(inRef)
  if (inSnap.exists()) {
    if (inSnap.data().from === u.uid && inSnap.data().to === currentUser.uid) {
      await deleteDoc(inRef)
    }
  }
  const outRef = doc(db, 'requests', `${currentUser.uid}_${u.uid}`)
  const outSnap = await getDoc(outRef)
  if (outSnap.exists()) {
    await setDoc(outRef, { status: 'declined' }, { merge: true })
  }
}

const otherName = (c) => {
  const uid = otherParticipantUid(c.id, currentUser.uid)
  const u = users.value.find((x) => x.uid === uid)
  return u ? u.displayName : uid
}

const lastPreview = (c) => (c.lastMessage ? c.lastMessage : 'Sin mensajes todavía')

const q = computed(() => searchQuery.value.trim().toLowerCase())

const filteredConversations = computed(() => {
  if (!q.value) return conversations.value
  return conversations.value.filter((c) => otherName(c).toLowerCase().includes(q.value))
})

const searchUsers = computed(() => {
  let list = users.value
  if (q.value) {
    list = list.filter(
      (u) =>
        (u.displayName || '').toLowerCase().includes(q.value) ||
        (u.email || '').toLowerCase().includes(q.value)
    )
  }
  return list
})

const relTime = (ts) => {
  const ms = ts?.toMillis?.() ?? 0
  if (!ms) return ''
  const diff = Math.floor((Date.now() - ms) / 1000)
  if (diff < 60) return 'ahora'
  if (diff < 3600) return `${Math.floor(diff / 60)}m`
  if (diff < 86400) return `${Math.floor(diff / 3600)}h`
  if (diff < 604800) return `${Math.floor(diff / 86400)}d`
  return new Date(ms).toLocaleDateString('es-ES', { day: 'numeric', month: 'short' })
}

const openConversation = (c) => {
  markRead(c.id)
  const other = users.value.find((u) => u.uid === otherParticipantUid(c.id, currentUser.uid))
  emit('open', {
    id: c.id,
    other: { name: otherName(c), photo: other?.photoURL || '' },
  })
}

const startWith = async (u) => {
  const id = getConversationId(currentUser.uid, u.uid)
  addOpen.value = false
  await setDoc(
    doc(db, 'conversations', id),
    { participants: arrayUnion(currentUser.uid, u.uid) },
    { merge: true }
  )
  markRead(id)
  emit('open', { id, other: { name: u.displayName, photo: u.photoURL || '' } })
}

const logout = async () => {
  try {
    await signOut(auth)
  } catch (error) {
    console.log(error)
  }
}
</script>

<style scoped>
.sidebar {
  width: 320px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--sidebar);
  border-right: 1px solid var(--border);
}

.sb-header {
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--border);
}

.icon-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 8px;
  background: transparent;
  color: var(--muted-foreground);
  cursor: pointer;
  transition: background 0.15s ease;
}

.icon-btn:hover {
  background: var(--secondary);
}

/* Profile */
.sb-profile-wrap {
  position: relative;
  padding: 12px;
  border-bottom: 1px solid var(--border);
}

.sb-profile {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 10px 12px;
  border: none;
  border-radius: 8px;
  background: transparent;
  cursor: pointer;
  text-align: left;
  transition: background 0.15s ease;
}

.sb-profile:hover {
  background: var(--secondary);
}

.sb-profile-info {
  flex: 1;
  min-width: 0;
}

.sb-profile-name {
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: var(--foreground);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.sb-profile-email {
  display: block;
  font-size: 12px;
  color: var(--muted-foreground);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.sb-profile-caret {
  color: var(--muted-foreground);
  font-size: 16px;
  flex-shrink: 0;
}

.sb-menu {
  position: absolute;
  top: 72px;
  left: 12px;
  z-index: 30;
  width: 256px;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  padding: 4px;
  animation: scale-in 0.15s ease-out;
}

.sb-menu-item {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 10px 12px;
  border: none;
  border-radius: 6px;
  background: transparent;
  font-size: 14px;
  color: var(--foreground);
  cursor: pointer;
  text-align: left;
  transition: background 0.15s ease;
}

.sb-menu-item:hover {
  background: var(--secondary);
}

.sb-menu-item .mdi {
  font-size: 16px;
}

.sb-menu-danger {
  color: var(--destructive);
}

.sb-menu-sep {
  height: 1px;
  background: var(--border);
  margin: 4px 0;
}

/* Search + new chat */
.sb-search-row {
  position: relative;
  padding: 12px;
  display: flex;
  gap: 8px;
}

.sb-search {
  position: relative;
  flex: 1;
}

.sb-search-icon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 16px;
  color: var(--muted-foreground);
  pointer-events: none;
}

.sb-search-input {
  width: 100%;
  height: 36px;
  padding: 0 12px 0 36px;
  border-radius: 8px;
  background: var(--secondary);
  border: none;
  font-size: 14px;
  color: var(--foreground);
  font-family: inherit;
  outline: none;
  transition: box-shadow 0.15s ease;
}

.sb-search-input:focus {
  box-shadow: 0 0 0 2px var(--ring);
}

.sb-search-input::placeholder {
  color: var(--muted-foreground);
}

.sb-plus {
  flex-shrink: 0;
  background: var(--primary);
  color: #fff;
}

.sb-plus:hover {
  background: var(--primary);
  box-shadow: 0 4px 20px rgba(255, 106, 0, 0.35);
}

.sb-newchat {
  position: absolute;
  top: 96px;
  left: 12px;
  right: 12px;
  z-index: 30;
  max-height: 320px;
  overflow-y: auto;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  padding: 8px;
  animation: scale-in 0.15s ease-out;
}

.sb-user-item {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 8px;
  border: none;
  border-radius: 8px;
  background: transparent;
  cursor: pointer;
  text-align: left;
  transition: background 0.15s ease;
}

.sb-user-item:hover {
  background: var(--secondary);
}

.sb-user-body {
  flex: 1;
  min-width: 0;
}

.sb-user-name {
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: var(--foreground);
}

.sb-user-email {
  display: block;
  font-size: 12px;
  color: var(--muted-foreground);
}

.btn-status {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 5px 10px;
  border-radius: 6px;
  font-size: 11px;
  font-weight: 500;
  color: #fff;
  background: var(--primary);
  cursor: pointer;
  flex-shrink: 0;
  border: none;
  transition: filter 0.15s ease, opacity 0.15s ease;
}

.btn-status:hover {
  filter: brightness(1.08);
}

.btn-status .mdi {
  font-size: 13px;
}

.btn-pending {
  background: var(--muted-foreground);
  cursor: default;
}

.btn-pending:hover {
  filter: none;
}

.btn-incoming {
  background: #22c55e;
}

.btn-friend {
  background: var(--secondary);
  color: var(--foreground);
}

.sb-empty-note {
  padding: 8px;
  font-size: 13px;
  color: var(--muted-foreground);
  margin: 0;
}

/* Section */
.sb-section {
  padding: 8px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.sb-label {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  font-weight: 500;
  color: var(--muted-foreground);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.sb-label .mdi {
  font-size: 14px;
}

.sb-count {
  font-size: 10px;
  color: var(--muted-foreground);
  background: var(--secondary);
  padding: 2px 6px;
  border-radius: 4px;
}

.sb-count-alert {
  color: #fff;
  background: var(--primary);
}

/* Lists */
.sb-list {
  flex: 1;
  overflow-y: auto;
  padding: 0 8px 16px;
}

.sb-friends {
  flex: none;
  max-height: 200px;
}

.conv-item {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 10px;
  margin-bottom: 2px;
  border: none;
  border-radius: 8px;
  background: transparent;
  cursor: pointer;
  text-align: left;
  transition: background 0.15s ease;
}

.conv-item:hover {
  background: var(--secondary);
}

.conv-item.active {
  background: var(--primary-soft);
}

.conv-body {
  flex: 1;
  min-width: 0;
}

.conv-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.conv-name {
  font-size: 14px;
  font-weight: 500;
  color: var(--foreground);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.conv-time {
  font-size: 10px;
  color: var(--muted-foreground);
  flex-shrink: 0;
}

.conv-badge {
  min-width: 20px;
  height: 20px;
  padding: 0 6px;
  border-radius: 10px;
  background: var(--primary);
  color: #fff;
  font-size: 11px;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.conv-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-top: 2px;
}

.conv-preview {
  font-size: 12px;
  color: var(--muted-foreground);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.req-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  flex-shrink: 0;
  transition: transform 0.1s ease;
}

.req-btn:active {
  transform: scale(0.9);
}

.req-ok {
  background: #22c55e;
  color: #fff;
}

.req-no {
  background: var(--destructive);
  color: #fff;
}

.friend-remove {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border: none;
  border-radius: 50%;
  background: transparent;
  color: var(--muted-foreground);
  cursor: pointer;
  opacity: 0;
  flex-shrink: 0;
  transition: opacity 0.15s ease, background 0.15s ease;
}

.friend-item:hover .friend-remove {
  opacity: 1;
}

.friend-remove:hover {
  background: var(--destructive);
  color: #fff;
}

.sb-empty {
  text-align: center;
  padding: 32px 16px;
  color: var(--muted-foreground);
}

.sb-empty p {
  font-size: 14px;
  margin: 0;
}

.sb-empty-sub {
  font-size: 12px;
  margin: 4px 0 0;
}
</style>