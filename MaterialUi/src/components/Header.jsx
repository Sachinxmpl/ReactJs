import { Container } from '@mui/material'
import React from 'react'
import Navbar from './Navbar'
import FeaturedPost from './featuredpost'

function Header() {
  return (
    <Container maxWidth="lg">
            <Navbar/> 
            <FeaturedPost/>  
     </Container>
  )
}

export default Header