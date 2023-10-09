import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';


const Footer = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="body1" component="div">
          &copy; TECH 
        </Typography>
        <IconButton
          edge="end"
          color="inherit"
          aria-label="GitHub"
          href="https://github.com/tu-usuario-de-github"
          target="_blank"
        >
          <GitHubIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
