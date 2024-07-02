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

  console.log(data);
  console.log(typeof(data));

  //console.log(data.books);
  //const details = data.books;


  if(loading) return <Typography>Loading...</Typography>

  if(error) return <Typography>Error!</Typography>

  return (
   <Box 
   component="section" 
   sx={{ 
    p: 4, 
    display: 'flex', 
    flexDirection: 'column',
    justifyContent: 'center', 
    alignItems: 'center'}}>
      <Searchbar />
      <BooksGrid books={data} />
   </Box>
  );
}

export default App;
