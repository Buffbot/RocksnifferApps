import React from 'react';
import queryString from 'query-string'

const Main = ({ location }) => {
  const query = queryString.parse(location.search.substr(1));

  return (
    <ul>
      <li>ID: {query.id}</li>
      <li>Sort: {query.sort}</li>
    </ul>
  )
}

export default Main;
