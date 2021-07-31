import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Error.css';

export default class ErrorPage extends Component {
  render() {
    return (
      <div className='error-page'>
        <h1>Lost your way?</h1>
        <p>
          Sorry, we can't find that page. Error 404
          <br />
          You'll find lots to explore on the home page
        </p>
        <Link className='error-page--btn' to='/'>
          <span>Back Home</span>
        </Link>
      </div>
    );
  }
}
