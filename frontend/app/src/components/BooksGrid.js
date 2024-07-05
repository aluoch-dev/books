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
                flexBasis: '30%',
                minWidth: 200, 
                maxWidth: 320,
                mb: 4
            }}
        >
            <Box sx={{ p: 2 }} >
                <Box
                    component="img"
                    sx={{
                        height: 200,
                        width: '100%',
                        objectFit: 'cover',
                        borderRadius: 1,
                        mb: 2,
                    }}
                    alt={title}
                    src={cover}
                />
                <Typography sx={{ mb: 1, lineHeight: 1., minHeight: 40, maxHeight: 80, overflow: 'hidden', color: (theme) => theme.palette.black.primary }}>{title}</Typography>
                <Typography sx={{ mb: 1, color: (theme) => theme.palette.black.light }}>{author}</Typography>
                <PrimaryButton text="Add to Reading List" onClick={onClick} />
            </Box>
        </Box>
    );
}

const BooksGrid = ({books, title, onClick}) => {
    return (
        <Box sx={{ mt: 4 }}>
        <Typography component='h2' sx={{ mb: 2 }}>{title}</Typography>
        <Box
            display="flex"
            flexWrap="wrap"
            justifyContent="space-between"
            gap={2}
        >
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