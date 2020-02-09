import React from 'react';
import { StyledTable, TableBody } from './styles';

export const Table = ({ state, children }) => {
  const renderTableHeading = () =>
    Object.keys(state[0]).map((key, index) => {
      return (
        <thead>
          <th key={index}>{key.toUpperCase()}</th>
        </thead>
      );
    });

  const daoc = renderTableHeading;
  return (
    <div>
      <StyledTable>
        <TableBody>
          {daoc}
          {children}
        </TableBody>
      </StyledTable>
    </div>
  );
};
