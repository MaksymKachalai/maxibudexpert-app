import { useState } from 'react';
import { toast } from 'react-toastify';

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
      fetch('http://localhost:3001/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: fields.name,
          phone: fields.phone,
        }),
      })
        .then((res) =>
          res.ok ? toast.success('Заявку відправлено') : toast.error('Щось пішло не так, спробуйте ще раз')
        )
        .catch(console.log);

      setTimeout(() => {
        setFields(initialState);
        setErrors(initialStateErrors);
      }, 250);
    }
  };

  return { handleSubmit, fields, handleInputChange, errors };
};