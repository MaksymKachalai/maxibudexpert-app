const express = require('express');
const path = require('path');
const TelegramBot = require('node-telegram-bot-api');
const { body, validationResult } = require('express-validator');
const morgan = require('morgan');
require('dotenv').config();

const app = express();
app.use(morgan('dev'));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'build')));

const bot = new TelegramBot(process.env.token, { polling: true });

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build'));
});

app.post('/user', body('phone').isMobilePhone('uk-UA'), body('name').trim(), (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400);
  }
  const { name, phone } = req.body;
  const telegramMessage = `Ім'я: ${name} \nНомер телефону: ${phone}`;
  res.json({
    status: 'ok',
  });
  bot.sendMessage(process.env.id, telegramMessage);
});

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 3001, () => {
  console.log('Server is running on port 3001');
});
