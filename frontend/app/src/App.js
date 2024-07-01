import React from 'react';
import { Box } from '@mui/material';

import Searchbar from './components/search';

function App() {
  return (
   <Box 
   component="section" 
   sx={{ p: 4, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Searchbar />
   </Box>
  );
}

export default App;
