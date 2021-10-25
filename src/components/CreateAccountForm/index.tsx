import React from "react";
import "./style.scss";

const CreateAccountForm = () => {
  return (
    <form id="createAccountForm" className="createAccount">
      <label>
        Nome Completo:
        <input type="text" name="name" />
      </label>
      <label>
        E-mail:
        <input type="text" name="name" />
      </label>
      <button type="submit" form="createAccountForm" value="Submit">
        Criar conta
      </button>
    </form>
  );
};

export default CreateAccountForm;
