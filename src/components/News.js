import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();

    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/everything?q=apple&from=2026-08-20&to=2026-08-20&sortBy=popularity&apiKey=${process.env.REACT_APP_NEWS_API_KEY}&page=1&pageSize=12`;

    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles || [],
      totalResults: parsedData.totalResults,
    });
  }

  handleNextClick = async () => {
    let nextPage = this.state.page + 1;

    if (nextPage > Math.ceil(this.state.totalResults / 12)) {
      return;
    }

    let url = `https://newsapi.org/v2/everything?q=apple&from=2026-08-20&to=2026-08-20&sortBy=popularity&apiKey=${process.env.REACT_APP_NEWS_API_KEY}&page=${nextPage}&pageSize=12`;

    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles || [],
      page: nextPage,
    });
  };
  handlePrevClick = async () => {
    let prevPage = this.state.page - 1;
    if (this.state.page <= 1) {
    } else {
      let url = `https://newsapi.org/v2/everything?q=apple&from=2026-08-20&to=2026-08-20&sortBy=popularity&apiKey=${process.env.REACT_APP_NEWS_API_KEY}&page=${this.state.page - 1}&pageSize=12`;

      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        articles: parsedData.articles || [],
        page: prevPage,
      });
    }
  };

  render() {
    return (
      <div className="container my-3">
        <h2>News - Headlines</h2>

        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-3" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={
                    element.description ? element.description.slice(0, 80) : ""
                  }
                  imageUrl={element.urlToImage ? element.urlToImage : ""}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>

        <div className="d-flex justify-content-between my-3">
          <button
            disabled={this.state.page <= 1}
            className="btn btn-secondary"
            onClick={this.handlePrevClick}
            type="button"
          >
            &larr; Previous
          </button>

          <button
            className="btn btn-secondary"
            onClick={this.handleNextClick}
            type="button"
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
