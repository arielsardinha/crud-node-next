import React from "react";
import InputMask from "react-input-mask";
import TextField from "../TextField/TextField";
const TextFieldMask = () => {
    return (
        <InputMask >
            {() => <TextField />}
        </InputMask>
    );
};

export default TextFieldMask;
