<template>
 

  <v-app>
  
      <v-app-bar color="indigo-darken-4" density="compact">

        <v-app-bar-title class="font animated" flat> <a class="whatsapp-link" @click="openWhatsApp()">📩chat@pp</a>
        </v-app-bar-title>

        <v-btn class="font" prepend-icon="mdi-account" flat color="white" @click="googleAccess" v-if="!userGoogle">
          Sign in
        </v-btn>
        <v-btn class="font" prepend-icon="mdi-account" flat color="white" @click="logout" v-if="userGoogle">
          Log out
        </v-btn>
      </v-app-bar>
      <div >
      <v-main app>
        <v-container>
          <div class="progress-container">
            <v-progress-circular v-if="userGoogle === false" indeterminate color="deep-purple-lighten-3">
              Loading</v-progress-circular>
          </div>
          <Chat v-if="userGoogle"  />
          <div v-else>
          <v-alert v-if="!userGoogle && showAlert" type="error" class="text-center mt-5 chat-background " v-model="showAlert"
              @click="closeAlert" >
              Debes iniciar sesión para acceder al chat
          </v-alert>
          </div>

        </v-container>

      </v-main>

      <v-footer class=" d-flex flex-column"  app>
        <FormAdd  />
      </v-footer>
    </div>
  </v-app>

</template>

<script setup>
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebase"
import Chat from "./components/Chat.vue"
import FormAdd from "./components/FormAdd.vue"
import { ref } from "vue";

const showAlert = ref(true);

const userGoogle = ref(false);

const closeAlert = () => {
  showAlert.value = false;
};
const googleAccess = async () => {
  try {
    const provider = new GoogleAuthProvider()
    const { user } = await signInWithPopup(auth, provider)
    console.log(user);
  } catch (error) {
    console.log(error);
  }
};

const logout = async () => {
  await signOut(auth);
};
onAuthStateChanged(auth, (user) => {
  console.log(user);
  userGoogle.value = user
});

const openWhatsApp = () => {
  window.location.href = 'whatsapp://send?phone=+5352740178';
}

</script>

<style>
.progress-container {
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 5px;
  /* Margen superior de 5 unidades */


}

.font {
  font-family: 'Libre Baskerville', serif;
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

.background-container {
  flex-grow: 1;
  background-image: url('/fondo.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 100vh;
}

.chat-background {
  background: transparent;
}


</style>