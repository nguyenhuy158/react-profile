import React, { useState, useRef } from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu'; // Ensure you have this icon
import { BottomNavigationAction, BottomNavigation } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import RestoreIcon from '@mui/icons-material/Restore';
import { Box } from "@mui/material";
import ArticleIcon from '@mui/icons-material/Article';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';

function Header({ projectRef, favoritesRef, contactRef }) {
  // const [anchorEl, setAnchorEl] = useState(null);
  const [value, setValue] = useState(0);

  const scrollToSection = (sectionRef) => {
    console.log(projectRef);
    console.log(sectionRef);
    if (sectionRef && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  // const open = Boolean(anchorEl);

  // const handleClickMenu = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
    switch (newValue) {
      case 0:
        scrollToSection(projectRef);
        break;
      case 1:
        // scrollToSection(favoritesRef);
        break;
      case 2:
        scrollToSection(contactRef);
        break;
      default:
        break;
    }
  };

  return (
    <AppBar position="fixed">
      <Box sx={{ width: '100%' }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={handleChange}
        >
          <BottomNavigationAction label="Projects" icon={<ArticleIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Contact" icon={<ConnectWithoutContactIcon />} />
        </BottomNavigation>
      </Box>
    </AppBar>
  );
}

export default Header;