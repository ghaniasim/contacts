import React from "react";
import { useHistory } from "react-router-dom";
import Button from "../components/Button";

function DetailView(props) {
  const history = useHistory();

  function handleClick() {
    history.push("/");
  }

  return (
    <div className="detail-container">
      <div className="detail-inner-container">
        <p>name: {props.name}</p>
        <p>username: {props.username}</p>
        <p>email: {props.email}</p>
        <p>phone: {props.phone}</p>
        <p>company: {props.company.name}</p>
        <p>website: {props.website}</p>
        <ul>
          <lh>address:</lh>
          <li>street: {props.address.street}</li>
          <li>suite: {props.address.suite}</li>
          <li>city: {props.address.city}</li>
          <li>zipcode: {props.address.zipcode}</li>
        </ul>
      </div>
      <Button title="Back" handleClick={handleClick} />
    </div>
  );
}

export default DetailView;
