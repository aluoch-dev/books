import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import Searchbar from './components/Search';
import BooksGrid from './components/BooksGrid';

const GET_BOOKS = gql`
  query Books {
    books {
      author
      coverPhotoURL
      readingLevel
      title
    }
  }
`;

const App = () => {
  const {loading, error, data} = useQuery(GET_BOOKS);
  const [selectedBook, setSelectedBook] = useState(null);

  if (loading) {
    return <Typography>Loading...</Typography>;
  } else if (error) {
    return <Typography>Error :(error)</Typography>;
  }

  const handleSelectBook = (book) => {
    setSelectedBook(book);
  };


  return (
   <Box 
   component="section" 
   sx={{ 
    p: 4,
    display: 'flex', 
    flexDirection: 'column',
    justifyContent: 'center', 
    alignItems: 'center'}}>
      <Searchbar books={data.books} onSelect={handleSelectBook} />
      {data && data.books ? (
        selectedBook ? (
          <BooksGrid title={`Selected Book: ${selectedBook.title}`} books={[selectedBook]} />
        ) : (
          <BooksGrid title="All Books" books={data.books} />
        )
      ) : (
        <Typography>No books available currently!</Typography>
      )}
    </Box>
  );
}

export default App;
