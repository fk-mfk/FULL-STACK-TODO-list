import React from 'react';
import { useSelector } from 'react-redux';
import '../App.css';

const ProgressBar = () => {
  const todos = useSelector((state) => state.todos);

  const totalTasks = todos.length;
  const completedTasks = todos.filter((todo) => todo.done).length;

  if (totalTasks === 0) {
    return (
      <div className="progress-container">
        <h2>Progress</h2>
        <div>No tasks available.</div>
      </div>
    );
  }

  const completedPercentage = ((completedTasks / totalTasks) * 100).toFixed(0);

  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const completedOffset = circumference - ((completedTasks / totalTasks) * circumference);

  return (
    <div className="progress-container">
      <h2>Progress</h2>
      <svg className="progress-ring" width="100" height="100">
        <circle
          className="progress-ring__circle--bg"
          stroke="gray"
          strokeWidth="8"
          fill="transparent"
          r={radius}
          cx="50"
          cy="50"
        />
        <circle
          className="progress-ring__circle"
          stroke=  "green" //{completedTasks === totalTasks ? "green" : "red"}
          strokeWidth="8"
          strokeDasharray={`${circumference} ${circumference}`}
          style={{ strokeDashoffset: completedOffset }}
          fill="transparent"
          r={radius}
          cx="50"
          cy="50"
        />
        <text
          x="50"
          y="50"
          textAnchor="middle"
          dominantBaseline="middle"  // Vertically center text
          className="progress-ring__text"
        >
          {`${completedPercentage}%`}
        </text>
      </svg>
      <div>Total tasks: {totalTasks}</div>
      <div>Completed tasks: {completedTasks}</div>
    </div>
  );
};

export default ProgressBar;
