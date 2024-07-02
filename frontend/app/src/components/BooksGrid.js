import React from "react";
import { Box } from "@mui/material";

const BookItem = ({cover, title}) => {
    return (
        <Box
        component="img"
        sx={{
            height: 200,
            width: 200
        }}
        alt={title}
        src={cover}
        />
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
            <Box>
            {books?.map((index, book) => (
                <BookItem 
                key={index} 
                title={book.title} 
                cover={`${process.env.APP_PUBLIC_URL}/${book.coverPhotoURL}`}
                />
           ))}
            </Box>
        </Box>
    )
}

export default BooksGrid;