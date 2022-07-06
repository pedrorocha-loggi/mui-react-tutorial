import { AppBar, Box, Button, Card, CardActions, CardContent, IconButton, Toolbar, Typography } from "@material-ui/core";
import { Add, Delete } from "@material-ui/icons";

function App() {
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

      {(new Array(10)).fill(0).map((_, i) => (
        <Card style={{ marginTop: 10, marginRight: 10, marginLeft: 10 }} key={i}>
          <CardContent>
            <Typography>Conteúdo</Typography>
          </CardContent>
          <CardActions style={{ flexDirection: 'row-reverse' }}>
            <Button size="small" color="primary" startIcon={<Delete />}>
              Apagar
            </Button>
          </CardActions>
        </Card>
      ))}
    </Box >
  );
}

export default App;
