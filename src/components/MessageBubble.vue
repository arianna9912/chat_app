<template>
  <div class="mb-row" :class="isOwn ? 'mb-own' : 'mb-other'">
    <div class="mb-avatar" :class="!showAvatar ? 'mb-avatar-hidden' : ''">
      <PremiumAvatar :src="avatar || ''" :name="senderName" size="sm" />
    </div>

    <div class="mb-max">
      <div class="mb-bubble" :class="isOwn ? 'mb-bubble-own' : 'mb-bubble-other'">
        <p v-if="message.text" class="mb-text">{{ message.text }}</p>
        <div v-if="message.image" class="mb-image">
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
import { computed } from 'vue'
import PremiumAvatar from './PremiumAvatar.vue'

const props = defineProps({
  message: { type: Object, required: true },
  isOwn: { type: Boolean, default: false },
  showAvatar: { type: Boolean, default: true },
  avatar: { type: String, default: '' },
  senderName: { type: String, default: '' },
})

const timeLabel = computed(() => {
  const seconds = props.message.time?.seconds ?? 0
  if (!seconds) return ''
  return new Date(seconds * 1000).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  })
})
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