const TeleBot = require('telebot')
const tokenTelegramBot = '5061660513:AAH8V_5xurvsNSt4LOjS2MbNgEnFx3jebTE'
let numberOne,NumberTwo,operator,result


const telegramBot = new TeleBot({
   token: tokenTelegramBot 
})


telegramBot.on(
    '/start',(msg) =>{
        telegramBot.sendMessage(msg.chat.id, 'Ingresa el primer numero')

        telegramBot.on(
            'text',(msg) =>{
                telegramBot.sendMessage(msg.chat.id, 'Ingresa el segundo numero')
                
            }
        )

    }
)
telegramBot.start()
// telegramBot.on(['/start', '/hello'], (msg) => msg.reply.text('Bañate mugroso'));

