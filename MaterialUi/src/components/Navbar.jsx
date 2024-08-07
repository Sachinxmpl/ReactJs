import { Badge, Divider, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { ClassNames } from '@emotion/react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    title: {
      flexGrow: 1,
    },
    tagline: {
      flexGrow: 1,
      fontSize: '1.5rem',
      fontFamily: 'Helvetica, Arial, sans-serif',
      justifyContent: 'center',
    }
})

function Navbar() {
    const classes = useStyles() ; 
    return (
        <>
            <Toolbar>
                <IconButton color='inherit'>
                    <MenuIcon />
                </IconButton>
                <Typography variant='h5' className={classes.title }>Sachin Using materail Ui </Typography>
                <IconButton color='inherit'>
                    <Badge badgeContent={4} color="secondary">
                        <NotificationsIcon/>
                    </Badge>
                </IconButton>
                <IconButton color='inherit' >
                    <AccountCircleIcon />
                </IconButton>
            </Toolbar>
            <Divider />


            <Toolbar>
                <Typography variant='h6' className='classes.tagline'>Express in words </Typography>
            </Toolbar>

        </>

    )
}

export default Navbar