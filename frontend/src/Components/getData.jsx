import React, { Component } from 'react';
import noImage from "../assets/no-image.png";

class GetData extends Component {
  render() {
    return (
      <div className="container-outer">
        {this.props.data.map(data =>
          data.multimedia != null
            ?
            <div className="container-box" key={data.url}>
              <img src={data.multimedia[2].url} alt="" />
              <div className="container-box-inner">
                <a href={data.url}
                  target="_blank"
                  rel="noopener noreferrer">
                  <h1>{data.title}</h1>
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
    )
  }
}

export default GetData;
