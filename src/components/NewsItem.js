import React, { Component } from "react";

export class Newsitem extends Component {
  array = [];
  // constructor() {
  //   super();
  // }
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div className="my-2">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={
              !imageUrl
                ? "https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/nevergonnagiveyouup.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="IMG"
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-outline-success"
            >
              Go to news
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
