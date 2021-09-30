import React from "react";
import {makeStyles} from "@mui/styles";
import { Box, Typography } from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import { Link } from "react-router-dom";

const myStyle = makeStyles((theme) => ({
  image: {
    width: "100%",
    height: "50vh",
    objectFit: "cover"
  },
  container: {
    padding: "0 100px",
  },
  icons: {
    float: "right",
  },
  icon: {
    margin: 5,
    padding: 5,
    border: "1px solid #878787",
    borderRadius: 10,
    cursor: "pointer",
  },
  heading: {
    fontSize: "38px !important",
    fontWeight: "600 !important",
    textAlign: "center",
    margin: "50px 0 10px 0 !important",
  },
  author: {
    color: "#878787",
    display: "flex",
    margin: "20px 0"
  },
}));

const DetailView = () => {
  const style = myStyle();
  const url =
    "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";
  return (
    <Box className={style.container}>
      <img src={url} alt="Blog" className={style.image} />
      <Box className={style.icons}>
        <Link to="/updatepost"><Edit className={style.icon} color="primary"></Edit></Link>
        <Delete className={style.icon} color="error"></Delete>
      </Box>
      <Typography className={style.heading}>Title of Heading</Typography>
      <Box className={style.author}>
        <Typography>
          Author: <span style={{ fontWeight: 600 }}>Virat</span>
        </Typography>
        <Typography style={{ marginLeft: "auto" }}>
          30th September 2021
        </Typography>
      </Box>
    </Box>
  );
};

export default DetailView;
