import React from "react";
import { Box, Typography } from "@mui/material";

const BookItem = ({cover, title}) => {
    return (
        <Box
        display="flex"
        flexDirection="column"
        >
        <Box
        component="img"
        sx={{
            height: 200,
            width: 200
        }}
        alt={title}
        src={cover}
        />
        <Typography>{title}</Typography>
        </Box>
    );
}

const BooksGrid = ({books}) => {
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
            {books?.map((index, book) => (
                <BookItem 
                key={index} 
                title={book.title} 
                cover={`${process.env.APP_PUBLIC_URL}/${book.coverPhotoURL}`}
                />
           ))}
        </Box>
    )
}

export default BooksGrid;