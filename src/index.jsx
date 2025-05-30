import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from './theme';
import App from './App.jsx';

export default function Root() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  );
}
