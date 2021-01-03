import React from "react";

const Contato = () => {
  return (
    <form>
      <div>
        <label htmlFor="name">Seu nome</label>
        <input type="text" name="name" id="name" />
      </div>

      <div>
        <label htmlFor="email">Seu e-mail</label>
        <input type="text" name="email" id="email" />
      </div>

      <div>
        <label htmlFor="phone">Seu telefone</label>
        <input type="text" name="phone" id="phone" />
      </div>
    </form>
  );
};

export default Contato;
