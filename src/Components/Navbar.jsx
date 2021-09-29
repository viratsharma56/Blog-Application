import { AppBar, Toolbar, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'

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
                    <Typography>HOME</Typography>
                    <Typography>ABOUT</Typography>
                    <Typography>CONTACT</Typography>
                    <Typography>LOGIN</Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Home
