import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { AppContainer } from './utlis/styles/mainApp.styles';
import { router } from './app/routes/AppRoutes';
import { RouterProvider } from 'react-router';

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <AppContainer>
        <CssBaseline />
        <RouterProvider router={router} />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
