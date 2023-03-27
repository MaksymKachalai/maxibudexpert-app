const express = require('express');
const TelegramBot = require('node-telegram-bot-api');
const { body, validationResult } = require('express-validator');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

const bot = new TelegramBot(process.env.token, { polling: true });

app.post(
  '/user',
  body('phone').isMobilePhone('uk-UA'),
  body('name').trim(),
  (req, res) => {
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
  }
);

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
