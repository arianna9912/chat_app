# chat@pp — Chat privado

Chat privado 1-a-1 construido con **Vue 3**, **Vuetify**, **Vite** y **Firebase (Auth + Firestore)**.

## Funcionalidades

- Inicio de sesión con Google
- Chat **privado** entre dos usuarios (mensajes 1-a-1, no es un chat grupal)
- Registro automático de cada usuario que inicia sesión
- Lista de conversaciones con previsualización del último mensaje
- Lista de usuarios para iniciar un chat nuevo
- Ordenamiento de conversaciones por actividad reciente
- Datos en tiempo real (Firestore `onSnapshot`)

## Arquitectura en Firestore

```
users/{uid}                          → perfil público de cada usuario
  { uid, displayName, email, photoURL, lastSeen }

conversations/{conversationId}       → una conversación por pareja de usuarios
  { participants: [uidA, uidB], lastMessage, lastAt }
  // conversationId = min(uidA, uidB) + "_" + max(uidA, uidB), es determinístico

conversations/{conversationId}/messages/{messageId}
  { text, time, uid, displayName }
```

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
- Vuetify 3
- Vite
- Firebase (Auth + Firestore)