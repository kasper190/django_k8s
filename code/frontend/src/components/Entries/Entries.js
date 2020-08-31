import React from 'react';

import Entry from './Entry/Entry';

function entries(props) {
  return (
    <React.Fragment>
      {props.data.map(entry => (
        <Entry 
          key={entry.id}
          timestamp={new Date(entry.timestamp).toLocaleString()}
          author={entry.author}
          message={entry.message} />
      ))}
    </React.Fragment>
  )
}

export default entries;
