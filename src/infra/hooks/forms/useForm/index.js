import React from 'react';

export function useForm({ initialValues, onSubmit }) {
  const [values, setValues] = React.useState(initialValues);

  const [isFormDisabled, setIsFormSubmited] = React.useState(true);

  React.useEffect(() => {
    if (values.usuario.length > 0) {

    }
  }, [values]);

  return {
    values,
    handleSubmit(event) {
      event.preventDefault();
      onSubmit(values);
    },
    handleChange(event) {
      const fieldName = event.target.getAttribute('name');
      const { value } = event.target;

      setValues((currentValues) => ({
        ...currentValues,
        [fieldName]: value,
      }));
    },
  };
}
