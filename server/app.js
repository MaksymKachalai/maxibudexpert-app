const express = require('express');
const TelegramBot = require('node-telegram-bot-api');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

const bot = new TelegramBot(process.env.token, { polling: true });

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/user', (req, res) => {
  console.log(req.body);
  const { name = 'Невідомий', phone } = req.body;
  console.log(name, phone);
  const telegramMessage = `Ім'я: ${name} \nНомер телефону: ${phone}`;
  res.json({
    status: 'ok',
  });
  bot.sendMessage(process.env.id, telegramMessage);
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
