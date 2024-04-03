import React from "react";
// import { AlertLink } from "react-bootstrap";

const Alert = (props) => {
  return (
    <div>
      <div className="alert alert-primary" role="alert">
        {props.message}
      </div>
    </div>
  );
};

export default Alert;
