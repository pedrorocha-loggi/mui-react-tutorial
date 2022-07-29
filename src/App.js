import { AppBar, Box, Button, Card, CardActions, CardContent, IconButton, Toolbar, Typography } from '@mui/material';
import { Add, Delete } from '@mui/icons-material';
import { useState } from 'react';

function App() {
  const [notes, setNotes] = useState(Array(10).fill('Conteúdo').map(
    (content, index) => `${content} ${index}`));
  return (
    <Box>
      <AppBar position="sticky">
        <Toolbar>
          <Typography flexGrow={1}>Minhas anotações</Typography>
          <IconButton color='inherit' >
            <Add />
          </IconButton>
        </Toolbar>
      </AppBar>
      {notes.map((note, index) => (
        <Card key={index} sx={{ margin: 1 }}>
          <CardContent>
            <Typography>{note}</Typography>
          </CardContent>
          <CardActions sx={{ flexDirection: 'row-reverse' }}>
            <Button
              size="small"
              color="primary"
              startIcon={<Delete />}
            >
              Apagar
            </Button>
          </CardActions>
        </Card>

      ))}
    </Box>
  );
}

export default App;
