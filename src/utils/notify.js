let audioCtx = null
let unlocked = false

function unlock() {
  const AC = window.AudioContext || window.webkitAudioContext
  if (!AC || typeof window === 'undefined') return
  if (!audioCtx) audioCtx = new AC()
  if (audioCtx.state === 'suspended') audioCtx.resume().catch(() => {})
}

const unlockOnce = () => {
  if (!unlocked) {
    unlocked = true
    unlock()
  }
}

if (typeof window !== 'undefined') {
  ;['pointerdown', 'keydown', 'touchstart'].forEach((ev) =>
    window.addEventListener(ev, unlockOnce, { once: true })
  )
}

export function beep() {
  unlock()
  if (!audioCtx) return
  const now = audioCtx.currentTime
  ;[660, 880].forEach((freq, i) => {
    const osc = audioCtx.createOscillator()
    const gain = audioCtx.createGain()
    const start = now + i * 0.12
    osc.type = 'sine'
    osc.frequency.value = freq
    gain.gain.setValueAtTime(0.0001, start)
    gain.gain.exponentialRampToValueAtTime(0.18, start + 0.02)
    gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.35)
    osc.connect(gain)
    gain.connect(audioCtx.destination)
    osc.start(start)
    osc.stop(start + 0.4)
  })
}

export function ensurePermission() {
  if (typeof Notification !== 'undefined' && Notification.permission === 'default') {
    Notification.requestPermission().catch(() => {})
  }
}

export function notify(title, body) {
  if (typeof Notification !== 'undefined' && Notification.permission === 'granted') {
    try {
      new Notification(title, { body, icon: '/friendzy/favicon.svg' })
    } catch (e) {}
  }
}