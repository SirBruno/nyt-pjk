import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GetData from './Components/GetData.jsx';

class App extends Component {
  constructor() {
    super();
    this.getData();
    this.state = { data: [] };
  }

  getData() {
    axios.get('http://localhost:5000').then(
      response => this.setState({ data: [...response.data.results] })
    )
  }

  render() {
    return (
      <GetData data={this.state.data} />
    )
  }
}

export default App;
