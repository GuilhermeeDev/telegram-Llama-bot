import { Bot }from "grammy";
import dotenv from 'dotenv';

dotenv.config();

const bot = new Bot(process.env.BOT_TOKEN!);

bot.on("message", (ctx) => ctx.reply("Hi there!"));

bot.start();