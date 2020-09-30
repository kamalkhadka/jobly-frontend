import { useState } from "react";

const useFormData = (initial_state) => {

  const [formData, setFormData] = useState(initial_state);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  return [formData, handleChange, setFormData];
};

export default useFormData;
