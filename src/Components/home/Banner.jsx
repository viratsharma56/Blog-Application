import { makeStyles } from "@mui/styles";
import { Box, Typography } from "@mui/material";
import React from "react";

const useStyle = makeStyles({
  image: {
    background: `url(${"https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg"}) center/55% repeat-x #000`,
    height: "50vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    "& :first-child": {
      fontSize: 70,
      color: "#FFFFFF",
      lineHeight: 1,
    },
    "& :last-child": {
      fontSize: 20,
      background: "#FFFFFF",
    },
  },
});

const Banner = () => {
  const style = useStyle();
  return (
    <>
      <Box className={style.image}>
        <Typography>BLOG</Typography>
        <Typography>Lets create a blog...</Typography>
      </Box>
    </>
  );
};

export default Banner;
