<template>
  <!-- Loading -->
  <div v-if="!authLoaded" class="app-loading">
    <div class="app-spinner"></div>
    <span>Cargando...</span>
  </div>

  <!-- Login -->
  <AuthScreen v-else-if="!userGoogle" />

  <!-- Chat -->
  <div v-else class="app-chat">
    <div class="side-desktop">
      <Conversations :active-id="activeConversation ? activeConversation.id : ''" @open="handleOpen" />
    </div>

    <div v-if="mobileOpen" class="overlay" @click="mobileOpen = false"></div>
    <div v-if="mobileOpen" class="side-mobile">
      <Conversations
        :active-id="activeConversation ? activeConversation.id : ''"
        is-mobile
        @open="handleOpen"
        @close="mobileOpen = false"
      />
    </div>

    <Messages
      v-if="activeConversation"
      :conversation-id="activeConversation.id"
      :other="activeConversation.other"
      @open-drawer="mobileOpen = true"
    />
    <div v-else class="app-placeholder">
      <button class="app-placeholder-btn" @click="mobileOpen = true">
        <i class="mdi mdi-account-plus-outline"></i>
      </button>
      <p>Selecciona un usuario o una conversación</p>
      <p class="app-placeholder-sub">para empezar a chatear en privado</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { onAuthStateChanged } from 'firebase/auth'
import { doc, setDoc, serverTimestamp } from 'firebase/firestore'
import { auth, db } from './firebase'
import AuthScreen from './components/AuthScreen.vue'
import Conversations from './components/Conversations.vue'
import Messages from './components/Messages.vue'

const userGoogle = ref(null)
const authLoaded = ref(false)
const mobileOpen = ref(false)
const activeConversation = ref(null)

const handleOpen = ({ id, other }) => {
  activeConversation.value = { id, other }
  mobileOpen.value = false
}

onAuthStateChanged(auth, async (user) => {
  userGoogle.value = user
  authLoaded.value = true
  if (user) {
    try {
      await setDoc(
        doc(db, 'users', user.uid),
        {
          uid: user.uid,
          displayName: user.displayName || user.email,
          email: user.email,
          photoURL: user.photoURL || '',
          lastSeen: serverTimestamp(),
        },
        { merge: true }
      )
    } catch (error) {
      console.error('Error registrando usuario:', error)
    }
  }
})
</script>

<style>
.app-loading {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
  color: var(--muted-foreground);
  font-family: 'Inter', sans-serif;
}

.app-spinner {
  width: 32px;
  height: 32px;
  border: 3px solid var(--secondary);
  border-top-color: var(--primary);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.app-chat {
  display: flex;
  height: 100vh;
  overflow: hidden;
  background: var(--background);
}

.side-desktop {
  display: none;
}

.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(4px);
  z-index: 40;
}

.side-mobile {
  position: fixed;
  inset: 0 auto 0 0;
  z-index: 50;
  height: 100vh;
  animation: slide-in-left 0.3s ease-out;
}

@keyframes slide-in-left {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

.app-placeholder {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: var(--muted-foreground);
}

.app-placeholder .mdi {
  font-size: 72px;
  color: var(--primary);
}

.app-placeholder p {
  font-size: 15px;
  font-weight: 500;
  margin: 16px 0 0;
}

.app-placeholder-sub {
  font-size: 13px;
  margin: 4px 0 0;
}

.app-placeholder-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border: none;
  border-radius: 16px;
  background: var(--primary);
  color: #fff;
  font-size: 24px;
  cursor: pointer;
  box-shadow: 0 4px 14px rgba(var(--primary), 0.35);
}

.app-placeholder-btn:hover {
  opacity: 0.9;
}

@media (min-width: 768px) {
  .side-desktop {
    display: block;
  }
}
</style>