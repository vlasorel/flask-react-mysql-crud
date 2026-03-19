import React, { useState } from "react";
import { TextField, Button, Stack } from "@mui/material";
import axios from "axios";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addTask = async () => {
    await axios.post("http://127.0.0.1:5000/tasks", {
      title,
      description
    });

    setTitle("");
    setDescription("");

    window.location.reload();
  };

  return (
    <Stack spacing={2}>
      <TextField
        label="Title"
        variant="outlined"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <TextField
        label="Description"
        variant="outlined"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <Button variant="contained" onClick={addTask}>
        Add Task
      </Button>
    </Stack>
  );
}

export default TaskForm;