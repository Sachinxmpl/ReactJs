import React from 'react'
import Header from './components/Header'
import { ThemeProvider, createTheme } from '@mui/material/styles';


function App() {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Header />
    </ThemeProvider>
  )
}

export default App