# Friendzy 

Chat, construido con **Vue 3**, **Vite** y **Firebase (Auth + Firestore)**.

## Funcionalidades

- Pantalla de login/landing (panel naranja con gradiente + panel blanco con card de login)
- Inicio de sesión con **Google** o con **email y contraseña** (+ registro)
- Chat **privado** entre dos usuarios (mensajes 1-a-1, no es un chat grupal)
- Sidebar con perfil, buscador de conversaciones y selector de usuarios (nuevo chat)
- Burbujas de mensaje con avatares e indicador de estado, hora y visto
- Envío de mensajes de texto o **imágenes**
- Registro automático de cada usuario que inicia sesión
- Datos en tiempo real (Firestore `onSnapshot`)

## Requisito de Firebase

En **Firebase Console → Authentication → Sign-in method**, asegúrate de tener habilitados:

- **Google**
- **Email/Password** (necesario para el login con email)

Flujo de amistad:
1. Todos los usuarios registrados aparecen en el botón `+` (o con el buscador).
2. Con el botón **Solicitar** se envía una solicitud de chat (doc en `requests/`).
3. El destinatario la ve en la sección **Solicitudes** y la **Acepta** o la **Rechaza**.
4. Al aceptar, la otra persona pasa a la lista de **Amigos** y se abre la conversación
   (el documento de la conversación se crea automáticamente al abrirla, aunque aún
   no haya mensajes, y aparece en la lista **Conversaciones**).

## Stack

- Vue 3
- Vuetify 3 (tema blanco + naranja)
- Vite
- Firebase (Auth + Firestore)
