# 🤖 Bot de Telegram com LLM local

Bot de Telegram que roda uma **LLM leve (< 1B params)** localmente para responder perguntas simples, executar comandos e servir como base para experimentos de automações usando bots.

---

## Funcionalidades

* Respostas a perguntas simples
* Processamento de mensagens de texto
* Inferência local (CPU)
* Estrutura modular para expansão

---

## LLM utilizada
* **meta-llama/Llama-3.2-1B-Instruct** - [**link**](https://huggingface.co/meta-llama/Llama-3.2-1B-Instruct) 

---

## ▶️ Como rodar

#### 1. Clone este repositório

```
https://github.com/GuilhermeeDev/Telegram-Bot.git
cd Telegram-Bot
```

#### 2. Instalar dependências

```
npm install
```


#### 3. Configurar variáveis de ambiente

- Debian based's
```
touch .env
echo "BOT_TOKEN=SEU_TOKEN_DO_TELEGRAM" | tee -a .env
```

### 4. Rode
- Para `forks` de desenvolvimento do projeto
```bash
npm run dev
```

**ou**

- Para uso ou produção
```bash
npm run build && npm start
```

---