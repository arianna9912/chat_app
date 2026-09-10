// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        dark: false,
        colors: {
          primary: '#FF6A00',
          secondary: '#F7F7F7',
          accent: '#FFB27D',
          error: '#EF4444',
          info: '#0EA5E9',
          success: '#22C55E',
          warning: '#F59E0B',
          background: '#FFFFFF',
          surface: '#FFFFFF',
        },
      },
    },
  },
})