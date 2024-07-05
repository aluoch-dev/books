import React from "react";
import { Button } from "@mui/material";


export const PrimaryButton = ({ text, onClick }) => {

    return (
        <Button 
        onClick={onClick}
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

export const SecondaryButton = ({text, onClick}) => {
    return (
        <Button 
        onClick={onClick}
        variant="outlined" 
        color="primary" 
        sx={{
            fontFamily: 'Mulish, sans-serif',
            borderRadius: '80px',
            backgroundColor: 'white',
            borderColor: (theme) => theme.palette.turquiose.primary,
            color: (theme) => theme.palette.turquiose.primary,
            '&:hover': {
              backgroundColor: (theme) => theme.palette.turquiose.primary,
              color: 'white',
            },
          }}>
        {text}
      </Button>
    );
}