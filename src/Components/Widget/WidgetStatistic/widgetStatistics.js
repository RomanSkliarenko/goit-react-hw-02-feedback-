import React from "react";

const WidgetStatistics = ({ good, neutral, bad }) => {
  return (
    <div>
      <h2>Statistics</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
    </div>
  );
};

export default WidgetStatistics;
