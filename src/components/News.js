import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  render() {
    return (
      <div className="container my-3">
        <h2>News - Headlines</h2>
        <div className="row">
          <div className="col-md-3">
            <NewsItem title="myTitle" discription="mydesc" imageUrl="https://yashiscoder.github.io/Hii/images/yk.jpg"/>
          </div>

          <div className="col-md-3">
            <NewsItem title="myTitle" discription="mydesc"/>
          </div>

          <div className="col-md-3">
            <NewsItem title="myTitle" discription="mydesc"/>
          </div>

          <div className="col-md-3">
            <NewsItem title="myTitle" discription="mydesc"/>
          </div>
        </div>

      </div>
    );
  }
}
export default News;
