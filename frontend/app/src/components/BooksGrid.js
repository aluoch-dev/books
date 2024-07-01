import React from "react";
import { Box } from "@mui/material";

const BookItem = ({image, title}) => {
    return (
        <Box
        component="img"
        sx={{
            height: 200,
            width: 200
        }}
        alt={title}
        src={image}
        />
    );
}

const BookGrid = ({books, title, image}) => {
    return (
        <Box 
        component="ul" 
        sx={{
            display:'flex',
            flexWrap:'wrap',
            justifyContent:'space-between',
            listStyle:'none',
            alignItems:"center",
            p:4,
            gap:2
        }}>
            <Box>
            {books?.map((index) => (
                <BookItem key={index} title={title} image={image} />
           ))}
            </Box>
        </Box>
    )
}

export default BookGrid;