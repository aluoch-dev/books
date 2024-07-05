import React from "react";
import { Button } from "@mui/material";


const PrimaryButton = ({ text }) => {

    return (
        <Button 
        variant="contained" 
        color="primary" 
        sx={{
            fontFamily: 'Mulish, sans-serif',
            borderRadius: '80px',
            backgroundColor: (theme) => theme.palette.turquiose.primary,
            '&:hover': {
              backgroundColor: (theme) => theme.palette.turquiose.tertiary,
            },
          }}>
        {text}
      </Button>
    )
}

export default PrimaryButton;