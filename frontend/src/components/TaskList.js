import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Stack
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";

function TaskList() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const res = await axios.get("http://127.0.0.1:5000/tasks");
    setTasks(res.data);
  };

  const deleteTask = async (id) => {
    await axios.delete(`http://127.0.0.1:5000/tasks/${id}`);
    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <Stack spacing={2}>
      {tasks.map((task) => (
        <Card key={task.id}>
          <CardContent>
            <Typography variant="h6">{task.title}</Typography>
            <Typography variant="body2">{task.description}</Typography>

            <IconButton
              color="error"
              onClick={() => deleteTask(task.id)}
            >
              <DeleteIcon />
            </IconButton>
          </CardContent>
        </Card>
      ))}
    </Stack>
  );
}

export default TaskList;