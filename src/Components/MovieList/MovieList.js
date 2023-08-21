import React, { Fragment, useEffect, useState } from "react";
import * as Icon from "react-bootstrap-icons";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ApiCallAction from "../../Service/ApiCallAction/ApiCallAction";
import { staticLabels } from "../../StaticLabels/StaticLabels";
import Loading from "../Loading/Loading";
import MovieCard from "../MovieCard/MovieCard";
import ResultNotFound from "../ResultNotFound/ResultNotFound";
// import { Tooltip } from "@mui/material";

function MovieList() {
  const dispatch = useDispatch();
  const selectedSearch = useSelector((state) => state.selectedSearch);

  const [movieData, setMovieData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  //USEEFFECTS

  useEffect(() => {
    if (currentPage !== 1) {
      setCurrentPage(1);
    }
    // eslint-disable-next-line
  }, [selectedSearch]);

  useEffect(() => {
    setIsLoading(true);
    ApiCallAction(
      "get",
      selectedSearch
        ? `/search/movie?query=${selectedSearch}&include_adult=false&language=en-US&page=${currentPage}`
        : `/movie/upcoming?page=${currentPage}`
    ).then((response) => {
      const allData = response?.results;
      currentPage === 1
        ? setMovieData(allData)
        : setMovieData((prev) => [...prev, ...allData]);
      setTotalPages(response?.total_pages);
      setIsLoading(false);
    });
    // eslint-disable-next-line
  }, [currentPage, selectedSearch]);

  //FUNCTIONS

  const handleSendMovieDetails = (item) => {
    dispatch({ type: "SET_SELECTED_MOVIE", payload: item });
  };

  const fetchMoreData = () => {
    if (totalPages <= currentPage) {
      setHasMore(false);
    } else {
      setCurrentPage(currentPage + 1);
      setHasMore(true);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Fragment>
      <Fragment>{isLoading && <Loading />}</Fragment>
      <div className="listContainer">
        <InfiniteScroll
          next={fetchMoreData}
          hasMore={hasMore}
          dataLength={movieData?.length}
          scrollThreshold={0.9}
          loader={
            currentPage > 1 && (
              <span className="text-center">
                <h5>{staticLabels.loading}</h5>
              </span>
            )
          }
        >
          <div className="row">
            {movieData && movieData?.length > 0 ? (
              movieData?.map((item, index) => (
                <>
                  <div className=" col-lg-2 col-md-3 col-sm-6 col-6">
                    <Link
                      to={`/details/${item?.id}`}
                      style={{ textDecoration: "none" }}
                      onClick={() => handleSendMovieDetails(item)}
                    >
                      <MovieCard
                        poster={item?.poster_path}
                        title={item?.title}
                        rating={item?.vote_average}
                        description={item?.overview}
                      />
                    </Link>
                  </div>
                </>
              ))
            ) : (
              <ResultNotFound />
            )}
          </div>
          {currentPage !== 1 && (
            <button className="topButton" onClick={scrollToTop}>
              <Icon.ArrowUpCircleFill color="black" size={30} />
            </button>
          )}
        </InfiniteScroll>
      </div>
    </Fragment>
  );
}

export default MovieList;
