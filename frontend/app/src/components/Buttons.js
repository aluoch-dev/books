import React from "react";
import { Button } from "@mui/material";


export const PrimaryButton = ({ text, onClick }) => {

    return (
        <Button 
        onClick={onClick}
        variant="contained" 
        color="primary" 
        sx={{
            mt:2,
            fontFamily: 'Mulish, sans-serif',
            borderRadius: '80px',
            borderColor: (theme) => theme.palette.turquiose.primary,
            backgroundColor: (theme) => theme.palette.turquiose.primary,
            '&:hover': {
              backgroundColor: (theme) => theme.palette.turquiose.tertiary,
              borderColor: (theme) => theme.palette.turquiose.tertiary
            },
            textTransform: 'none'
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
            mt: 2,
            fontFamily: 'Mulish, sans-serif',
            borderRadius: '80px',
            backgroundColor: 'white',
            borderColor: (theme) => theme.palette.turquiose.primary,
            color: (theme) => theme.palette.turquiose.primary,
            '&:hover': {
              backgroundColor: (theme) => theme.palette.turquiose.primary,
              color: 'white',
              borderColor: (theme) => theme.palette.turquiose.primary
            },
            textTransform: 'none'
          }}>
        {text}
      </Button>
    );
}