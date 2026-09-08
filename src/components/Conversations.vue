<template>
  <v-list nav dense class="font">
    <v-list-subheader class="font">Mis chats</v-list-subheader>

    <v-list-item v-if="conversations.length === 0" disabled>
      <v-list-item-subtitle>Sin conversaciones todavía</v-list-item-subtitle>
    </v-list-item>

    <v-list-item
      v-for="c in conversations"
      :key="c.id"
      :active="c.id === activeId"
      @click="openConversation(c)"
    >
      <template v-slot:prepend>
        <v-avatar :color="avatarColor(c.id)" size="36">
          {{ initialsOf(otherName(c)) }}
        </v-avatar>
      </template>
      <v-list-item-title>{{ otherName(c) }}</v-list-item-title>
      <v-list-item-subtitle class="text-truncate">
        {{ lastPreview(c) }}
      </v-list-item-subtitle>
    </v-list-item>

    <v-divider class="my-2" />

    <v-list-subheader class="font">Usuarios</v-list-subheader>

    <v-list-item v-if="users.length === 0" disabled>
      <v-list-item-subtitle>No hay otros usuarios registrados</v-list-item-subtitle>
    </v-list-item>

    <v-list-item
      v-for="u in users"
      :key="u.uid"
      :active="u.uid === otherOf(activeId)"
      @click="startWith(u)"
    >
      <template v-slot:prepend>
        <v-avatar v-if="u.photoURL" :image="u.photoURL" size="36" />
        <v-avatar v-else :color="avatarColor(u.uid)" size="36">
          {{ initialsOf(u.displayName) }}
        </v-avatar>
      </template>
      <v-list-item-title>{{ u.displayName }}</v-list-item-title>
      <v-list-item-subtitle class="text-truncate">
        {{ u.email }}
      </v-list-item-subtitle>
    </v-list-item>
  </v-list>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { db, auth } from "../firebase";
import { collection, query, onSnapshot, doc, setDoc, getDoc, serverTimestamp, arrayUnion } from "firebase/firestore";
import { getConversationId, otherParticipantUid } from "../utils/chat";

const emit = defineEmits(["open"]);
const props = defineProps({
  activeId: { type: String, default: "" },
});

const currentUser = auth.currentUser;
const users = ref([]);
const conversations = ref([]);

const AV_COLORS = ["indigo", "teal", "pink", "amber", "green", "deep-purple", "cyan"];

let unsubUsers = null;
let unsubConvs = null;

onMounted(() => {
  unsubUsers = onSnapshot(query(collection(db, "users")), (snap) => {
    users.value = snap.docs
      .map((d) => d.data())
      .filter((u) => u.uid !== currentUser.uid);
  });

  unsubConvs = onSnapshot(
    query(collection(db, "conversations")).where("participants", "array-contains", currentUser.uid),
    (snap) => {
      conversations.value = snap.docs
        .map((d) => ({ id: d.id, ...d.data() }))
        .sort((a, b) => (b.lastAt?.toMillis?.() ?? 0) - (a.lastAt?.toMillis?.() ?? 0));
    }
  );
});

onUnmounted(() => {
  unsubUsers?.();
  unsubConvs?.();
});

const otherName = (c) => {
  const uid = otherParticipantUid(c.id, currentUser.uid);
  const u = users.value.find((x) => x.uid === uid);
  return u ? u.displayName : uid;
};

const otherPhoto = (c) => {
  const uid = otherParticipantUid(c.id, currentUser.uid);
  const u = users.value.find((x) => x.uid === uid);
  return u ? u.photoURL : "";
};

const lastPreview = (c) =>
  c.lastMessage ? c.lastMessage : "Sin mensajes todavía";

const otherOf = (id) => (id ? otherParticipantUid(id, currentUser.uid) : null);

const openConversation = (c) => {
  const other = users.value.find(
    (u) => u.uid === otherParticipantUid(c.id, currentUser.uid)
  );
  emit("open", {
    id: c.id,
    other: { name: otherName(c), photo: other?.photoURL || "" },
  });
};

const startWith = async (u) => {
  const id = getConversationId(currentUser.uid, u.uid);
  const conversationRef = doc(db, "conversations", id);
  const snap = await getDoc(conversationRef);
  if (!snap.exists()) {
    await setDoc(conversationRef, {
      participants: arrayUnion(currentUser.uid, u.uid),
      lastAt: serverTimestamp(),
      lastMessage: "",
    });
  }
  emit("open", { id, other: { name: u.displayName, photo: u.photoURL || "" } });
};

const avatarColor = (key) => {
  const sum = [...(key || "")].reduce((a, c) => a + c.charCodeAt(0), 0);
  return AV_COLORS[Math.abs(sum) % AV_COLORS.length];
};

const initialsOf = (name) =>
  (name || "?")
    .split(/\s+/)
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
</script>