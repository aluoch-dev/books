import React from 'react';
import { Box } from '@mui/material';

import Searchbar from './components/search';
import BookGrid from './components/BookItem';

function App() {
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
      <BookGrid />
   </Box>
  );
}

export default App;
