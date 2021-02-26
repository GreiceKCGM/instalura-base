import React from 'react';

function FormContent() {
  return (
    <form>
      <div>
        <input placeholder="Email"  name="email" value=""/>
      </div>
      <div>
        <input placeholder="Usuário" />
      </div>
      <button type="submit">
        Cadastrar
      </button>
    </form>
  );
}

// eslint-disable-next-line react/prop-types
export default function Formcadastro({ propsDoModal }) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <div {...propsDoModal}>
      <FormContent />
    </div>
  );
}
