<template>
    <v-app>
 
     <div class="message-container" ref="messageContainer">
              <v-card v-for="item of message" :key="item.id" width="300" :class="item.uid === userChat.uid && 'ml-auto'"
            :color="item.uid === userChat.uid ? 'deep-purple-lighten-4' : 'light-blue-lighten-4'"
            :subtitle="item.displayName" :text="item.text" class="mb-3 font" >

            <div class="message-time">{{formatDate(item.time)}}</div>
        </v-card>
      </div>
    </v-app>
</template>

<script setup>

import { db, auth } from '../firebase'
import { collection, query, onSnapshot,orderBy } from "firebase/firestore"
import { ref,onMounted, onUnmounted, nextTick} from "vue"

const userChat = ref(auth.currentUser);
const message = ref([]);
const messageContainer = ref(null);
onMounted(() => {
const q = query(collection(db, "chats"),orderBy("time"));
const unscribe = onSnapshot(q, (snapshot) => {
    snapshot.docChanges().forEach((change) => {
        if (change.type == 'added') {          
      const item = {
        id: change.doc.id,
        ...change.doc.data()
      };
      message.value.push(item);
    
    }
    });
   
    nextTick(() => {
          const lastMessageElement = messageContainer.value.lastElementChild;
          if (lastMessageElement) {
            lastMessageElement.scrollIntoView();
          }
        });
});
});

onUnmounted(() => {
      unscribe(); // Detener la escucha al desmontar el componente
    });

function formatDate(timestamp) {
  const seconds = timestamp.seconds; // Obtener los segundos del timestamp
  const milliseconds = seconds * 1000; // Convertir los segundos a milisegundos
  const date = new Date(milliseconds); // Crear el objeto Date usando los milisegundos
  const options = { month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}
</script>

<style>

  h1,  .font {
    font-family: 'Libre Baskerville', serif;

     font-weight: 200;
  }
  .message-time {
  position: absolute;
  bottom: 10px;
  right: 10px;
  font-size: 12px;
  color: gray;
}
</style>