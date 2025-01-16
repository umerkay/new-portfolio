import React from 'react';

const tableData = [
  { method: 'Baseline', accuracy: 0.9302, featuresSelected: 34, computationTime: 'N/A' },
  { method: 'GA', accuracy: 0.9395, featuresSelected: 18, computationTime: '296.54 seconds' },
  { method: 'PSO', accuracy: 0.9411, featuresSelected: 21, computationTime: '413.94 seconds' },
  { method: 'Modified PSO', accuracy: 0.9426, featuresSelected: 30, computationTime: '250.40 seconds' },
];

function FSSTable() {
  return (
    <table border={1}>
      <thead>
        <tr>
          <th>Method</th>
          <th>Accuracy</th>
          <th>Features Selected</th>
          <th>Computation Time</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((row, index) => (
          <tr key={index}>
            <td>{row.method}</td>
            <td>{row.accuracy}</td>
            <td>{row.featuresSelected}</td>
            <td>{row.computationTime}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default FSSTable;