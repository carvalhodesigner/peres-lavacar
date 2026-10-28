// Service worker mínimo para habilitar o controle do app pelo navegador.
// Não armazena páginas nem dados de agendamentos em cache.
self.addEventListener("install", function (event) {
  self.skipWaiting();
});
self.addEventListener("activate", function (event) {
  event.waitUntil(self.clients.claim());
});
self.addEventListener("fetch", function (event) {
  if (event.request.method === "GET") {
    event.respondWith(fetch(event.request));
  }
});
