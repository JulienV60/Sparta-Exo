import React from "react";

const Form = () => {
  const [showSpace, setShowSpace] = React.useState(false);
  const [showSend, setShowSend] = React.useState(false);
  function showSpaceAllowed(event) {
    const result = event.target.value;
    if (result !== null) {
      if (result.includes(" ")) {
        return setShowSpace(<p>no spaces allowed</p>);
      } else {
        return setShowSpace(false);
      }
    }
  }
  function onSubmit(eventt) {
    const result = eventt.target.value;
    if (result !== null) {
      return setShowSend(<p>Coucou</p>);
    } else {
      return setShowSend(false);
    }
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="col">
          <label>First Name</label>
          <input
            onChange={showSpaceAllowed}
            id="test"
            type="text"
            className="form-control"
            placeholder="First Name"
          ></input>
          {showSpace}
          <button type="submit" className="btn btn-primary" id="test2">
            Send
          </button>
          {showSend}
        </div>
      </form>
    </div>
  );
};

export default Form;
