<template>
  <v-form class="w-100" @submit.prevent="SendMessage">
    <v-text-field
      color="black"
      class="font"
      label="Send me a message"
      variant="outlined"
      :class="{ pointer: true }"
      hide-details
      append-icon="mdi-send"
      @click:append="SendMessage"
      v-model="message"
    />
  </v-form>
</template>

<script setup>
import { collection, doc, Timestamp, writeBatch } from "firebase/firestore";
import { auth, db } from "../firebase";
import { ref } from "vue";

const props = defineProps({
  conversationId: { type: String, required: true },
});

const message = ref("");

const SendMessage = async () => {
  const text = message.value.trim();
  if (!text || !props.conversationId) return;

  try {
    const user = auth.currentUser;
    const batch = writeBatch(db);

    const msgRef = doc(
      collection(db, "conversations", props.conversationId, "messages")
    );
    batch.set(msgRef, {
      text,
      time: Timestamp.fromDate(new Date()),
      uid: user.uid,
      displayName: user.displayName,
    });

    batch.update(doc(db, "conversations", props.conversationId), {
      lastMessage: text,
      lastAt: Timestamp.fromDate(new Date()),
    });

    await batch.commit();
    message.value = "";
  } catch (error) {
    console.log(error);
  }
};
</script>

<style>
.font {
  font-family: "Libre Baskerville", serif;
  font-weight: 400;
}

.pointer {
  cursor: pointer;
}
</style>