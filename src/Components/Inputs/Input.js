import React from "react";

function Input({ type, name, label, value, onChange, placeHolder, clName }) {
  return (
    <div>
      {type === "search" && (
        <>
          <div>
            <input
              className={`customInput searchBox ${clName}`}
              type="text"
              name={name}
              value={value}
              onChange={onChange}
              placeholder={placeHolder}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default Input;
