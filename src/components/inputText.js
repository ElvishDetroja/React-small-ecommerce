import React from "react";

function Text({ name, itemSelected, setItemSelected }) {
  //
  function handleValue(e) {
    setItemSelected((pre) => {
      return { ...pre, [e.target.name]: e.target.value };
    });
  }

  //
  //

  return (
    <div className="input-container">

      <label htmlFor={name}>{name}</label>
      <input
        type="text"
        name={name}
        id=""
        placeholder={name}
        value={itemSelected?.[name] || ""}
        onChange={(e) => {
          handleValue(e);
        }}
      />
    </div>
  );
}

export default Text;