const firebase = require('firebase');
const Telegraf = require('telegraf');
const firebaseSession = require('telegraf-session-firebase')

// Init Firebase
firebase.initializeApp({
    apiKey: "AIzaSyAs4jl6fqOIxk1IBWS1luzWrZErt1kI8gk",
    authDomain: "svidetel-bot.firebaseapp.com",
    databaseURL: "https://svidetel-bot.firebaseio.com",
    projectId: "svidetel-bot",
    storageBucket: "svidetel-bot.appspot.com",
    messagingSenderId: "546022080584"
});

// Bot config
const token = '753858273:AAEd1ojEssmNIe6rGSHtfOY9knHthysBzng';
const bot = new Telegraf(token);
bot.use(firebaseSession(firebase.ref('sessions')))

// Scenario
const main = new WizardScene(
    "main", // Имя сцены
    (ctx) => {
      ctx.reply('Здравствуйте! Насколько я понимаю вы решили заняться этим загадочным происшествием. Что ж проходите. Это моё детище "древние инсталляции". Как жаль, что лучшая экспозиция была испорчена. Вы можете здесь свободно ходить и задавать любые вопросы. Одна из краж случилась на втором этаже. Был украден самый большой фаллос в мире. Всего там их было 3. Осмотрите место преступления и сообщите мне если что-то найдёте.');
      return ctx.wizard.next(); // Переходим к следующему обработчику.
    },
    (ctx) => {
        if (ctx.message.text === "23d55r97") {
            return ctx.wizard.next();
        }
    },
    (ctx) => {
      ctx.reply('Чудесно. Вы говорите, что след ведёт в зал с музыкальными инструментами? Там была украдена золотая Арфа.');
      return ctx.scene.leave();
    },
    (ctx) => {
        if (ctx.message.text === "16d982r") {
            return ctx.wizard.next();
        }
    },
    (ctx) => {
      ctx.reply('Странно, что пропала именно она. Ведь эта арфа принадлежала Малевичу. Его картина Чёрный квадрат также висит в моем музее.');
      return ctx.scene.leave();
    });


const stage = new Stage();
stage.register(main);

bot.use(session());
bot.use(stage.middleware());

bot.action("Начать", (ctx) => ctx.scene.enter("main"));
bot.startPolling();