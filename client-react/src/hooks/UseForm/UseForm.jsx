import { useState } from 'react';

const initialState = {
  name: '',
  phone: '',
};

const initialStateErrors = {
  nameError: '',
  phoneError: '',
};

export const useForm = () => {
  const [fields, setFields] = useState(initialState);
  const [errors, setErrors] = useState(initialStateErrors);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFields({
      ...fields,
      [name]: value,
    });
  };

  const validate = () => {
    let nameError = null;
    let phoneError = null;

    const regex = /^[+]?[3]?[8]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;

    if (!fields.name) {
      nameError = "Введіть Ваше ім'я";
    }

    if (!fields.phone || regex.test(fields.phone) === false) {
      phoneError = 'Невірний формат номеру';
    }

    if (nameError || phoneError) {
      setErrors({ nameError, phoneError });
      console.log(nameError, phoneError);
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log(fields);
      setErrors(initialStateErrors);
    }
  };

  return { handleSubmit, fields, handleInputChange, errors };
};
