import { Bot }from "grammy";
import dotenv from 'dotenv';
import {processQuestion} from "./functions.js"
dotenv.config();

const bot = new Bot(process.env.BOT_TOKEN!);

bot.on("message", (ctx) => ctx.reply("--- Bot Iniciado ---"));

bot.command("perguntar",async (ctx) => {
    const question = ctx.msg.text.substring(10); // Remove "/perguntar "
    const response = await processQuestion(question);
    ctx.reply(response);
});

bot.command("help",(ctx) => ctx.reply("Use /perguntar para fazer uma pergunta"));
bot.start();