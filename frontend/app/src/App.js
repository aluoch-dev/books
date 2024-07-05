import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import Searchbar from './components/Search';
import BooksGrid from './components/BooksGrid';
import Navbar from './components/Navbar';
import CircularWithValueLabel from './components/Loading';

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
  const [readingList, setReadingList] = useState(() => {
    const addedBooks = localStorage.getItem('readingList');
    return addedBooks ? JSON.parse(addedBooks) : [];
  })

  if (loading) {
    return <CircularWithValueLabel />;
  } else if (error) {
    return <Typography>Error :(error)</Typography>;
  }

  const handleSelectBook = (book) => {
    setSelectedBook(book);
  };

  const viewReadingList = () => {
    setSelectedBook(null);
  }

  const handleAddToReadingList = (book) => {
    const updatedReadingList = [...readingList, book];
    setReadingList(updatedReadingList);
    localStorage.setItem('readingList', JSON.stringify(updatedReadingList));

  }

  const removeFromReadingList = () => {
    //remove book from Reading List
  }


  return (
    <>
    <Navbar onReadingListClick={viewReadingList} />
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
          readingList.length > 0 ? (
          <BooksGrid title='Mty Reading List' books={readingList} onClick={removeFromReadingList}/>
          ) : (
          <BooksGrid title="All Books" books={data.books} onClick={handleAddToReadingList} />
          )
        )
      ) : (
        <Typography>No books available currently!</Typography>
      )}
    </Box>
    </>
  );
}

export default App;
