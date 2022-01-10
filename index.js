const {Telegraf} = require('telegraf')
const tokenTelegramBot = '5061660513:AAH8V_5xurvsNSt4LOjS2MbNgEnFx3jebTE'
const telegramBot = new Telegraf(tokenTelegramBot)


telegramBot.start((ctx)=>{
    ctx.reply('Holi')
    console.log(ctx.from)
    console.log(ctx.chat)
    console.log(ctx.message)
    console.log(ctx.updateType)
})
telegramBot.help((ctx)=>{
    ctx.reply('Help')
})
telegramBot.settings((ctx)=>{
    ctx.reply('Setings')
})
telegramBot.command(['hora','Hora','HORA'],(ctx)=>{
    ctx.reply('la hora es')
})
telegramBot.hears('hora', ctx=>{
    ctx.reply('La hora sin comando')
})
// telegramBot.on('text', ctx=>{
//     ctx.reply(`has escrito ${ctx.message.text}`)
// })
telegramBot.on('sticker', ctx=>{
    ctx.reply('Has enviado un sticker')
})
telegramBot.mention('BotFather', ctx=>{
    ctx.reply('Has mencionado a alguien')
})
telegramBot.phone('+52 687 887 2069', ctx=>{
    ctx.reply('Numero de mexico')
})
telegramBot.hashtag('Programacion', ctx=>{
    ctx.reply('Hashtag')
})


telegramBot.launch()


























// const TeleBot = require('telebot')
// const tokenTelegramBot = '5061660513:AAH8V_5xurvsNSt4LOjS2MbNgEnFx3jebTE'
// let numberOne,NumberTwo,operator,result,ecuation

// const telegramBot = new TeleBot({
//    token: tokenTelegramBot 
// })

// telegramBot.on('/start',(msg) =>{
//         telegramBot.sendMessage(msg.chat.id, 'Ingresa la operacion a resolver ingresa el comando /ecuation seguido de la ecuacion a resolver')
//     }
// )
// telegramBot.on('/',(msg)=>{
//     telegramBot.sendMessage(msg.chat.id, `la ecuacion es ${msg.text}`)
// })
// telegramBot.start()


