const { Composer, Stage, Scene, session } = require('micro-bot')

// Bot config
const bot = new Composer()

require('https').createServer().listen(process.env.PORT || 5000).on('request', function(req, res){
    res.end('')
  });


// Scenario

var scene1Greet = 'Здравствуйте! Насколько я понимаю вы решили заняться этим загадочным происшествием. Что ж проходите. Это моё детище "древние инсталляции". Как жаль, что лучшая экспозиция была испорчена. Вы можете здесь свободно ходить и задавать любые вопросы. Одна из краж случилась на втором этаже. Был украден самый большой фаллос в мире. Всего там их было 3. Осмотрите место преступления и сообщите мне если что-то найдёте.';
var scene2Greet = 'Чудесно. Вы говорите, что след ведёт в зал с музыкальными инструментами? Там была украдена золотая Арфа.';
var scene3Greet = 'Cтранно, что пропала именно она. Ведь эта арфа принадлежала Малевичу. Его картина Чёрный квадрат также висит в моем музее.';
var scene4Greet = 'Под картиной вы нашли записку? Так так. "встретимся под самой тёмной лестницей" ';
var scene5Greet = 'Вы обнаружили носовой платок, с буквами А.С.? Инициалы прям как у Пушкина.';


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
        ctx.scene.enter("scene3");
    else
        ctx.reply("Что-то пошло не так");
});

var scene3 = new Scene("scene3");
scene3.enter((ctx) => ctx.reply(scene3Greet));
scene3.on('message', (ctx) => {
    if (ctx.message.text === "5dr643")
        ctx.scene.enter("scene4");
    else
        ctx.reply("Что-то пошло не так");
});

var scene4 = new Scene("scene4");
scene4.enter((ctx) => ctx.reply(scene4Greet));
scene4.on('message', (ctx) => {
    if (ctx.message.text === "3d3r43")
        ctx.scene.enter("scene5");
    else
        ctx.reply("Что-то пошло не так");
});

var scene5 = new Scene("scene5");
scene5.enter((ctx) => ctx.reply(scene5Greet));
scene5.on('message', (ctx) => {
    if (ctx.message.text === "6d76r4")
        ctx.scene.leave()
    else
        ctx.reply("Что-то пошло не так");
    if (ctx.message.text === "6d76r4") { 
ctx.reply("Вот мы и нашли первую улику. Меж страниц было Письмо адресованное некоему Петрову. Был у нас такой сотрудник, уволился пару месяцев назад. Я давно подозревал, что он нехороший человек. Спасибо за помощь!");
ctx.scene.leave(); 
}
});



const stage = new Stage();
stage.register(scene1);
stage.register(scene2);
stage.register(scene3);
stage.register(scene4);
stage.register(scene5);
bot.use(session());
bot.use(stage);

bot.start((ctx) => ctx.scene.enter("scene1"));

module.exports = bot

