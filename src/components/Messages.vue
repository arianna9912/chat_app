<template>
  <div class="mt-2">
    <v-toolbar color="deep-purple-darken-3" density="comfortable" class="rounded-lg font mb-3">
      <v-avatar v-if="other.photo" :image="other.photo" size="34" />
      <v-avatar v-else color="indigo" size="34">
        {{ initialsOf(other.name) }}
      </v-avatar>
      <v-toolbar-title class="ms-2">{{ other.name }}</v-toolbar-title>
      <template v-slot:append>
        <v-chip size="small" color="indigo-lighten-3" variant="flat" class="font">Privado</v-chip>
      </template>
    </v-toolbar>

    <div v-if="message.length === 0" class="text-center pa-6 font" style="color: #94a3b8">
      <v-icon size="44" color="indigo-darken-2">mdi-chat-plus-outline</v-icon>
      <p class="mt-2">No hay mensajes todavía</p>
      <p class="text-caption">¡Envía el primero!</p>
    </div>

    <div class="message-container" ref="messageContainer">
      <v-card
        v-for="item of message"
        :key="item.id"
        width="300"
        :class="item.uid === userChat.uid && 'ml-auto'"
        :color="item.uid === userChat.uid ? 'deep-purple-lighten-4' : 'light-blue-lighten-4'"
        :subtitle="item.displayName"
        :text="item.text"
        class="mb-3 font"
      >
        <div class="message-time">{{ formatDate(item.time) }}</div>
      </v-card>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onUnmounted, nextTick } from "vue";
import { db, auth } from "../firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";

const props = defineProps({
  conversationId: { type: String, required: true },
  other: { type: Object, default: () => ({}) },
});

const userChat = ref(auth.currentUser);
const message = ref([]);
const messageContainer = ref(null);

let unsub = null;

const initialsOf = (name) =>
  (name || "?")
    .split(/\s+/)
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

const listen = (id) => {
  if (unsub) {
    unsub();
    unsub = null;
  }
  message.value = [];
  if (!id) return;

  const q = query(collection(db, "conversations", id, "messages"), orderBy("time"));
  unsub = onSnapshot(q, (snapshot) => {
    snapshot.docChanges().forEach((change) => {
      if (change.type === "added") {
        message.value.push({ id: change.doc.id, ...change.doc.data() });
      }
    });
    nextTick(() => {
      const lastMessageElement = messageContainer.value?.lastElementChild;
      if (lastMessageElement) {
        lastMessageElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
};

watch(() => props.conversationId, listen, { immediate: true });

onUnmounted(() => {
  unsub?.();
});

function formatDate(timestamp) {
  const milliseconds = (timestamp?.seconds ?? 0) * 1000;
  const date = new Date(milliseconds);
  const options = { month: "short", day: "numeric", hour: "numeric", minute: "numeric" };
  return date.toLocaleDateString("en-US", options);
}
</script>

<style>
h1,
.font {
  font-family: "Libre Baskerville", serif;
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