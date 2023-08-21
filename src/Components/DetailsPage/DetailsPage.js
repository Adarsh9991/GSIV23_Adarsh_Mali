import moment from "moment/moment";
import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { staticLabels } from "../../StaticLabels/StaticLabels";

function DetailsPage() {
  
  const selectedMovie = useSelector((state) => state.selectedItem);

  return (
    <Fragment>
      <div>
        <div className="row details_container">
          <div className="col-lg-2 col-md-3 col-sm-4">
            <img
              src={`https://image.tmdb.org/t/p/original${selectedMovie?.poster_path}`}
              alt={staticLabels.noPoster}
              className="details_moviePoster"
            />
          </div>
          <div className="col-lg-10 col-md- col-sm-8">
            <div className="details_MovieTitle">
              {selectedMovie?.title || staticLabels.noTitle}
              <span className="details_Rating">
                (
                {selectedMovie?.vote_average !== 10
                  ? selectedMovie?.vote_average?.toFixed(1) || "0.0"
                  : selectedMovie?.vote_average}
                )
              </span>
            </div>
            <div className="details_dates">
              {moment(selectedMovie?.release_date).year()} | Length | Director
            </div>
            <div className="details_dates">Cast : Actor 1, Actor 2 ...</div>
            <div className="details_desc">
              <strong> {staticLabels.description}</strong>
              {selectedMovie?.overview || staticLabels.noDescription}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default DetailsPage;
