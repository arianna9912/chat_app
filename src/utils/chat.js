// Los uid de Google (Firebase Auth) son alfanuméricos, por lo que "_" es un
// separador seguro para construir el id determinístico de la conversación.
export const getConversationId = (uidA, uidB) =>
  [uidA, uidB].sort().join("_");

export const otherParticipantUid = (conversationId, uid) =>
  conversationId.split("_").find((p) => p !== uid);