import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import React from 'react'

import { makeStyles } from '@mui/styles'


function featuredpost() {

    const useStyles = makeStyles({
        title: {
          fontSize : 40 , 
        },
        cover: {
            width: '100%',
            height: '100%',
            backgroundImage: 'url(https://images.unsplash.com/photo-1543900694-133f37abaaa5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            fontSize: 20,
            fontFamily: 'Helvetica, Arial, sans-serif',
            textAlign: 'center',
            padding: '10px 10px 10px 10px',
            margin: '10px 10px 10px 10px',
            border: '1px solid black',
            borderRadius: '10px'
      }})

      const classes = useStyles() ;
  return (
    <>
        <Card className={classes.cover}>
            <CardContent>
                <Typography variant='h6'className={classes.title}>
                      Tile of longer featured blog post 
                </Typography>
                <Typography variant='p' gutterBottom>
                    This is a variant type p created while using materail ui for the first time 
                    Hi this is dale from canada and i like travelling  , exploring the world . It is just wonderful.
                </Typography>
            </CardContent>
            <CardActions>
                <Button color='inherit' size='medium' variant='contained' >
                    Click Me 
                </Button>
            </CardActions>
        </Card>
    </>
  )
}

export default featuredpost