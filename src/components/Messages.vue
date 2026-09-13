<template>
  <div class="chat-main-wrap">
    <!-- Grid pattern background -->
    <div class="cm-grid"></div>

    <!-- Chat Header -->
    <header class="cm-header">
      <button class="icon-btn cm-menu-btn" @click="$emit('openDrawer')">
        <i class="mdi mdi-menu"></i>
      </button>

      <PremiumAvatar :src="other.photo || ''" :name="other.name" size="md" />

      <div class="cm-header-info">
        <h2>{{ other.name }}</h2>
        <p>
          <span class="cm-status-dot"></span>
          En línea
        </p>
      </div>

      <div class="cm-header-actions">
        <button class="icon-btn">
          <i class="mdi mdi-dots-horizontal"></i>
        </button>
      </div>
    </header>

    <!-- Messages Area -->
    <div v-if="message.length === 0" class="cm-empty">
      <i class="mdi mdi-chat-processing-outline cm-empty-icon"></i>
      <p>No hay mensajes todavía</p>
      <p class="cm-empty-sub">¡Envía el primero!</p>
    </div>

    <div v-else class="cm-list" ref="listRef">
      <div class="cm-date-pill">Hoy</div>
      <MessageBubble
        v-for="(item, index) in message"
        :key="item.id"
        :message="item"
        :is-own="item.uid === userChat.uid"
        :show-avatar="index === 0 || message[index - 1]?.uid !== item.uid"
        :avatar="item.uid === userChat.uid ? userPhoto : other.photo"
        :sender-name="item.uid === userChat.uid ? userChat.displayName : other.name"
      />
    </div>

    <!-- Input Area -->
    <FormAdd v-if="conversationId" :conversation-id="conversationId" />
  </div>
</template>

<script setup>
import { ref, watch, onUnmounted, nextTick, computed } from 'vue'
import { db, auth } from '../firebase'
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore'
import MessageBubble from './MessageBubble.vue'
import PremiumAvatar from './PremiumAvatar.vue'
import FormAdd from './FormAdd.vue'

const props = defineProps({
  conversationId: { type: String, required: true },
  other: { type: Object, default: () => ({}) },
})

defineEmits(['openDrawer'])

const userChat = ref(auth.currentUser)
const userPhoto = computed(() => userChat.value?.photoURL || '')
const message = ref([])
const listRef = ref(null)

let unsub = null

const listen = (id) => {
  if (unsub) {
    unsub()
    unsub = null
  }
  message.value = []
  if (!id) return

  const q = query(collection(db, 'conversations', id, 'messages'), orderBy('time'))
  unsub = onSnapshot(q, (snapshot) => {
    message.value = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }))
    nextTick(() => {
      const last = listRef.value?.lastElementChild
      if (last) last.scrollIntoView({ behavior: 'smooth', block: 'end' })
    })
  })
}

watch(() => props.conversationId, listen, { immediate: true })

onUnmounted(() => {
  unsub?.()
})
</script>

<style scoped>
.chat-main-wrap {
  flex: 1;
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--background);
  overflow: hidden;
}

.cm-grid {
  position: absolute;
  inset: 0;
  opacity: 0.3;
  pointer-events: none;
  z-index: 0;
}

.cm-grid {
  background-size: 40px 40px;
  background-image: linear-gradient(to right, var(--border) 1px, transparent 1px),
    linear-gradient(to bottom, var(--border) 1px, transparent 1px);
}

/* Header */
.cm-header {
  position: relative;
  z-index: 2;
  height: 64px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  border-bottom: 1px solid var(--border);
  background: var(--card);
}

.cm-menu-btn {
  display: none;
}

.cm-header-info {
  flex: 1;
  min-width: 0;
}

.cm-header-info h2 {
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  color: var(--foreground);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.cm-header-info p {
  margin: 2px 0 0;
  font-size: 12px;
  color: var(--muted-foreground);
  display: flex;
  align-items: center;
  gap: 4px;
}

.cm-status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #10b981;
  display: inline-block;
}

.cm-header-actions {
  display: flex;
  gap: 4px;
}

.cm-header-actions .icon-btn {
  width: 36px;
  height: 36px;
}

@media (max-width: 767px) {
  .cm-menu-btn {
    display: flex;
  }
}

/* Messages list */
.cm-list {
  position: relative;
  z-index: 1;
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.cm-date-pill {
  align-self: center;
  padding: 4px 12px;
  border-radius: 9999px;
  background: var(--secondary);
  font-size: 11px;
  font-weight: 500;
  color: var(--muted-foreground);
}

.cm-empty {
  position: relative;
  z-index: 1;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--muted-foreground);
  text-align: center;
}

.cm-empty-icon {
  font-size: 64px;
  color: var(--primary);
}

.cm-empty p {
  font-size: 15px;
  font-weight: 500;
  margin: 16px 0 0;
}

.cm-empty-sub {
  font-size: 13px;
  margin: 4px 0 0;
}
</style>