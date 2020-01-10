import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.getData();
    this.state = { data: [] }
  }

  getData() {
    axios.get('http://localhost:5000').then(
      response => this.setState({ data: [...response.data.results] })
    )
  }

  render() {
    return (
      <div className="container-outer">
        {this.state.data.map(data =>
          <div className="container-box" key={data.url}>
            <img src={data.multimedia[2].url} alt="" />
            <div className="container-box-inner">
              <a href={data.url} target="_blank" rel="noopener noreferrer"><h1>{data.title}</h1></a>
              <p> {data.abstract} </p>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default App;
