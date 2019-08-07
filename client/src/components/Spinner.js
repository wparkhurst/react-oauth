import React from "react";
import "./Spinner.css";

const Spinner = props => {
  return (
    <div className="spinner" style={{ textAlign: "center" }}>
      <div className="preloader-wrapper big active">
        <div className="spinner-layer spinner-teal-only">
          <div className="circle-clipper left">
            <div className="circle"></div>
          </div>
          <div className="gap-patch">
            <div className="circle"></div>
          </div>
          <div className="circle-clipper right">
            <div className="circle"></div>
          </div>
        </div>
      </div>
      <div>{props.message}</div>
    </div>
  );
};

Spinner.defaultProps = {
  message: "Loading..."
};

export default Spinner;
