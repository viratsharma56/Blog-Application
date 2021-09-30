import React from "react";
import {
  Box,
  FormControl,
  InputBase,
  Button,
  TextareaAutosize,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { AddCircle } from "@mui/icons-material";

const myStyle = makeStyles({
  container: {
    padding: "0px 100px",
  },
  image: {
    width: "100%",
    height: "50vh",
    objectFit: "cover",
  },
  title: {
    marginTop: 10,
    display: "flex",
    flexDirection: "row !important"
  },
  textfield: {
    flex: 1,
    fontSize: 25,
    marginLeft: '-40px',
    width: '1156px'
  },
  textarea: {
    width: "100%",
    border: "none",
    marginTop: 10,
    fontSize: 18,
    "&:focus-visible": {
      outline: "none",
    },
  },
  addIcon: {
    cursor: "pointer",
    marginRight: '50px'
  },
});

const UpdatePost = () => {
  const url =
    "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";
  const style = myStyle();
  return (
    <Box className={style.container}>
      <img src={url} alt="Create" className={style.image} />
      <FormControl className={style.title}>
        <AddCircle className={style.addIcon} fontSize="large" color="action" />
        <InputBase
          name="title"
          placeholder="Title"
          className={style.textfield}
        />
        <Button variant="contained" color="primary" style={{marginLeft:'40px'}}>Update</Button>
      </FormControl>
        <TextareaAutosize
          rowsMin={5}
          placeholder="Tell your story..."
          className={style.textarea}
          name="description"
        />
    </Box>
  );
};

export default UpdatePost;
