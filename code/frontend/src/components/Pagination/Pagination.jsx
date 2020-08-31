import React from 'react';

import classes from './Pagination.css';

function pagination(props) {
  let buttons = 5;
  let lowerLimit = Math.min(props.page.current, props.page.totalPages);
  let upperLimit = lowerLimit;

  for (let b = 1; b < buttons && b < props.page.totalPages;) {
    if (lowerLimit > 1 ) {
      lowerLimit--;
      b++;
    }
    if (b < buttons && upperLimit < props.page.totalPages) {
      upperLimit++;
      b++;
    }
  }

  const paginatonControls = [];
  
  for (let i = lowerLimit; i <= upperLimit; i++) {
    if (i === props.page.current) paginatonControls.push(<li key={i} className={classes.active}>{ i }</li>);
    else paginatonControls.push(<li key={i} onClick={() => props.pageChanged(i)}>{ i }</li>);
  }

  const pagination = (
    <ul className={classes.pagination}>
      {props.page.current > 1 && <li onClick={() => props.pageChanged(props.page.current - 1)}>❮</li>}
      {props.page.totalPages > buttons && props.page.current - buttons / 2 > 1 && <li onClick={() => props.pageChanged(1)}>1 ...</li>}
      {paginatonControls}
      {props.page.totalPages > buttons && props.page.totalPages > props.page.current + buttons / 2 && <li onClick={() => props.pageChanged(props.page.totalPages)}>... {props.page.totalPages}</li>}
      {props.page.current < props.page.totalPages && <li onClick={() => props.pageChanged(props.page.current + 1)}>❯</li>}
    </ul>
  );

  return (
    <div className={classes.Center}>
      {props.page.totalPages > 1 ? pagination : null}
    </div>
  );
}

export default pagination;
