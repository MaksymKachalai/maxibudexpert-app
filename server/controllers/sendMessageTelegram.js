const sendMessageTelegram = (req, res) => {
  const { name, phone } = req.user;

  const telegramMessage = `Ім'я: ${name} %0AТел: ${phone}`;
  fetch(
    `https://api.telegram.org/bot${process.env.token}/sendMessage?chat_id=${process.env.id}&text=${telegramMessage}`
  );
  res.json({
    status: 'ok',
  });
};

module.exports = {
  sendMessageTelegram,
};
