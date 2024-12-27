import React from "react";

export default function Alert(props) {
    // const capitalize = (word) =>{
    //     const lower = word.toLowerCase();
    //     return lower.charAt(0).toUpperCase() + lower.slice(1);
    // }
  return (
    <div style={{height: '50px'}}>
      {props.alert && <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show container my-2`}
        role="alert"
        data-bs-theme={props.mode === "light" ? "light" : "dark"}
      >
        <strong>{props.alert.msg}</strong> 
    
      </div>}

      </div>

  );
}
