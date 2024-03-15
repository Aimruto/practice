import React, { Component } from 'react';
import Todo from './components/Todo';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Calculator from './components/Calculator';
import './App.css'; // Import CSS file for styling

class App extends Component {
  render() {
    return (
      <div className="grid-container">
        <div className="header">
          <Navbar />
        </div>
        <div className='main-container'>
          <div className="calculator">
            <Calculator />
          </div>
          <div className='todo'>
            <Todo />
          </div>
          <div className='todo2'>
          <Todo />

          </div>
        </div>

        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
