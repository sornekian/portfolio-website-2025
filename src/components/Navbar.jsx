import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
<<<<<<< HEAD
        <Typography 
          variant="h5" 
          component={RouterLink} 
          to="/" 
          sx={{ 
            mr: 2,
            textDecoration: 'none', 
            color: 'inherit',
            fontSize: '1.5rem',
            fontWeight: 400,
            letterSpacing: '0.5px',
            textTransform: 'uppercase'
          }}
        >
          Sarven Ornekian
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Box>
          <Button color="inherit" component={RouterLink} to="/projects">Projects</Button>
          <Button color="inherit" component={RouterLink} to="/services">Services</Button>
          <Button color="inherit" component={RouterLink} to="/about">About</Button>
          <Button color="inherit" component={RouterLink} to="/contact">Contact</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
