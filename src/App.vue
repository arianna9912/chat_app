<template>
  <v-app>
    <v-app-bar color="indigo-darken-4" density="compact">
      <v-app-bar-title class="font animated" flat>
        <a class="whatsapp-link" @click="openWhatsApp()">📩chat@pp</a>
      </v-app-bar-title>

      <v-btn class="font" prepend-icon="mdi-account" flat color="white" @click="googleAccess" v-if="!userGoogle">
        Sign in
      </v-btn>
      <v-btn class="font" prepend-icon="mdi-account" flat color="white" @click="logout" v-if="userGoogle">
        Log out
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-if="userGoogle" app left width="340">
      <Conversations
        :active-id="activeConversation ? activeConversation.id : ''"
        @open="handleOpen"
      />
    </v-navigation-drawer>

    <v-main app>
      <v-container>
        <div v-if="userGoogle === null" class="progress-container">
          <v-progress-circular v-if="userGoogle === null" indeterminate color="deep-purple-lighten-3">
            Loading
          </v-progress-circular>
        </div>

        <template v-else-if="userGoogle">
          <Messages
            v-if="activeConversation"
            :conversation-id="activeConversation.id"
            :other="activeConversation.other"
          />
          <div v-else class="text-center mt-12 font" style="color: #94a3b8">
            <v-icon size="72" color="indigo-darken-2">mdi-chat-outline</v-icon>
            <p class="mt-3">Selecciona un usuario o una conversación</p>
            <p class="text-caption">para empezar a chatear en privado</p>
          </div>
        </template>

        <div v-else>
          <v-alert v-if="!userGoogle && showAlert" type="error" class="text-center mt-5 chat-background" @click="closeAlert">
            Debes iniciar sesión para acceder al chat
          </v-alert>
        </div>
      </v-container>
    </v-main>

    <v-footer v-if="userGoogle && activeConversation" app>
      <FormAdd :conversation-id="activeConversation.id" />
    </v-footer>
  </v-app>
</template>

<script setup>
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "./firebase";
import Conversations from "./components/Conversations.vue";
import Messages from "./components/Messages.vue";
import FormAdd from "./components/FormAdd.vue";
import { ref } from "vue";

const showAlert = ref(true);
const userGoogle = ref(null);
const activeConversation = ref(null);

const closeAlert = () => {
  showAlert.value = false;
};

const googleAccess = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const { user } = await signInWithPopup(auth, provider);
    console.log(user);
  } catch (error) {
    console.log(error);
  }
};

const logout = async () => {
  await signOut(auth);
};

const handleOpen = ({ id, other }) => {
  activeConversation.value = { id, other };
};

onAuthStateChanged(auth, async (user) => {
  userGoogle.value = user;
  if (user) {
    try {
      await setDoc(
        doc(db, "users", user.uid),
        {
          uid: user.uid,
          displayName: user.displayName || user.email,
          email: user.email,
          photoURL: user.photoURL || "",
          lastSeen: serverTimestamp(),
        },
        { merge: true }
      );
    } catch (error) {
      console.error("Error registrando usuario:", error);
    }
  }
});

const openWhatsApp = () => {
  window.location.href = "whatsapp://send?phone=+5352740178";
};
</script>

<style>
.progress-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
}

.font {
  font-family: "Libre Baskerville", serif;
  font-weight: 200;
}

.animated {
  animation: jump 1s infinite;
}

@keyframes jump {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-5px);
  }

  100% {
    transform: translateY(0);
  }
}

.whatsapp-link {
  color: white;
  text-decoration: none;
  cursor: pointer;
}

.chat-background {
  background: transparent;
}
</style>