import React from 'react';

import { baseUrl } from '../../config';
import classes from './GuestBook.css';
import Entries from '../Entries/Entries';
import Inputs from '../Inputs/Inputs';
import Pagination from '../Pagination/Pagination';
import Spinner from '../Spinner/Spinner';

class GuestBook extends React.Component {
  state = {
    error: null,
    isLoaded: false,
    author: {
      content: '',
      error: ''
    },
    message: {
      content: '',
      error: ''
    },
    entries: [],
    page: {
      current: parseInt((new URLSearchParams(window.location.search)).get('page')) || 1,
      count: null,
      size: null,
      totalPages: null,
      next: null,
      previous: null
    }
  };

  componentDidMount() {
    this.getEntries(this.state.page.current);
  }

  getEntries = async page => {
    try {
      const response = await fetch(baseUrl + '?' + new URLSearchParams({page: page}), {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
      });

      const data = await response.json();

      this.setState({
        isLoaded: true,
        entries: data.results,
        page: {
          current: page,
          count: data.count,
          size: data.page_size,
          totalPages: data.total_pages,
          next: data.next,
          previous: data.previous
        }
      });

      this.setPageQueryParam(page);
    } catch (error) {
      this.setState({
        isLoaded: true,
        error: error
      });
    }
  }

  postEntry = async event => {
    event.preventDefault();

    try {
      const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          'author': this.state.author.content,
          'message': this.state.message.content
        })
      });

      const data = await response.json();

      if (response.status >= 400) {
        throw {
          status: response.status,
          data: data
        }
      } else {
        this.setState(prevState => {
          return {
            ...prevState,
            isLoaded: true,
            page: {
              ...prevState.page,
              current: 1
            },
            author: {
              content: '',
              error: ''
            },
            message: {
              content: '',
              error: ''
            },
            entries: [data, ...prevState.entries]
          }
        });

        this.getEntries(1);
      }
    } catch (error) {
      if (error.status < 500) {
        this.setState(prevState => {
          return {
            ...prevState,
            isLoaded: true,
            author: {
              content: prevState.author.content,
              error: error.data.author
            },
            message: {
              content: prevState.message.content,
              error: error.data.message
            }
          }
        });
      } else {
        this.setState({
          isLoaded: true,
          error: error
        });
      }
    }
  }

  setPageQueryParam(page) {
    if (page > 1) {
      window.history.pushState('', '', '?' + new URLSearchParams({page: page}));
    } else {
      window.history.pushState('', '', '/');
    }
  }
  
  handleAuthorChange = event => {
    this.setState({
      author: {
        content: event.target.value,
        error: ''
      }
    });
  }

  handleMessageChange = event => {
    this.setState({
      message: {
        content: event.target.value,
        error: ''
      }
    });
  }

  handleInputsClear = () => {
    this.setState({
      author: {
        content: '',
        error: ''
      },
      message: {
        content: '',
        error: ''
      }
    });
  }

  render() {
    const { error, isLoaded } = this.state;
    if (error) {
      return <div className={classes.Error}>Error: {error.message}</div>
    } else if (!isLoaded) {
      return <Spinner />
    } else {
      return (
        <React.Fragment>
          <Inputs
            author={this.state.author}
            message={this.state.message}
            authorChanged={this.handleAuthorChange}
            messageChanged={this.handleMessageChange}
            cleared={this.handleInputsClear}
            submited={this.postEntry} />
          <Entries
            data={this.state.entries} />
          <Pagination
            page={this.state.page}
            pageChanged={this.getEntries} />
        </React.Fragment>
      );
    }
  }
}

export default GuestBook;
