const TelegramBot=require("node-telegram-bot-api")
const dotenv=require("dotenv")
const { default: axios } = require("axios")
dotenv.config()
const bot = new TelegramBot(process.env.TOKEN,{polling:true})
// bot.on('message' ,(option)=>{
//     console.log("message received on bot" , option)
//     bot.sendMessage(option.chat.id,"hello i am you helpful fun bot")
// })

bot.onText(/\/joke/,async(option)=>{
  const response = await axios.get("http://www.official-joke-api.appspot.com/random_joke")
  const setup=response.data.setup
  const punchline=response.data.punchline
  bot.sendMessage(option.chat.id,  setup+" , "+punchline)
})