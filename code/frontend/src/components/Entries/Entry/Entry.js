import React from 'react';

import classes from './Entry.css';

function entry(props) {
    return (
      <div className={classes.Container}>
        <div className={classes.Header}>
          <div><strong>Author:</strong> {props.author}</div>
          <div>{props.timestamp}</div>
        </div>
        <div className={classes.Content}>
          {props.message}
        </div>
      </div>
    );
}

export default entry;
