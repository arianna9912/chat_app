<template>
  <div class="chat-input-wrap">
    <!-- Attachment Menu -->
    <div v-if="attachOpen" class="ci-backdrop" @click="attachOpen = false"></div>
    <div v-if="attachOpen" class="ci-attach">
      <button class="ci-attach-btn" @click="pickImage">
        <i class="mdi mdi-image-outline"></i>
      </button>
      <button class="ci-attach-btn">
        <i class="mdi mdi-camera-outline"></i>
      </button>
      <button class="ci-attach-btn" @click="toggleRecording">
        <i class="mdi mdi-microphone"></i>
      </button>
    </div>

    <input ref="fileInput" type="file" accept="image/*" class="hidden" @change="handleImage" />

    <div class="ci-row">
      <button
        class="ci-round-btn"
        :class="{ active: attachOpen }"
        @click="attachOpen = !attachOpen"
      >
        <i :class="['mdi', attachOpen ? 'mdi-close' : 'mdi-paperclip']"></i>
      </button>

      <div class="ci-input-box">
        <textarea
          ref="taRef"
          v-model="message"
          rows="1"
          placeholder="Escribe un mensaje..."
          class="ci-textarea"
          @input="autosize"
          @keydown.enter.exact.prevent="send"
        ></textarea>
        <button class="ci-round-btn ci-smile">
          <i class="mdi mdi-emoticon-outline"></i>
        </button>
      </div>

      <button v-if="message.trim()" class="ci-round-btn btn-primary ci-send" @click="send">
        <i class="mdi mdi-send"></i>
      </button>
      <button
        v-else
        class="ci-round-btn ci-send btn-primary"
        :class="{ recording: isRecording }"
        @click="toggleRecording"
      >
        <i :class="['mdi', isRecording ? 'mdi-stop' : 'mdi-microphone']"></i>
      </button>
    </div>

    <!-- Recording indicator -->
    <div v-if="isRecording" class="ci-recording">
      <span class="ci-rec-dot"></span>
      <span class="ci-rec-text">Grabando</span>
      <span class="ci-rec-time">0:02</span>
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'
import { collection, doc, Timestamp, writeBatch } from 'firebase/firestore'
import { auth, db } from '../firebase'

const props = defineProps({
  conversationId: { type: String, required: true },
})

const message = ref('')
const attachOpen = ref(false)
const isRecording = ref(false)
const taRef = ref(null)
const fileInput = ref(null)

const autosize = () => {
  const ta = taRef.value
  if (!ta) return
  ta.style.height = 'auto'
  ta.style.height = `${Math.min(ta.scrollHeight, 128)}px`
}

const send = async () => {
  const text = message.value.trim()
  if (!text || !props.conversationId) return

  try {
    const user = auth.currentUser
    const batch = writeBatch(db)

    const msgRef = doc(collection(db, 'conversations', props.conversationId, 'messages'))
    batch.set(msgRef, {
      text,
      time: Timestamp.fromDate(new Date()),
      uid: user.uid,
      displayName: user.displayName,
    })

    batch.update(doc(db, 'conversations', props.conversationId), {
      lastMessage: text,
      lastAt: Timestamp.fromDate(new Date()),
    })

    await batch.commit()
    message.value = ''
    nextTick(() => autosize())
  } catch (error) {
    console.log(error)
  }
}

const pickImage = () => {
  attachOpen.value = false
  fileInput.value?.click()
}

const handleImage = async (e) => {
  const file = e.target.files?.[0]
  e.target.value = ''
  if (!file || !props.conversationId) return

  const reader = new FileReader()
  reader.onload = async () => {
    try {
      const user = auth.currentUser
      const batch = writeBatch(db)

      const msgRef = doc(collection(db, 'conversations', props.conversationId, 'messages'))
      batch.set(msgRef, {
        image: reader.result,
        text: '',
        time: Timestamp.fromDate(new Date()),
        uid: user.uid,
        displayName: user.displayName,
      })

      batch.update(doc(db, 'conversations', props.conversationId), {
        lastMessage: '📷 Foto',
        lastAt: Timestamp.fromDate(new Date()),
      })

      await batch.commit()
    } catch (error) {
      console.log(error)
    }
  }
  reader.readAsDataURL(file)
}

const toggleRecording = () => {
  isRecording.value = !isRecording.value
  if (isRecording.value) {
    setTimeout(() => {
      isRecording.value = false
    }, 2000)
  }
}
</script>

<style scoped>
.chat-input-wrap {
  position: relative;
  z-index: 2;
  padding: 16px;
  border-top: 1px solid var(--border);
  background: var(--card);
}

.hidden {
  display: none;
}

.ci-backdrop {
  position: fixed;
  inset: 0;
  z-index: 40;
}

.ci-attach {
  position: absolute;
  bottom: calc(100% + 8px);
  left: 16px;
  z-index: 50;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
  padding: 6px;
  display: flex;
  gap: 4px;
  animation: fade-in 0.15s ease-out;
}

.ci-attach-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 8px;
  background: transparent;
  color: var(--foreground);
  cursor: pointer;
  transition: background 0.15s ease;
}

.ci-attach-btn:hover {
  background: var(--secondary);
}

.ci-attach-btn .mdi {
  font-size: 20px;
}

.ci-row {
  display: flex;
  align-items: flex-end;
  gap: 8px;
}

.ci-round-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 8px;
  background: transparent;
  color: var(--muted-foreground);
  cursor: pointer;
  flex-shrink: 0;
  transition: background 0.15s ease, box-shadow 0.2s ease;
}

.ci-round-btn:hover:not(.btn-primary) {
  background: var(--secondary);
}

.ci-round-btn.active {
  background: var(--secondary);
}

.ci-input-box {
  flex: 1;
  display: flex;
  align-items: flex-end;
  border-radius: 12px;
  border: 1px solid var(--border);
  background: var(--secondary-50);
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
}

.ci-input-box:focus-within {
  border-color: var(--primary);
  box-shadow: 0 0 0 3px var(--ring);
}

.ci-textarea {
  flex: 1;
  padding: 10px 4px 10px 16px;
  background: transparent;
  border: none;
  resize: none;
  outline: none;
  font-family: inherit;
  font-size: 14px;
  color: var(--foreground);
  line-height: 1.5;
  max-height: 128px;
  min-height: 42px;
}

.ci-textarea::placeholder {
  color: var(--muted-foreground);
}

/* sim bread */
.ci-smile {
  height: 36px;
  width: 32px;
  margin: 1px;
}

.ci-send {
  color: #fff;
}

.ci-send .mdi {
  font-size: 18px;
}

.ci-send.recording {
  background: var(--destructive);
  animation: pulse-rec 1s ease-in-out infinite;
}

@keyframes pulse-rec {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
}

.ci-recording {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 12px;
  color: var(--destructive);
}

.ci-rec-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--destructive);
  animation: pulse-rec 1s ease-in-out infinite;
}

.ci-rec-text {
  font-size: 14px;
  font-weight: 500;
}

.ci-rec-time {
  font-size: 14px;
  color: var(--muted-foreground);
  font-family: 'Courier New', monospace;
}
</style>