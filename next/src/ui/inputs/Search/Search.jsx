import React from "react";
import { IconButton, InputBase, Paper } from "@material-ui/core";
import { Search } from "@material-ui/icons";

const InputSearch = ({ onChange, onClick }) => {
  return (
    <Paper>
      <InputBase sx={{ pl: 2 }} onChange={onChange} />
      <IconButton onClick={onClick}>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default InputSearch;
