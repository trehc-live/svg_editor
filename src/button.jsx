import React from "react"

function Button(props) {
    return(
        <div id={props.id} className = 'soft-angles mpz oh button' onClick={props.func}>{props.name}</div>
    );
  }

export default Button;