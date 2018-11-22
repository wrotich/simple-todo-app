import React, { Component } from 'react';
import Note from './components/note'
import './App.css';

class Note extends Component {

  render() {
    return (
      <div className="note" onClick={this.props.deleteMethod}>
      {this.props.text}
        
      </div>
    );
  }
}

export default Note;
