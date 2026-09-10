# Friendzy — Chat privado

Chat privado 1-a-1 con el diseño **blanco y naranja** de "Friendzy" (login split + chat moderno), construido con **Vue 3**, **Vite** y **Firebase (Auth + Firestore)**.

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

## Arquitectura en Firestore

```
users/{uid}                          → perfil público de cada usuario
  { uid, displayName, email, photoURL, lastSeen }

conversations/{conversationId}       → una conversación por pareja de usuarios
  { participants: [uidA, uidB], lastMessage, lastAt }
  // conversationId = min(uidA, uidB) + "_" + max(uidA, uidB), es determinístico

conversations/{conversationId}/messages/{messageId}
  { text?, image?, time, uid, displayName }
```

Los mensajes con imagen guardan la imagen como `dataURL` en el campo `image`.
Los mensajes de texto usan el campo `text`.

El `conversationId` se calcula con `min(uidA, uidB) + "_" + max(uidA, uidB)`,
por lo que cada pareja de usuarios tiene siempre la misma conversación.

## Reglas de seguridad recomendadas (Firestore)

Para que los chats sean realmente privados, pega estas reglas en
**Firebase Console → Firestore → Reglas**:

```js
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    function isParticipant(conversationId) {
      return conversationId.split('_').hasAny(request.auth.uid);
    }

    match /users/{userId} {
      allow read: if request.auth != null;
      allow write: if request.auth != null && request.auth.uid == userId;
    }

    match /conversations/{conversationId} {
      allow read, update: if request.auth != null && isParticipant(conversationId);
      allow create: if request.auth != null;
      allow delete: if false;
    }

    match /conversations/{conversationId}/messages/{messageId} {
      allow read, create: if request.auth != null && isParticipant(conversationId);
      allow update, delete: if false;
    }
  }
}
```

## Despliegue local

```bash
npm install
npm run dev
```

## Stack

- Vue 3
- Vuetify 3 (tema blanco + naranja)
- Vite
- Firebase (Auth + Firestore)