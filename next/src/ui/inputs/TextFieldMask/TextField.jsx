import React from "react";
import InputMask from "react-input-mask";
import TextField from "../TextField/TextField";
const TextFieldMask = ({ mask, ...props }) => {
  return (
    <InputMask mask={mask} >
      {() => {
        return <TextField {...props} />;
      }}
    </InputMask>
  );
};

export default TextFieldMask;
