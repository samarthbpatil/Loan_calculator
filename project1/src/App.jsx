import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {
  AppBar, Toolbar, Typography, Switch, Button, Box, IconButton, Drawer, List, ListItem, ListItemText,
  CssBaseline, Container
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Home from './pages/Home';
import About from './pages/About';
import ExchangeRates from './pages/ExchangeRates';
import ErrorPage from './pages/ErrorPage';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const theme = createTheme({
    palette: { mode: darkMode ? 'dark' : 'light' },
  });

  const toggleDrawer = () => setMobileOpen(!mobileOpen);
  const drawerItems = [
    { text: 'HOME', path: '/' },
    { text: 'EXCHANGE RATES (LIVE)', path: '/exchange' },
    { text: 'ABOUT', path: '/about' },
    { text: 'ERROR PAGE', path: '/error' },
  ];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={toggleDrawer} sx={{ display: { md: 'none' } }}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>Loan Calculator</Typography>
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              {drawerItems.map(({ text, path }) => (
                <Button color="inherit" component={Link} to={path} key={text}>{text}</Button>
              ))}
              <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
            </Box>
          </Toolbar>
        </AppBar>

        <Drawer anchor="left" open={mobileOpen} onClose={toggleDrawer} sx={{ display: { md: 'none' } }}>
          <Box onClick={toggleDrawer} sx={{ width: 250 }}>
            <List>
              {drawerItems.map(({ text, path }) => (
                <ListItem button key={text} component={Link} to={path}>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
              <ListItem>
                <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
              </ListItem>
            </List>
          </Box>
        </Drawer>

        <Container sx={{ mt: 4 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exchange" element={<ExchangeRates />} />
            <Route path="/about" element={<About />} />
            <Route path="/error" element={<ErrorPage />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;