import { useState, useMemo } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box, Container, PaletteMode, Paper } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Nav from '../components/Nav';
import PageNotFound from '../components/routes/ErrorPages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../components/routes/Home';
import Blog from '../components/routes/Blog';

const AppInit = () => (
  <Routes>
    <Route path="/">
      <Route index element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="blog" element={<Blog />} />
    </Route>
    <Route path="*" element={<PageNotFound />} />
  </Routes>
);

const App = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useState<PaletteMode>(prefersDarkMode ? 'dark' : 'light');

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode
        }
      }),
    [mode]
  );

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Container>
          <Paper elevation={2} style={{ height: '100%', marginTop: '1em', padding: '1em 0' }}>
            <AppInit />
          </Paper>
        </Container>
        <Nav />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
