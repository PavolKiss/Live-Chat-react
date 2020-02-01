import React from 'react';

export const LoadPage = ({ load = false }) => {
  return <div>{load && <h1>Loading please wait...</h1>}</div>;
};
