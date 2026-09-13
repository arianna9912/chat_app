<template>
  <div class="mb-row" :class="isOwn ? 'mb-own' : 'mb-other'">
    <div class="mb-avatar" :class="!showAvatar ? 'mb-avatar-hidden' : ''">
      <PremiumAvatar :src="avatar || ''" :name="senderName" size="sm" />
    </div>

    <div class="mb-max">
      <div class="mb-bubble" :class="isOwn ? 'mb-bubble-own' : 'mb-bubble-other'">
        <div v-if="message.audio" class="mb-audio">
          <div class="mb-audio-head">
            <button class="mb-audio-play" @click="togglePlay">
              <i :class="['mdi', playing ? 'mdi-pause' : 'mdi-play']"></i>
            </button>
            <div class="mb-audio-track">
              <div class="mb-audio-fill" :style="{ width: progress + '%' }"></div>
            </div>
            <span class="mb-audio-time">{{ durationLabel }}</span>
          </div>
          <audio ref="audioRef" :src="message.audio" preload="metadata" @timeupdate="onTime" @ended="onEnded"></audio>
        </div>
        <p v-else-if="message.text" class="mb-text">{{ message.text }}</p>
        <div v-else-if="message.image" class="mb-image">
          <img :src="message.image" alt="Compartida" />
        </div>

        <div class="mb-meta" :class="isOwn ? 'mb-meta-own' : ''">
          <span>{{ timeLabel }}</span>
          <i v-if="isOwn" class="mdi mdi-check-all mb-check"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import PremiumAvatar from './PremiumAvatar.vue'

const props = defineProps({
  message: { type: Object, required: true },
  isOwn: { type: Boolean, default: false },
  showAvatar: { type: Boolean, default: true },
  avatar: { type: String, default: '' },
  senderName: { type: String, default: '' },
})

const audioRef = ref(null)
const playing = ref(false)
const progress = ref(0)

const timeLabel = computed(() => {
  const seconds = props.message.time?.seconds ?? 0
  if (!seconds) return ''
  return new Date(seconds * 1000).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  })
})

const durationLabel = computed(() => {
  const total = props.message.duration || 0
  return `${Math.floor(total / 60)}:${String(total % 60).padStart(2, '0')}`
})

const togglePlay = () => {
  const el = audioRef.value
  if (!el) return
  if (playing.value) {
    el.pause()
  } else {
    el.play().catch(() => {})
  }
  playing.value = !playing.value
}

const onTime = () => {
  const el = audioRef.value
  if (!el || !el.duration) return
  progress.value = (el.currentTime / el.duration) * 100
}

const onEnded = () => {
  playing.value = false
  progress.value = 0
}
</script>

<style scoped>
.mb-row {
  display: flex;
  align-items: flex-end;
  gap: 8px;
}

.mb-own {
  flex-direction: row-reverse;
}

.mb-avatar-hidden {
  visibility: hidden;
}

.mb-max {
  position: relative;
  max-width: 75%;
}

@media (min-width: 768px) {
  .mb-max {
    max-width: 60%;
  }
}

.mb-bubble {
  position: relative;
  padding: 10px 16px 8px;
  animation: slide-up 0.25s ease-out;
}

.mb-bubble-own {
  background: var(--primary);
  color: #fff;
  border-radius: 16px 16px 4px 16px;
}

.mb-bubble-other {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 16px 16px 16px 4px;
}

.mb-text {
  margin: 0;
  font-size: 14px;
  line-height: 1.6;
  white-space: pre-wrap;
  word-break: break-word;
}

.mb-audio {
  min-width: 200px;
  max-width: 260px;
}

.mb-audio-head {
  display: flex;
  align-items: center;
  gap: 8px;
}

.mb-audio-play {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  flex-shrink: 0;
  border: none;
  border-radius: 50%;
  background: var(--primary);
  color: #fff;
  cursor: pointer;
}

.mb-audio-play .mdi {
  font-size: 18px;
}

.mb-bubble-other .mb-audio-play {
  background: var(--foreground);
  color: #fff;
}

.mb-audio-track {
  flex: 1;
  height: 4px;
  border-radius: 2px;
  background: rgba(128, 128, 128, 0.3);
  overflow: hidden;
}

.mb-bubble-own .mb-audio-track {
  background: rgba(255, 255, 255, 0.35);
}

.mb-audio-fill {
  height: 100%;
  background: var(--primary);
  transition: width 0.2s linear;
}

.mb-bubble-own .mb-audio-fill {
  background: #fff;
}

.mb-audio-time {
  font-size: 11px;
  min-width: 20px;
  text-align: right;
}

.mb-audio audio {
  display: none;
}

.mb-image {
  border-radius: 8px;
  overflow: hidden;
  margin: -4px;
}

.mb-image img {
  display: block;
  max-width: 100%;
  max-height: 256px;
  object-fit: contain;
}

.mb-meta {
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 4px;
  font-size: 10px;
}

.mb-meta-own {
  justify-content: flex-end;
}

.mb-bubble-own .mb-meta {
  color: rgba(255, 255, 255, 0.6);
}

.mb-bubble-other .mb-meta {
  color: var(--muted-foreground);
}

.mb-check {
  font-size: 12px;
}
</style>