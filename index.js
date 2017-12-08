const Telegraf = require('telegraf');
const chef = require('cheferizeIt');

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => {
  console.log('Borking up!');
  return ctx.reply('Bork! Bork! Bork!');
});

bot.command('help', (ctx) => ctx.reply('Send any text and it will be borked!'));
bot.on('text', (ctx) => {
  ctx.reply(chef.cheferize(ctx.message.text))
});

bot.startPolling();