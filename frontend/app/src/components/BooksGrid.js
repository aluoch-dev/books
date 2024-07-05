import React from "react";
import { Box, Typography } from "@mui/material";
import { PrimaryButton, SecondaryButton } from "./Buttons";

const BookItem = ({cover, title, author}) => {
    return (
        <Box
        display="flex"
        flexDirection="column"
        sx={{
            alignItems: 'start',
            boxShadow: 3,
            borderRadius: 1,
            p: 2,
            backgroundColor: 'white'
          }}
        >
            <Box
            sx={{
                p: 4
            }}
            >
                <Box
                component="img"
                sx={{
                    height: 200,
                    width: 200,
                    borderRadius: 1,
                    mb:2
                }}
                alt={title}
                src={cover}
                />
                <Typography sx={{ mb:2}}>{title}</Typography>
                <Typography sx={{mb: 2}}>{author}</Typography>
                <PrimaryButton text="Add to Reading List" />
                <SecondaryButton text="Load More..." />
            </Box>
        </Box>
    );
}

const BooksGrid = ({books, title}) => {
    return (
        <Box>
            <Typography>{title}</Typography>
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
                {books?.map((book, index) => (
                    <BookItem 
                    key={index} 
                    title={book.title} 
                    author={book.author}
                    cover={book.coverPhotoURL}
                    />
            ))}
            </Box>
        </Box>
    )
}

export default BooksGrid;