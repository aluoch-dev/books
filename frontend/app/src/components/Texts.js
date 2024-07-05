import React from "react";
import { Typography } from "@mui/material";

export const Text = ({text, component, }) => {
    return(
        <Typography 
        component={component} 
        sx={{ 
            fontFamily: 'Mulish, sans-serif', 
            p:2, 
            fontWeight: 'bold'
        }}>{text}</Typography>
    )
}

export const MainTitle = ({text}) => {
    return (
        <Typography 
        component="h2" 
        sx={{ 
            fontFamily: 'Mulish, sans-serif', 
            p:2, 
            fontWeight: 'bold'
        }}>{text}</Typography>
    )
}

export const SubTitle = ({text}) => {
    return (
        <Typography component="h3" sx={{ fontFamily: 'Mulish, sans-serif', p:2
        }}>{text}</Typography>
    )
}

export const InfoText = ({text}) => {
    return (
        <Typography component="h6" sx={{ fontFamily: 'Mulish, sans-serif', p:2
        }}>{text}</Typography>
    )
}

export const SubText = ({text}) => {
    return (
        <Typography 
        sx={{ 
            fontFamily: 'Mulish, sans-serif', 
            mb: 1, 
            color: (theme) => theme.palette.black.light }}>{text}</Typography>
    );
}