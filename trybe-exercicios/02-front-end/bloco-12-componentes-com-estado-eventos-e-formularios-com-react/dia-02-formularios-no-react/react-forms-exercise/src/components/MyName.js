import React from 'react';

const myName = (props) => {
  return (
    <div>
      <h1 onChange={props.changeHandler}>{props.name}</h1>
      {props.children}
    </div>
  );
}

export default myName;