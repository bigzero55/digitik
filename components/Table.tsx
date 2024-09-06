import React from 'react';

interface TableProps {
  headers: string[];
  data: any[];
  renderRow: (row: any) => React.ReactNode;
}

const Table: React.FC<TableProps> = ({ headers, data, renderRow }) => {
  return (
    <table className="table w-full">
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>{renderRow(row)}</tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
