import React, {useMemo, useState} from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from 'components/routes/Home';
import PageNotFound from 'components/routes/httpErrors/404';
import Navigation from 'components/app/Navigation';
import { Box, Container, PaletteMode, Paper } from '@mui/material';
import Blog from 'components/routes/Blog';
import Tools from 'components/routes/Tools';
import FAB from 'components/app/FAB';

const AppInit = () =>  
(
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="celebrations" element={<Blog />} />
          <Route path="tools" element={<Tools />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Navigation />
    </BrowserRouter>
);

const App = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useState<PaletteMode>(prefersDarkMode ? 'dark' : 'light');

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Paper elevation={2}>
          <AppInit />
        </Paper>
      </Container>
      <FAB setMode={setMode} />
    </ThemeProvider>
  );
};

export default App;