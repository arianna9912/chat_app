<template>
  <div class="pa-outer" :class="className">
    <div class="pa-ring" :class="showRing ? 'avatar-ring' : ''">
      <div class="pa-avatar" :class="[sizeClasses.avatar, 'pa-' + size]">
        <div v-if="src" class="pa-img">
          <img :src="src" :alt="name" />
        </div>
        <div v-else class="pa-initials" :style="{ background: bgColor }">
          <span :class="sizeClasses.text">{{ initials }}</span>
        </div>
      </div>
    </div>
    <span
      v-if="online !== undefined"
      class="pa-status"
      :class="[sizeClasses.status, online ? 'pa-online' : 'pa-offline']"
    ></span>
  </div>
</template>

<script setup>
const props = defineProps({
  src: { type: String, default: '' },
  name: { type: String, required: true },
  size: { type: String, default: 'md' },
  online: { type: Boolean, default: undefined },
  showRing: { type: Boolean, default: false },
  className: { type: String, default: '' },
})

const sizeConfig = {
  sm: { avatar: 'pa-size-sm', text: 'pa-text-xs', status: 'pa-status-sm' },
  md: { avatar: 'pa-size-md', text: 'pa-text-sm', status: 'pa-status-md' },
  lg: { avatar: 'pa-size-lg', text: 'pa-text-base', status: 'pa-status-lg' },
  xl: { avatar: 'pa-size-xl', text: 'pa-text-xl', status: 'pa-status-xl' },
}

const sizeClasses = sizeConfig[props.size]

const palette = [
  'linear-gradient(135deg, #f97316, #f59e0b)',
  'linear-gradient(135deg, #f59e0b, #ea580c)',
  'linear-gradient(135deg, #ea580c, #ef4444)',
  'linear-gradient(135deg, #f43f5e, #f97316)',
  '#111827',
  'linear-gradient(135deg, #fb923c, #eab308)',
]

const hash = (str) => (str || '').split('').reduce((acc, c) => acc + c.charCodeAt(0), 0)

const bgColor = palette[Math.abs(hash(props.name)) % palette.length]

const initials = (props.name || '?')
  .split(' ')
  .map((n) => n[0])
  .slice(0, 2)
  .join('')
  .toUpperCase()
</script>

<style scoped>
.pa-outer {
  position: relative;
  flex-shrink: 0;
  display: inline-block;
}

.pa-ring {
  border-radius: 9999px;
}

.pa-avatar {
  border-radius: 9999px;
  overflow: hidden;
  background: var(--secondary);
}

.pa-img,
.pa-initials {
  width: 100%;
  height: 100%;
}

.pa-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.pa-initials {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: #fff;
}

.pa-size-sm {
  width: 32px;
  height: 32px;
}

.pa-size-md {
  width: 40px;
  height: 40px;
}

.pa-size-lg {
  width: 44px;
  height: 44px;
}

.pa-size-xl {
  width: 56px;
  height: 56px;
}

.pa-text-xs {
  font-size: 10px;
}

.pa-text-sm {
  font-size: 12px;
}

.pa-text-base {
  font-size: 14px;
}

.pa-text-xl {
  font-size: 16px;
}

.pa-status {
  position: absolute;
  bottom: 0;
  right: 0;
  border-radius: 9999px;
  border: 2px solid var(--card);
}

.pa-status-sm {
  width: 8px;
  height: 8px;
}

.pa-status-md {
  width: 10px;
  height: 10px;
  border-width: 1.5px;
}

.pa-status-lg {
  width: 12px;
  height: 12px;
}

.pa-status-xl {
  width: 14px;
  height: 14px;
}

.pa-online {
  background: #10b981;
}

.pa-offline {
  background: rgba(142, 142, 142, 0.5);
}
</style>