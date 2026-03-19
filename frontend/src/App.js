import React from "react";
import { Container, Typography, Paper } from "@mui/material";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  return (
    <Container maxWidth="md" style={{ marginTop: "40px" }}>
      
      <Typography variant="h3" align="center" gutterBottom>
        Flask + React + MySQL CRUD
      </Typography>

      <Paper elevation={3} style={{ padding: "20px", marginBottom: "30px" }}>
        <Typography variant="h5" gutterBottom>
          Create Task
        </Typography>
        <TaskForm />
      </Paper>

      <Paper elevation={3} style={{ padding: "20px" }}>
        <Typography variant="h5" gutterBottom>
          Tasks List
        </Typography>
        <TaskList />
      </Paper>

    </Container>
  );
}

export default App;