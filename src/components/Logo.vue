<template>
  <div class="logo" :class="[{ center: center }, className]">
    <div
      class="logo-badge"
      :class="[isWhite ? 'logo-badge-white' : 'gradient-orange', sizeClasses.badge]"
    >
      <svg
        :width="sizeClasses.icon"
        :height="sizeClasses.icon"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 3C7.03 3 3 6.58 3 11C3 13.16 4.04 15.11 5.73 16.5L5 20L8.89 18.32C9.87 18.76 10.9 19 12 19C16.97 19 21 15.42 21 11C21 6.58 16.97 3 12 3Z"
          fill="white"
          fill-opacity="0.95"
        />
        <path
          d="M12 8C11 6.5 9 6.5 8 8C7 9.5 8 11 12 14C16 11 17 9.5 16 8C15 6.5 13 6.5 12 8Z"
          fill="#FF6A00"
        />
      </svg>
    </div>
    <span v-if="showText" class="logo-text" :class="[isWhite ? 'text-white' : 'text-dark', sizeClasses.text]">
      Friendzy
    </span>
  </div>
</template>

<script setup>
const props = defineProps({
  className: { type: String, default: '' },
  size: { type: String, default: 'md' },
  showText: { type: Boolean, default: false },
  variant: { type: String, default: 'default' },
  center: { type: Boolean, default: false },
})

const sizes = {
  sm: { badge: 'logo-sm', text: '16px', icon: 16 },
  md: { badge: 'logo-md', text: '20px', icon: 20 },
  lg: { badge: 'logo-lg', text: '24px', icon: 24 },
  xl: { badge: 'logo-xl', text: '30px', icon: 28 },
}

const sizeClasses = sizes[props.size]
const isWhite = props.variant === 'white'
</script>

<style scoped>
.logo {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo.center {
  justify-content: center;
}

.logo-badge {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  flex-shrink: 0;
}

.logo-badge-white {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
}

.logo-sm {
  width: 32px;
  height: 32px;
}

.logo-md {
  width: 40px;
  height: 40px;
}

.logo-lg {
  width: 48px;
  height: 48px;
}

.logo-xl {
  width: 56px;
  height: 56px;
}

.logo-text {
  font-weight: 700;
  letter-spacing: -0.025em;
}

.text-white {
  color: #fff;
}

.text-dark {
  color: var(--foreground);
}
</style>