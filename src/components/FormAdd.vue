<template>

        <v-form class="w-100" @submit.prevent="SendMessage">
            <v-text-field color="black" class="font" label="Send me a message" variant="outlined"  :class="{ 'pointer': true }" hide-details append-icon="mdi-send"  @click:append="SendMessage" v-model="message">
           
            </v-text-field>
            </v-form>
     
</template>

<script setup>
import { addDoc, collection, Timestamp  } from "firebase/firestore";
import {auth,db} from "../firebase"
import {ref} from "vue"

const message=ref("");

const SendMessage=async()=>{
    try {
      const clientTimestamp = Timestamp.fromDate(new Date());
         // Validar que el mensaje no esté en blanco
    if (message.value.trim() === "") {
      return; // Salir de la función si el mensaje está en blanco
    }
      await addDoc(collection(db,'chats'),{
        text:message.value,
        time: clientTimestamp,
        uid:auth.currentUser.uid,
        displayName:auth.currentUser.displayName
      }) 
      message.value="" ;
    } catch (error) {
        console.log(error);
    }
}



</script>
<style>

 .font {
    font-family: 'Libre Baskerville',serif;
     color:color;
     font-weight:400;
  }
  .pointer {
  cursor: pointer;
}

</style>