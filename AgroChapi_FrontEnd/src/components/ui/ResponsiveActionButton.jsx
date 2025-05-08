import React from 'react';
import { Button, useMediaQuery } from '@mui/material';

const ResponsiveActionButton = ({ onClick, icon, text, color = 'primary', disabled = false, sx = {} }) => {
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  return (
    <Button
      variant="contained"
      color={color}
      onClick={onClick}
      disabled={disabled}
      startIcon={!isSmallScreen ? icon : null}
      sx={{ minWidth: isSmallScreen ? '40px' : undefined, borderRadius: isSmallScreen ? '50%' : 1, ...sx }}
    >
      {!isSmallScreen && text}
      {isSmallScreen && icon}
    </Button>
  );
};

export default ResponsiveActionButton;
