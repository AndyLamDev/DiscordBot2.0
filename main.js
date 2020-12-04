const Discord = require('discord.js'); //Need to use discord.js
const dotenv = require('dotenv').config(); //Need to use dotenv
//bot is the discord client
const bot = new Discord.Client();

const token = process.env['DISCORD_BOT_TOKEN']; //using an environment variable, Keeps the token hidden

bot.once('ready', () => {
    console.log('Bot is online!');
})

bot.login(token);
