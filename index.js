const { Composer, Stage, Scene, session } = require('micro-bot')

// Bot config
const bot = new Composer()

require('https').createServer().listen(process.env.PORT || 5000).on('request', function(req, res){
    res.end('')
  });

// Scenario

var scene1Greet = 'Здравствуйте! Насколько я понимаю вы решили заняться этим загадочным происшествием. Что ж проходите. Это моё детище "древние инсталляции". Как жаль, что лучшая экспозиция была испорчена. Вы можете здесь свободно ходить и задавать любые вопросы. Одна из краж случилась на втором этаже. Был украден самый большой фаллос в мире. Всего там их было 3. Осмотрите место преступления и сообщите мне если что-то найдёте.';
var scene2Greet = 'Чудесно. Вы говорите, что след ведёт в зал с музыкальными инструментами? Там была украдена золотая Арфа.';

var scene1 = new Scene("scene1");
scene1.enter((ctx) => ctx.reply(scene1Greet));
scene1.on('message', (ctx) => {
    if (ctx.message.text === "23d55r97")
        ctx.scene.enter("scene2");
    else
        ctx.reply("Что-то пошло не так");
});

var scene2 = new Scene("scene2");
scene2.enter((ctx) => ctx.reply(scene2Greet));
scene2.on('message', (ctx) => {
    if (ctx.message.text === "16d982r")
        ctx.scene.enter("scene2");
    else
        ctx.reply("Что-то пошло не так");
});

const stage = new Stage();
stage.register(scene1);
stage.register(scene2);

bot.use(session());
bot.use(stage);

bot.start((ctx) => ctx.scene.enter("scene1"));

module.exports = bot