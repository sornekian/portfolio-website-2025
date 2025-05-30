import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00bfff', // Cyan for space-like feel
      dark: '#008b8b', // Darker cyan
      light: '#00ffff', // Bright cyan
    },
    secondary: {
      main: '#ff4081', // Pink for contrast
      dark: '#ff1493', // Darker pink
      light: '#ff69b4', // Lighter pink
    },
    background: {
      default: '#000020', // Deep space blue
      paper: '#000033', // Darker space blue
    },
    text: {
      primary: '#ffffff',
      secondary: '#cccccc',
    },
  },
  typography: {
    fontFamily: 'Radley, serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 500,
      color: '#00bfff',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
      color: '#00bfff',
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 500,
      color: '#00bfff',
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 500,
      color: '#00bfff',
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 500,
      color: '#00bfff',
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 500,
      color: '#00bfff',
    },
    body1: {
      color: '#cccccc',
    },
    body2: {
      color: '#cccccc',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          padding: '8px 24px',
          boxShadow: '0 4px 6px rgba(0, 191, 255, 0.2)',
          '&:hover': {
            backgroundColor: '#008b8b',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          boxShadow: '0 4px 20px rgba(0, 191, 255, 0.1)',
          backgroundColor: '#000033',
          '&:hover': {
            boxShadow: '0 8px 32px rgba(0, 191, 255, 0.2)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#000020',
          boxShadow: '0 2px 12px rgba(0, 191, 255, 0.1)',
        },
      },
    },
  },
});
