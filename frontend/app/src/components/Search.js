import * as React from 'react';
import { Box, Autocomplete, TextField, Typography } from '@mui/material';

const Searchbar = ({books, onSelect}) => {

    return(
        <Autocomplete
        disablePortal
        id="search-box"
        options={books}
        onChange={(event, value) => { onSelect(value)}}
        clearOnBlur
        getOptionLabel={(option) => option.title}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Search book..." />}
        renderOption={(params, option) => (            
            <Box 
            component="li" 
            display="flex" 
            alignItems="center" 
            {...params}
            >
                <Box
                component="img"
                sx={{
                    height: 100,
                    width: 100
                }}
                alt={option.title}
                src={option.coverPhotoURL}
                />
                <Typography sx={{ p:2
                }}>{option.title}</Typography>
            </Box>
        )}
      />
    );
}

export default Searchbar;


