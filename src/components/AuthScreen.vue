<template>
  <main class="auth">
    <!-- Left - Orange gradient branding -->
    <section class="auth-left">
      <div class="auth-grid-white"></div>
      <div class="auth-left-inner">
        <Logo size="lg" showText variant="white" />

        <div class="auth-left-mid">
          <h1>
            Conecta con amigos
            <br />
            <span>de forma inteligente</span>
          </h1>
          <p>
            Chat en tiempo real, conoce nuevas personas y crea conexiones
            significativas en una plataforma segura.
          </p>
          <ul>
            <li v-for="(feature, index) in features" :key="index" class="auth-feature" :style="{ animationDelay: 0.3 + index * 0.1 + 's' }">
              <span class="auth-checkmark">
                <i class="mdi mdi-check"></i>
              </span>
              <span>{{ feature }}</span>
            </li>
          </ul>
        </div>

        <div class="auth-stats">
          <div v-for="stat in stats" :key="stat.label">
            <strong>{{ stat.value }}</strong>
            <span>{{ stat.label }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Right - Login form -->
    <section class="auth-right">
      <div class="auth-right-grid"></div>

      <div class="auth-form-wrap">
        <!-- Mobile logo -->
        <div class="auth-mobile-logo">
          <Logo size="xl" showText center />
          <p>Conecta con amigos de todo el mundo</p>
        </div>

        <!-- Form card -->
        <div class="auth-card">
          <div class="auth-card-head">
            <h2>{{ mode === 'login' ? 'Bienvenido de vuelta' : 'Crea tu cuenta' }}</h2>
            <p>
              {{ mode === 'login' ? 'Ingresa a tu cuenta para continuar' : 'Regístrate gratis y empieza a chatear' }}
            </p>
          </div>

          <button class="google-btn" type="button" @click="googleAccess">
            <GoogleIcon />
            <span>Iniciar sesión con Google</span>
          </button>

          <div class="divider">
            <span>o con tu email</span>
          </div>

          <div class="fields">
            <div v-if="mode === 'register'" class="field">
              <label>Nombre</label>
              <input v-model="name" type="text" placeholder="Tu nombre" />
            </div>
            <div class="field">
              <label>Email</label>
              <input v-model="email" type="email" placeholder="tu@email.com" />
            </div>
            <div class="field">
              <label>Contraseña</label>
              <input
                v-model="password"
                type="password"
                placeholder="••••••••"
                @keyup.enter="submit"
              />
            </div>
          </div>

          <div v-if="errorMsg" class="auth-error">
            <i class="mdi mdi-alert-circle-outline"></i>
            <span>{{ errorMsg }}</span>
          </div>

          <button class="submit-btn btn-primary" type="button" :disabled="loading" @click="submit">
            <span>{{ loading ? 'Cargando...' : mode === 'login' ? 'Iniciar sesión' : 'Crear cuenta' }}</span>
            <i class="mdi mdi-arrow-right"></i>
          </button>

          <p class="switch-link">
            <template v-if="mode === 'login'">
              ¿No tienes cuenta?
              <a href="#" @click.prevent="switchMode('register')">Regístrate gratis</a>
            </template>
            <template v-else>
              ¿Ya tienes cuenta?
              <a href="#" @click.prevent="switchMode('login')">Inicia sesión</a>
            </template>
          </p>
        </div>

        <!-- Footer badges -->
        <div class="auth-badges">
          <div class="auth-badge">
            <i class="mdi mdi-shield-lock-outline"></i>
            <span>Seguro</span>
          </div>
          <div class="auth-badge">
            <i class="mdi mdi-message-text-clock-outline"></i>
            <span>Tiempo real</span>
          </div>
          <div class="auth-badge">
            <i class="mdi mdi-web"></i>
            <span>Global</span>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth'
import { auth } from '../firebase'
import Logo from './Logo.vue'
import GoogleIcon from './GoogleIcon.vue'

const mode = ref('login')
const email = ref('')
const password = ref('')
const name = ref('')
const loading = ref(false)
const errorMsg = ref('')

const features = [
  'Mensajería en tiempo real',
  'Conoce personas de todo el mundo',
  'Seguridad y privacidad garantizada',
]

const stats = [
  { value: '10K+', label: 'Usuarios' },
  { value: '50K+', label: 'Mensajes' },
  { value: '99%', label: 'Uptime' },
]

const switchMode = (m) => {
  mode.value = m
  errorMsg.value = ''
}

const googleAccess = async () => {
  try {
    const provider = new GoogleAuthProvider()
    await signInWithPopup(auth, provider)
  } catch (error) {
    console.log(error)
  }
}

const friendlyError = (code) => {
  switch (code) {
    case 'auth/invalid-credential':
    case 'auth/user-not-found':
    case 'auth/wrong-password':
      return 'Email o contraseña incorrectos'
    case 'auth/email-already-in-use':
      return 'Este email ya está registrado'
    case 'auth/invalid-email':
      return 'Introduce un email válido'
    case 'auth/weak-password':
      return 'La contraseña debe tener al menos 6 caracteres'
    case 'auth/too-many-requests':
      return 'Demasiados intentos. Intenta más tarde'
    default:
      return `Error: ${code}`
  }
}

const submit = async () => {
  errorMsg.value = ''
  if (!email.value.trim() || !password.value) {
    errorMsg.value = 'Completa todos los campos'
    return
  }
  if (password.value.length < 6) {
    errorMsg.value = 'La contraseña debe tener al menos 6 caracteres'
    return
  }

  loading.value = true
  try {
    if (mode.value === 'login') {
      await signInWithEmailAndPassword(auth, email.value.trim(), password.value)
    } else {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email.value.trim(),
        password.value
      )
      if (name.value.trim()) {
        await updateProfile(user, { displayName: name.value.trim() })
      }
    }
  } catch (error) {
    console.log(error)
    errorMsg.value = friendlyError(error.code)
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.auth {
  position: relative;
  min-height: 100vh;
  display: flex;
  overflow: hidden;
  background: var(--background);
}

/* LEFT */
.auth-left {
  display: none;
  width: 45%;
  position: relative;
  background: linear-gradient(135deg, #ff8a1e 0%, #ff5a00 100%);
  flex-direction: column;
}

.auth-grid-white {
  position: absolute;
  inset: 0;
  opacity: 0.1;
  background-size: 40px 40px;
  background-image: linear-gradient(to right, white 1px, transparent 1px),
    linear-gradient(to bottom, white 1px, transparent 1px);
  pointer-events: none;
}

.auth-left-inner {
  position: relative;
  z-index: 1;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 40px;
}

.auth-left-mid {
  max-width: 26rem;
}

.auth-left-mid h1 {
  color: #fff;
  font-size: clamp(28px, 3vw, 44px);
  font-weight: 700;
  line-height: 1.25;
  margin: 0 0 24px;
  animation: slide-up 0.5s ease-out 0.1s both;
}

.auth-left-mid h1 span {
  color: rgba(255, 255, 255, 0.8);
}

.auth-left-mid p {
  color: rgba(255, 255, 255, 0.7);
  font-size: 17px;
  line-height: 1.7;
  margin: 0 0 40px;
  animation: slide-up 0.5s ease-out 0.2s both;
}

.auth-left-mid ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.auth-feature {
  display: flex;
  align-items: center;
  gap: 12px;
  opacity: 0;
  animation: slide-up 0.5s ease-out both;
}

.auth-feature span:last-child {
  color: rgba(255, 255, 255, 0.9);
  font-size: 14px;
}

.auth-checkmark {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.auth-checkmark .mdi {
  font-size: 12px;
  color: #fff;
}

.auth-stats {
  display: flex;
  gap: 32px;
  opacity: 0;
  animation: fade-in 0.5s ease-out 0.6s both;
}

.auth-stats strong {
  display: block;
  color: #fff;
  font-size: 24px;
  font-weight: 700;
}

.auth-stats span {
  color: rgba(255, 255, 255, 0.6);
  font-size: 14px;
}

/* RIGHT */
.auth-right {
  flex: 1;
  position: relative;
  background: var(--background);
  display: flex;
  align-items: center;
  justify-content: center;
}

.auth-right-grid {
  position: absolute;
  inset: 0;
  opacity: 0.5;
  pointer-events: none;
}

.auth-right .auth-right-grid {
  background-size: 40px 40px;
  background-image: linear-gradient(to right, var(--border) 1px, transparent 1px),
    linear-gradient(to bottom, var(--border) 1px, transparent 1px);
}

.auth-form-wrap {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 400px;
  padding: 24px;
}

.auth-mobile-logo {
  display: block;
  text-align: center;
  margin-bottom: 40px;
  opacity: 0;
  animation: fade-in 0.5s ease-out 0.3s both;
}

.auth-mobile-logo p {
  color: var(--muted-foreground);
  font-size: 14px;
  margin: 12px 0 0;
}

.auth-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  opacity: 0;
  animation: slide-up 0.5s ease-out both;
}

.auth-card-head {
  margin-bottom: 32px;
}

.auth-card-head h2 {
  font-size: 24px;
  font-weight: 600;
  color: var(--foreground);
  margin: 0 0 8px;
  letter-spacing: -0.025em;
}

.auth-card-head p {
  color: var(--muted-foreground);
  font-size: 14px;
  margin: 0;
}

.google-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 48px;
  border: 1px solid var(--border);
  border-radius: 8px;
  background: var(--card);
  color: var(--foreground);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  gap: 8px;
  opacity: 0;
  animation: slide-up 0.5s ease-out 0.2s both;
}

.google-btn:hover {
  background: var(--secondary);
}

.divider {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
  opacity: 0;
  animation: slide-up 0.5s ease-out 0.3s both;
}

.divider::before {
  content: '';
  position: absolute;
  inset: 0 auto 0 0;
  width: 100%;
  height: 1px;
  background: var(--border);
  top: 50%;
}

.divider span {
  position: relative;
  background: var(--card);
  padding: 0 16px;
  font-size: 12px;
  color: var(--muted-foreground);
}

.fields {
  display: flex;
  flex-direction: column;
  gap: 16px;
  opacity: 0;
  animation: slide-up 0.5s ease-out 0.35s both;
}

.field label {
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: var(--foreground);
  margin-bottom: 8px;
}

.field input {
  width: 100%;
  height: 48px;
  padding: 0 16px;
  border-radius: 8px;
  background: var(--secondary-50);
  border: 1px solid var(--border);
  color: var(--foreground);
  font-size: 14px;
  font-family: inherit;
  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.field input::placeholder {
  color: var(--muted-foreground);
}

.field input:focus {
  border-color: var(--primary);
  box-shadow: 0 0 0 3px var(--ring);
}

.auth-error {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 14px;
  padding: 10px 12px;
  border-radius: 8px;
  background: rgba(239, 68, 68, 0.08);
  color: var(--destructive);
  font-size: 13px;
  animation: scale-in 0.3s ease-out;
}

.auth-error .mdi {
  font-size: 16px;
}

.submit-btn {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 48px;
  margin-top: 20px;
  padding: 0 20px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  opacity: 0;
  animation: slide-up 0.5s ease-out 0.4s both;
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.submit-btn .mdi {
  font-size: 20px;
  transition: transform 0.2s ease;
}

.submit-btn:hover .mdi {
  transform: translateX(3px);
}

.switch-link {
  text-align: center;
  font-size: 14px;
  color: var(--muted-foreground);
  margin: 20px 0 0;
  opacity: 0;
  animation: fade-in 0.5s ease-out 0.5s both;
}

.switch-link a {
  color: var(--primary);
  font-weight: 500;
  text-decoration: none;
}

.switch-link a:hover {
  text-decoration: underline;
}

.auth-badges {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  margin-top: 32px;
  opacity: 0;
  animation: fade-in 0.5s ease-out 0.5s both;
}

.auth-badge {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: var(--muted-foreground);
}

.auth-badge .mdi {
  font-size: 14px;
}

@media (min-width: 1024px) {
  .auth-left {
    display: flex;
  }

  .auth-mobile-logo {
    display: none;
  }
}
</style>