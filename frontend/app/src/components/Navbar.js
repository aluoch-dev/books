import React from 'react';
import { AppBar, Toolbar, Box } from '@mui/material';
import logo from './../assets/logo.svg';
import { SecondaryButton } from './Buttons';

const NavBar = ({ onViewList }) => {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none'}}>
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1}}>
          <img 
            src={logo} 
            alt="Logo" 
            style={{ height: '40px', marginRight: '10px' }}
          />
        </Box>
        <SecondaryButton text="View Reading List" onClick={onViewList} />
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
