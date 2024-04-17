import React, { useEffect, useState } from 'react';
import Newsitem from './Newsitem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    updateNews();
  }, []);

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    let parseddata = await data.json();
    setArticles(parseddata.articles);
    setTotalResults(parseddata.totalResults);
    setLoading(false);
    props.setProgress(100);
  };
  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`
    setPage(page+1)
    let data = await fetch(url);
    let parseddata = await data.json();
    // console.log(parseddata)
    setArticles(articles.concat(parseddata.articles))
    setLoading(parseddata.totalResults)
    
    

  };


  return (
    <>


      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length < totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <h1 className='ml-3' style={{margin:"35px 0px", marginTop:"65px"}}> Top {props.category.charAt(0).toUpperCase() + props.category.slice(1)} News Headlines</h1>
          <div className="row">
            {articles.map((e, index) => {
              return <div className='col-md-4' key={index}>
                <Newsitem className="mx-7" title={e.title ? e.title : ""} author={e.author} source={e.source.name} date={e.publishedAt} description={e.description ? e.description.slice(0, 88) : ""} imageUrl={e.urlToImage} newsUrl={e.url} />
              </div>
            })}
          </div>
        </div>
      </InfiniteScroll>
      {/* <div className="container d-flex justify-content-between">
          <button type="button" disabled={state.page <= 1} style={{ backgroundColor: "black", border: "none", color: "white" }} class="btn btn-info mt-2" onClick={handleprevious}>&larr; Previous</button>
          <button type="button" disabled={state.page + 1 > Math.ceil(state.totalResults / props.pageSize)} style={{ backgroundColor: "black", border: "none", color: "white" }} class="btn btn-info mt-2" onClick={handlenext}>Next &rarr;</button>
        </div>
         */}

    </>
  )

}
News.defaultProps = {
  country: 'in',
  pageSize: 8,
  category: "general"
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
};
export default News