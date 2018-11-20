const Telegraf = require('telegraf');
const WizardScene = require('telegraf/scenes/wizard')
const Stage = require('telegraf/stage')
const session = require('telegraf/session')
const Scene = require('telegraf/scenes/base')
const firebaseSession = require('telegraf-session-firebase')
const admin = require('firebase-admin')

// Init Firebase
const serviceAccount = require('./cred.json')
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://svidetel-bot.firebaseio.com"
})
const database = admin.database()

// Bot config
const token = '771814031:AAFn9Tz1HkmyIlCwuJdMWXU6ebMs-4Bk1AU';
const bot = new Telegraf(token);
bot.use(firebaseSession(database.ref('sessions')))

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


const API_TOKEN = process.env.API_TOKEN || '';
const PORT = process.env.PORT || 3000;
const URL = process.env.URL || 'https://powerful-citadel-24733.herokuapp.com';


bot.startPolling();