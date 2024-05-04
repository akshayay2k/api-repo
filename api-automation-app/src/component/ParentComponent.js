// ParentComponent.js

import React, { useState } from 'react';
import TaskForm from './TaskForm.js';

const ParentComponent = () => {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = newTask => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div>
      <TaskForm onAddTask={handleAddTask} />
    </div>
  );
};

export default ParentComponent;
