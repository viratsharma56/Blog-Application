import { AppBar, Toolbar, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import { Link } from "react-router-dom";

const myStyle = makeStyles({
    container: {
        background: '#FFFFFF',
        color: 'black',
        justifyContent: 'center',
        '& > *': {
            padding: 20,
            color: 'black',
            textDecoration: 'none'
        }
    }
})

const Home = () => {
    const classes = myStyle();
    return (
        <div>
            <AppBar>
                <Toolbar className={classes.container}>
                    <Link to="/" style={{textDecoration: "none", color: 'inherit'}}><Typography>HOME</Typography></Link>
                    <Link to="/about" style={{textDecoration: "none", color: 'inherit'}}><Typography>ABOUT</Typography></Link>
                    <Link to="/contact" style={{textDecoration: "none", color: 'inherit'}}><Typography>CONTACT</Typography></Link>
                    <Link to="/login" style={{textDecoration: "none", color: 'inherit'}}><Typography>LOGIN</Typography></Link>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Home
