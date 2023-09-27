import React, {Component} from 'react'

export class Newsitem extends Component {
    
  render() {
    let {title, description, imageUrl,newsUrl, author, date, source} = this.props;
    return (
      <div className="my-2">
        <div className="card">
          <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">
            {source}
          </span>
          <img
            src={
              !imageUrl
                ? "https://imgs.search.brave.com/nOL1dcczJD_Z1W7QUThdj22mmHFuW0Uqz63XyenZVqw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA0LzI5LzQyLzQy/LzM2MF9GXzQyOTQy/NDI3OV9kb2tFRndu/U29KZU9LcHF2VjF0/dFh1bThwaUVTc0Y1/TC5qcGc"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a role="noreferrer" href={newsUrl} className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem