import React from 'react'

const Newsitem = (props) => {

  let { title, description, imageUrl, newsUrl, date, author, source } = props
  return (
    <div>
      <div className="card mt-4" >
        <img src={!imageUrl ? "https://media.gettyimages.com/id/694041088/photo/television-studio.jpg?s=2048x2048&w=gi&k=20&c=CDxdjKkA5De7WMJX_nzXweywn3nG-0cLo-bISS-Ax-0=" : imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}......</p>
          <p> Source: {source}</p>
          <p className="card-text"><small className="text-danger">Written By: {!author ? "Unknown" : author} On {new Date(date).toGMTString()}</small></p>
          <a href={newsUrl} target='blank' style={{ backgroundColor: "#ECECEC", border: "none", color: "black" }} className="btn btn-primary">Read More</a>
        </div>
      </div>
    </div>
  )

}
export default Newsitem