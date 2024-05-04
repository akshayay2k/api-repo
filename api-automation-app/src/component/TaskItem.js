import React from 'react';

const TaskItem = ({ task, onDeleteTask }) => {
  return (
    <div className="mb-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{task.title}</h5>
          <p className="card-text">{task.description}</p>
          <button className="btn btn-danger" onClick={() => onDeleteTask(task.id)}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
