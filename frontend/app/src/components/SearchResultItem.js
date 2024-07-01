import * as React from 'react';
import {Box, Typography } from '@mui/material';

const SearchItem = (image, title, params) => {

    return (
        <Box component="li" display="flex" alignItems="center" {...params}>
                <Box
                component="img"
                sx={{
                    height: 100,
                    width: 100
                }}
                alt={title}
                src={image}
                />
                <Typography>{title}</Typography>
        </Box>
    );
}


export default SearchItem;