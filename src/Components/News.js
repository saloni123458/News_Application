import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {
  static defaultProps = {country:'in', pageSize:6,category: 'general'};

  static propsTypes = {country:PropTypes.string, pageSize:PropTypes.number, category: PropTypes.string};
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1
    };
    document.title = `${this.props.category} - NEWSs`;
  }

  async updateNews(){
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e2b37fbc8f914c8683698a4547472a3b&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
      page: this.state.page +1
    });
  }

  async componentDidMount() {
    this.updateNews()
  }

  handleNextClick = async () => {
    // console.log("next");
    this.setState({page: this.state.page + 1})
    this.updateNews()
  };

  handlePreviousClick = async () => {
    // console.log("previous");
    this.setState({ page: this.state.page - 1 });
    this.updateNews()
  };

  render() {
    return (
      <>
        <div className="container my-3">
          <h1 style={{ margin: "30px 0px" }} className="text-center">
            Newss - Top {this.props.category} Headlines
          </h1>
          {this.state.loading && <Spinner />}
          <div className="row my-3">
            {!this.state.loading &&
              this.state.articles.map((e) => {
                return (
                  <div className="col-md-4" key={e.url}>
                    <Newsitem
                      key={e.url}
                      title={e.title}
                      description={e.description}
                      imageUrl={e.urlToImage}
                      newsUrl={e.url}
                      author={e.author}
                      date={e.publishedAt}
                      source={e.source.name}
                    />
                  </div>
                );
              })}
          </div>
          <div className="container d-flex justify-content-between">
            <button
              type="button"
              className="btn btn-dark"
              onClick={this.handlePreviousClick}
              disabled={this.state.page <= 1}
            >
              &larr; Previous
            </button>
            <button
              type="button"
              className="btn btn-dark"
              onClick={this.handleNextClick}
              disabled={
                this.state.page + 1 >
                Math.ceil(this.state.totalResults / this.props.pageSize)
              }
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default News
























    // let url = `https://newsapi.org/v2/top-headlines?country=${
    //   this.props.country
    // }&category=${this.props.category}&apiKey=e2b37fbc8f914c8683698a4547472a3b&page=${
    //   this.state.page - 1
    // }&pageSize=${this.props.pageSize}`;
    // this.setState({ loading: true });
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // this.setState({
    //   articles: parsedData.articles,
    //   page: this.state.page - 1,
    //   loading: false,
    // });