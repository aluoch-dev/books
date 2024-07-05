import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { useState } from 'react';
import { Alert, Box, Typography } from '@mui/material';
import Searchbar from './components/Search';
import BooksGrid from './components/BooksGrid';
import Navbar from './components/Navbar';
import CircularWithValueLabel from './components/Loading';
import { SecondaryButton } from './components/Buttons';
import { SuccessAlert, WarningAlert } from './components/Alert';

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
  const [isReadingList, setIsReadingList] = useState(false);



  if (loading) {
    return <CircularWithValueLabel />;
  } else if (error) {
    return <Typography>Error :(error)</Typography>;
  }

  const handleSelectBook = (book) => {
    setSelectedBook(book);
  };

  const viewReadingList = () => {
    console.log("Viewing Reading List");
    setSelectedBook(null);
    setIsReadingList(true);
  }

  const handleAddToReadingList = ({title, author, coverPhotoURL}) => {
    try {
      const book = {title, author, coverPhotoURL};
      const updatedReadingList = [...readingList, book];
      setReadingList(updatedReadingList);
      localStorage.setItem('readingList', JSON.stringify(updatedReadingList));
      <SuccessAlert text=" Book added successfuly" />
      //Todo Change button state to disabled to prevent durther add operations.
    } catch {
      <WarningAlert text="Operation Failed. Try Again!"/>
    }

  }

  const removeFromReadingList = () => {
    //Todo: Remove from Reading List
  }

  const viewAllBooks = () => {
    setIsReadingList(false);
    setSelectedBook(null);
  }


  return (
    <>
    <Navbar onViewList={viewReadingList}onClick={viewAllBooks} />
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
        isReadingList ? (
          readingList.length >= 1 ? (
            <>
            <SecondaryButton text="View all Books" onClick={viewAllBooks} />
            <BooksGrid title='Reading List' books={readingList} isViewChanged={true} onClick={removeFromReadingList}/>
            </>
          ) : (
            <>
            <Typography sx={{ fontFamily: 'Mulish, sans-serif', m: 4}}>No books in your reading List. Add some right away.</Typography>
            <SecondaryButton text="View all Books" onClick={viewAllBooks} />
            </>
          )
        ) : (
        <BooksGrid title="All Books" books={data.books} onClick={handleAddToReadingList} />
        )
      )
      ) : (
        <Typography sx={{ fontFamily: 'Mulish, sans-serif', m: 4}}>No books available currently!</Typography>
      )}
    </Box>
    </>
  );
}

export default App;
