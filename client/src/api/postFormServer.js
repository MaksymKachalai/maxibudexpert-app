export const postFormServer = async (data) => {
  try {
    const response = await fetch('http://maxibudexpert.com.ua/api/formHandler.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) return false;
    return true;
  } catch (error) {
    return false;
  }
};
