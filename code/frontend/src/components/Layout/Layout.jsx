import React from 'react';

import classes from './Layout.css';

class Layout extends React.Component {
  render () {
    return (
      <React.Fragment>
        <header className={classes.Header}>
          <h3>guestbook</h3>
        </header>
        <main className={classes.Main}>
          <section className={classes.Content}>
            {this.props.children}
          </section>
        </main>
      </React.Fragment>
    )
  }
}

export default Layout;
