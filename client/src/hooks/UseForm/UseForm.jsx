import { postFormServer } from 'api/postFormServer';
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
  const [isFetching, setIsFetching] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'phone':
        phoneValidate(value);
        break;
      case 'name':
        nameValidate(value);
        break;
      default:
        break;
    }
    setFields({
      ...fields,
      [name]: value,
    });
  };

  const phoneValidate = (value = null) => {
    let phoneError = '';
    const regex = /^[+]?[3]?[8]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
    if (!regex.test(value)) {
      phoneError = 'Невірний формат номеру';
      setErrors({
        ...errors,
        phoneError,
      });
      return false;
    }
    setErrors({
      ...errors,
      phoneError,
    });
    return true;
  };

  const nameValidate = (value = null) => {
    let nameError = '';
    if (!value) {
      nameError = "Введіть Ваше ім'я";
      setErrors({
        ...errors,
        nameError,
      });
      return false;
    }

    if (value.length > 70) {
      nameError = "Ім'я може містити до 70 символів";
      setErrors({
        ...errors,
        nameError,
      });
      return false;
    }

    setErrors({
      ...errors,
      nameError,
    });
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nameValidate(fields.name) || !phoneValidate(fields.phone)) {
      toast.error('Заповніть усі поля');
      return;
    }

    setIsFetching(true);

    const result = await postFormServer(fields);
    if (!result) {
      toast.error('Щось пішло не так, спробуйте ще раз');
      setIsFetching(false);
      return;
    }
    toast.success('Заявка відправлена');
    setIsFetching(false);
  };

  return { handleSubmit, fields, handleInputChange, errors, isFetching };
};
