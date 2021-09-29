import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import Banner from "./Banner";
import Categories from "./Categories";
import Posts from "./Posts";

const useStyle = makeStyles({
    component: {
        // marginTop: 50
    },
    leftContainer: {
        // width: '20%'
    },
    rightContainer: {

    }
})

const Home = () => {
    const style = useStyle();
  return (
    <>
      <Banner />
      <Grid container className={style.component}>
      <Grid item lg={2} xs={12} sm={2}>
        <Categories />
      </Grid>
      <Grid container item xs={12} sm={10} lg={10}>
        <Posts />
      </Grid>
      </Grid>
    </>
  );
};

export default Home;
