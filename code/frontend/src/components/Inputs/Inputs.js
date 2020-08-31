import React from 'react';

import classes from './Inputs.css';

function inputs(props) {
  return (
    <div className={classes.Container}>
      <textarea
        placeholder="Message"
        value={props.message.content}
        onChange={props.messageChanged} />
      {props.message.error ? <div className={classes.Error}>{props.message.error}</div> : null}
      <input
        placeholder="Author"
        value={props.author.content}
        onChange={props.authorChanged} />
      <button
        className={classes.Button}
        onClick={props.cleared}>Clear</button>
      <button
        className={classes.Button}
        onClick={props.submited}>Submit</button>
      {props.author.error ? <div className={classes.Error}>{props.author.error}</div> : null}
    </div>
  );
}

export default inputs;
