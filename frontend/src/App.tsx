import React from 'react';
import { Box } from '@mui/material';

import { TodosTable } from './todos/TodosTable';

function App() {
  return (
    <Box sx={{ height: '100vh', p: 4 }}>
      <TodosTable />
    </Box>
  );
}

export default App;
