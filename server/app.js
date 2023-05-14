const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');

const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build'));
});

const bot = new TelegramBot(process.env.token, { polling: true });

app.post('/user', (req, res) => {
  const { name, phone } = req.body;

  const telegramMessage = `Ім'я: ${name} \nНомер телефону: ${phone}`;
  bot.sendMessage(process.env.id, telegramMessage);
  res.json({
    status: 'ok',
  });
});

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 3001, () => {
  console.log('Server is running on port 3001');
});

module.exports = bot;