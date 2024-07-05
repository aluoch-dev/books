import React from 'react';
import { useQuery, gql } from '@apollo/client';
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

  if (loading) {
    return <Typography>Loading...</Typography>;
  } else if (error) {
    return <Typography>Error :(error)</Typography>;
  }


  return (
   <Box 
   component="section" 
   sx={{ 
    p: 4,
    display: 'flex', 
    flexDirection: 'column',
    justifyContent: 'center', 
    alignItems: 'center'}}>
      <Searchbar books={data.books}/>
      {data && data.books ? (
        <BooksGrid 
        title="All Books"
        books={data.books} />
      ) : (
        <Typography>No books available currently!</Typography>
      )}
   </Box>
  );
}

export default App;
