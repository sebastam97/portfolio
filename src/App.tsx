import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { AppContainer, BackgroundPixels } from './utlis/styles/mainApp.styles';
import { router } from './app/routes/AppRoutes';
import { RouterProvider } from 'react-router';
import SoundEffect from './app/portFolio/components/SoundEffect/SoundEffect';
import FloatingPixels from './app/portFolio/components/FloatingPixels/FloatingPixels';

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <AppContainer>
        <BackgroundPixels />
        <FloatingPixels />
        <CssBaseline />
        <RouterProvider router={router} />
        <SoundEffect />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
