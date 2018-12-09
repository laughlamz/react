import React, { Component } from 'react';
import './App.css';
import Accordion from './components/Accordion';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Accordion heading={"Heading"}>
          this is a content use this.props.children: kwdawdawd oqa kdoakdoakwok
        </Accordion>
      </div>
    );
  }
}

export default App;
