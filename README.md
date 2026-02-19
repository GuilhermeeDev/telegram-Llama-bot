# 🤖 Telegram Bot com Llama

Bot de Telegram que roda uma **LLM leve (1B params)** localmente para responder perguntas, executar comandos e servir como base para experimentos de automações usando bots.

### LLM utilizada
- **meta-llama/Llama-3.2-1B-Instruct** - [**link**](https://huggingface.co/meta-llama/Llama-3.2-1B-Instruct) 

---

## Como rodar

#### 1. Clone este repositório

```
https://github.com/GuilhermeeDev/telegram-Llama-bot.git
cd telegram-Llama-bot
```

#### 2. Instalar dependências

```
npm install
```

#### 3. Configurar variáveis de ambiente
`.env`
```
TELEGRAM_BOT_TOKEN= # Token de bot do telegram
MODEL_PATH=./model-for-telegram-bot/llama-3.2-1B-Q8.gguf
```

#### 4. Clone o repositorio com os modelos `.guff` e `Q8.guff`
```
git clone https://huggingface.co/Glherme/model-for-telegram-bot
```

### 5. Rode
```bash
npm run dev
``` 

---
