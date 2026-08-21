import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

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
    let url = `https://newsapi.org/v2/everything?q=apple&from=2026-08-20&to=2026-08-20&sortBy=popularity&apiKey=${process.env.REACT_APP_NEWS_API_KEY}&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles || [],
      totalResults: parsedData.totalResults,
      loading: false
    });
  }

  // -------                                              NEXT CLICK FUNCTION
  handleNextClick = async () => {
    let nextPage = this.state.page + 1;

    if (
      !(
        this.state.page + 1 >
        Math.ceil(this.state.totalResults / this.props.pageSize)
      )
    ) {
      let url = `https://newsapi.org/v2/everything?q=apple&from=2026-08-20&to=2026-08-20&sortBy=popularity&apiKey=${process.env.REACT_APP_NEWS_API_KEY}&page=${nextPage}&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        articles: parsedData.articles || [],
        page: nextPage,
        loading: false
      });
    }
  };

  // -------                                              PREVIOUS CLICK FUNCTION
  handlePrevClick = async () => {
    let prevPage = this.state.page - 1;
    if (this.state.page <= 1) {
    } else {
      let url = `https://newsapi.org/v2/everything?q=apple&from=2026-08-20&to=2026-08-20&sortBy=popularity&apiKey=${process.env.REACT_APP_NEWS_API_KEY}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        articles: parsedData.articles || [],
        page: prevPage,
        loading: false
      }); 
    }
  };

  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center">News - Headlines</h2>
        {this.state.loading && <Spinner/>}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
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
            disabled={
              this.state.page + 1 > Math.ceil(this.state.totalResults / 12)
            }
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
