'use client'

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Avatar } from '@mui/material';

const pages = ['About', 'Projects', 'Contact'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export default function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar className="bg-sky-200" position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <IconButton>
            <Avatar
                alt="PK Logo"
                src='/Parvathi.png'
                sx={{width: 125, height: 125}}
            >
                PK
            </Avatar>
        </IconButton>
        <Box sx={{ justifyContent:'end',flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
        <IconButton
            size="large"
            aria-label="nav-bar"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
        >
            <MenuIcon />
        </IconButton>
        <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{ display: { xs: 'block', md: 'none' } }}
        >
            {pages.map((page) => (
            <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
            </MenuItem>
            ))}
        </Menu>
        </Box>
       
        <Box sx={{ justifyContent: 'space-evenly', flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        {pages.map((page) => (
            <Button
            key={page}
            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: 'white', display: 'block' }}
            >
            {page}
            </Button>
        ))}
        </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

