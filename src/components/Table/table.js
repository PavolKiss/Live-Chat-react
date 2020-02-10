import React from 'react';
import './style.css';
import { StyledTable } from './styles';

export const Table = ({ thead, tbody }) => {
  return (
    <div>
      <StyledTable>
        <thead>
          <tr>{thead}</tr>
        </thead>
        <tbody>{tbody}</tbody>
      </StyledTable>
    </div>
  );
};
