const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const { validateUserInfo } = require('./middleware/validateUserInfo');
const { sendMessageTelegram } = require('./controllers/sendMessageTelegram');

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(cors());
  app.use(morgan('dev'));
}

app.use(express.json());

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build'));
});

app.post('/user', validateUserInfo, sendMessageTelegram);

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.use((err, req, res, next) => {
  res.status(500).send(err.message);
});

app.listen(process.env.PORT || 3001, () => {
  console.log('Server is running on port 3001');
});