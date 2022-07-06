import { AppBar, Box, Button, Card, CardActions, CardContent, IconButton, Toolbar, Typography } from "@material-ui/core";
import { Add, Delete } from "@material-ui/icons";

function App() {
  const notes = Array(10).fill('Conteúdo');
  return (
    <Box>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Anotações
          </Typography>
          <IconButton style={{ color: 'white' }}>
            <Add />
          </IconButton>
        </Toolbar>
      </AppBar>

      {notes.map((content, index) => (
        <Card
          style={{ marginTop: 10, marginRight: 10, marginLeft: 10 }}
          key={index}
        >
          <CardContent>
            <Typography>{content}</Typography>
          </CardContent>
          <CardActions style={{ flexDirection: 'row-reverse' }}>
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
    </Box >
  );
}

export default App;
