import React from "react";
import { Box, Typography } from "@mui/material";
import { PrimaryButton } from "./Buttons";

const BookItem = ({cover, title, author, onClick}) => {
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
                <PrimaryButton text="Add to Reading List" onClick={onClick}/>
            </Box>
        </Box>
    );
}

const BooksGrid = ({books, title, onClick}) => {
    return (
        <Box>
            <Typography
            component='h2'
            sx={{
                mt: 4,
                display: 'flex'
            }}
            
            >{title}</Typography>
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
                    onClick={onClick}
                    />
            ))}
            </Box>
        </Box>
    )
}

export default BooksGrid;