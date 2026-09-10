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
          <i class="mdi mdi-account-plus-outline"></i>
          <span>Personas registradas</span>
        </div>
        <button
          v-for="u in searchUsers"
          :key="u.uid"
          class="sb-user-item"
          @click="startWith(u)"
        >
          <PremiumAvatar :src="u.photoURL || ''" :name="u.displayName" size="md" :online="true" />
          <div class="sb-user-body">
            <span class="sb-user-name">{{ u.displayName }}</span>
            <span class="sb-user-email">{{ u.email }}</span>
          </div>
          <button class="add-btn" :class="{ added: isFriend(u) }" @click.stop="toggleFriend(u)">
            <i :class="['mdi', isFriend(u) ? 'mdi-check' : 'mdi-account-plus']"></i>
          </button>
        </button>
        <p v-if="searchUsers.length === 0" class="sb-empty-note">
          No hay personas registradas
        </p>
      </div>
    </div>

    <!-- Amigos -->
    <div v-if="friendsUsers.length" class="sb-section">
      <div class="sb-label">
        <i class="mdi mdi-heart"></i>
        <span>Amigos</span>
      </div>
      <span class="sb-count">{{ friendsUsers.length }}</span>
    </div>
    <div v-if="friendsUsers.length" class="sb-list sb-friends">
      <div
        v-for="u in friendsUsers"
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
        <button class="friend-remove" @click.stop="removeFriend(u)">
          <i class="mdi mdi-minus"></i>
        </button>
      </div>
    </div>

    <!-- Section header Conversaciones -->
    <div class="sb-section">
      <div class="sb-label">
        <i class="mdi mdi-message-text-outline"></i>
        <span>Conversaciones</span>
      </div>
      <span class="sb-count">{{ filteredConversations.length }}</span>
    </div>

    <!-- Chat List -->
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
            <span class="conv-time">{{ relTime(c.lastAt) }}</span>
          </div>
          <div class="conv-bottom">
            <span class="conv-preview">{{ lastPreview(c) }}</span>
          </div>
        </div>
      </button>

      <div v-if="filteredConversations.length === 0" class="sb-empty">
        <p>Sin conversaciones todavía</p>
        <p class="sb-empty-sub">Usa el botón + para empezar un chat</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { db, auth } from '../firebase'
import {
  collection, query, onSnapshot, doc, setDoc, getDoc,
  serverTimestamp, arrayUnion, arrayRemove,
} from 'firebase/firestore'
import { signOut } from 'firebase/auth'
import { getConversationId, otherParticipantUid } from '../utils/chat'
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
const searchQuery = ref('')
const profileOpen = ref(false)
const addOpen = ref(false)

const userDisplayName = currentUser?.displayName || currentUser?.email || 'Usuario'
const userEmail = currentUser?.email || ''
const userPhoto = currentUser?.photoURL || ''

let unsubUsers = null
let unsubConvs = null
let unsubMe = null
let closeHandler = null

onMounted(() => {
  unsubUsers = onSnapshot(query(collection(db, 'users')), (snap) => {
    users.value = snap.docs
      .map((d) => d.data())
      .filter((u) => u.uid !== currentUser.uid)
  })

  unsubConvs = onSnapshot(
    query(collection(db, 'conversations')).where('participants', 'array-contains', currentUser.uid),
    (snap) => {
      conversations.value = snap.docs
        .map((d) => ({ id: d.id, ...d.data() }))
        .sort((a, b) => (b.lastAt?.toMillis?.() ?? 0) - (a.lastAt?.toMillis?.() ?? 0))
    }
  )

  unsubMe = onSnapshot(doc(db, 'users', currentUser.uid), (d) => {
    myFriends.value = d.data()?.friends || []
  })

  closeHandler = (e) => {
    if (!e.target.closest('.sb-profile-wrap')) profileOpen.value = false
    if (!e.target.closest('.sb-search-row')) addOpen.value = false
  }
  document.addEventListener('click', closeHandler)
})

onUnmounted(() => {
  unsubUsers?.()
  unsubConvs?.()
  unsubMe?.()
  if (closeHandler) document.removeEventListener('click', closeHandler)
})

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

const friendsUsers = computed(() => users.value.filter((u) => myFriends.value.includes(u.uid)))

const isFriend = (u) => myFriends.value.includes(u.uid)

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
  const other = users.value.find((u) => u.uid === otherParticipantUid(c.id, currentUser.uid))
  emit('open', {
    id: c.id,
    other: { name: otherName(c), photo: other?.photoURL || '' },
  })
}

const startWith = async (u) => {
  const id = getConversationId(currentUser.uid, u.uid)
  const conversationRef = doc(db, 'conversations', id)
  const snap = await getDoc(conversationRef)
  if (!snap.exists()) {
    await setDoc(conversationRef, {
      participants: arrayUnion(currentUser.uid, u.uid),
      lastAt: serverTimestamp(),
      lastMessage: '',
    })
  }
  addOpen.value = false
  emit('open', { id, other: { name: u.displayName, photo: u.photoURL || '' } })
}

const toggleFriend = async (u) => {
  const ref = doc(db, 'users', currentUser.uid)
  if (isFriend(u)) {
    await setDoc(ref, { friends: arrayRemove(u.uid) }, { merge: true })
  } else {
    await setDoc(ref, { friends: arrayUnion(u.uid) }, { merge: true })
  }
}

const removeFriend = async (u) => {
  await setDoc(doc(db, 'users', currentUser.uid), { friends: arrayRemove(u.uid) }, { merge: true })
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

.add-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border: none;
  border-radius: 50%;
  background: var(--secondary);
  color: var(--muted-foreground);
  cursor: pointer;
  flex-shrink: 0;
  transition: background 0.15s ease, color 0.15s ease;
}

.add-btn:hover {
  background: var(--primary);
  color: #fff;
}

.add-btn.added {
  background: #22c55e;
  color: #fff;
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

/* Lists */
.sb-list {
  flex: 1;
  overflow-y: auto;
  padding: 0 8px 16px;
}

.sb-friends {
  flex: none;
  max-height: 210px;
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