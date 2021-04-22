import React from "react";
import { Container, Appbar, Typography, Grow, Grid } from "@material-ui/core";
const App = () => {
  return (
    <Container maxWidth="lg">
      <Appbar position="static" color="inherit">
        <Typography variant="h2" align="center">
          Memories
        </Typography>
      </Appbar>
    </Container>
  );
};

export default App;
