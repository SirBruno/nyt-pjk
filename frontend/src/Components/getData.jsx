import React, { Component } from 'react';
import noImage from "../assets/no-image.png";
import logo from '../assets/nyt-logo.png';

class GetData extends Component {
  render() {
    return (
      <div>

        <div className="logo-container">
          <a className="logo" href="https://www.nytimes.com/" target="_blank" rel="noopener noreferrer">
            <img src={logo} alt="" />
          </a>
        </div>

        <div className="container container-outer">
          {this.props.data.map(data =>
            data.multimedia != null
              ?
              <div className="container-box" key={data.url}>
                <img src={data.multimedia[2].url} alt="" />
                <div className="container-box-inner">
                  <a href={data.url}
                    target="_blank"
                    rel="noopener noreferrer">
                    <h1 className="title">{data.title}</h1>
                  </a>
                  <p> {data.abstract} </p>
                </div>
              </div>
              :
              <div className="container-box" key={data.url}>
                <img src={noImage} alt="" />
                <div className="container-box-inner">
                  <a href={data.url}
                    target="_blank"
                    rel="noopener noreferrer">
                    <h1>{data.title}</h1>
                  </a>
                  <p> {data.abstract} </p>
                </div>
              </div>
          )}
        </div>
      </div>
    )
  }
}

export default GetData;
