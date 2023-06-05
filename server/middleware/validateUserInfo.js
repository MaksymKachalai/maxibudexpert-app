const phoneValidate = (value = null) => {
  const regex = /^[+]?[3]?[8]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
  if (!regex.test(value)) {
    return false;
  }
  return true;
};

const nameValidate = (value = null) => {
  if (!value) return false;
  if (value.length > 70) return false;

  return true;
};

const validateUserInfo = (req, res, next) => {
  const { name, phone } = req.body;
  if (!name || !phone) {
    throw new Error('Field name and phone must be provided');
  }
  if (!phoneValidate(phone) || !nameValidate(name)) {
    throw new Error('Name or phone is not valid');
  }
  req.user = {
    name,
    phone,
  };
  next();
};

module.exports = {
  validateUserInfo,
};
