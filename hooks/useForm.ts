import { useState } from 'react';

export const useForm = <T>(initialValues: T) => {
  const [formData, setFormData] = useState<T>(initialValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormData(initialValues);
  };

  return {
    formData,
    handleChange,
    resetForm,
  };
};
