import React from "react";

const ContactForm = () => {
  const nameRegex = /^[_A-zàâäèéëêïîöôûüù]+((-|\s)*[_A-zàâäèéëêïîöôûüù])*$/gi;
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const messageRegex = /^.{20,400}$/;
  const [showFirstName, setShowFirstName] = React.useState(false);
  const [showLastName, setShowLastName] = React.useState(false);
  const [showEmail, setShowEmail] = React.useState(false);
  const [showMessage, setShowMessage] = React.useState(false);
  function firstName() {
    if (document.getElementById("first-name") !== null) {
      const result = document.getElementById("first-name").value;
      if (result.match(nameRegex) === null) {
        return setShowFirstName(<p>Minimum 1 letter,no special characters expect `-`` or space between words</p>);
      } else {
        setShowFirstName(false);
      }
    }
  }
  function lastName() {
    if (document.getElementById("last-name") !== null) {
      const result = document.getElementById("last-name").value;
      if (result.match(nameRegex) === null) {
        return setShowLastName(<p>Minimum 1 letter,no special characters expect `-`` or space between words </p>);
      } else {
        setShowLastName(false);
      }
    }
  }

  function email() {
    if (document.getElementById("email") !== null) {
      const result = document.getElementById("email").value;
      if (result.match(emailRegex) === null) {
        return setShowEmail(<p>This is not a valid email adress </p>);
      } else {
        setShowEmail(false);
      }
    }
  }
  function message() {
    if (document.getElementById("message") !== null) {
      const result = document.getElementById("message").value;
      if (result.match(messageRegex) === null) {
        return setShowMessage(<p>Minimum 20 and maximum 400 characters </p>);
      } else {
        setShowMessage(false);
      }
    }
  }
  return (
    <div>
      <form>
        <input
          className=".form-control"
          id="first-name"
          type="text"
          onChange={firstName}
          placeholder="First Name"
        ></input>
        {showFirstName}

        <input className=".form-control" id="last-name" type="text" onChange={lastName} placeholder="Last Name"></input>
        {showLastName}

        <input className=".form-control" id="email" type="text" onChange={email} placeholder="Email"></input>
        {showEmail}

        <input className=".form-control" id="message" type="text" onChange={message} placeholder="Message"></input>
        {showMessage}

        <button type="submit" id="test2">
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
