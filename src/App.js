import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Book from './Book';

class App extends Component {


  render() {
    return (
      <div className="app">
        <header className="list-books-title">
          <div>
            <h1>My Reads</h1>
          </div>
        </header>
        <body className="body">
          <h2 className="bookshelf-title">Currently Reading</h2>
          <Book />
        </body>
      </div>
    );
  }
}

export default App;
