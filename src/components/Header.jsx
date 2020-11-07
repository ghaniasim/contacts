import React from "react";
import { useHistory } from "react-router-dom";

function Header() {
  const history = useHistory();

  function handleClick() {
    history.push("/");
  }

  return (
    <header>
      <h1 onClick={handleClick}>Contacts</h1>
    </header>
  );
}

export default Header;
