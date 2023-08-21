import React, { Fragment } from "react";
import { staticLabels } from "../../StaticLabels/StaticLabels";

function MovieCard({poster,title,rating,description }) {
  
  return (
    <Fragment>
      <div className="card movieCard">
      <img src={`https://image.tmdb.org/t/p/original${poster}`} alt={staticLabels.noPoster} className="moviePoster" />
      <div className="row p-1">
        <div className="movieTitle text-ellipsis_1 col-lg-9 col-md-8 col-sm-8 col-8">
            {title || staticLabels.noTitle}
        </div>
        <div className=" col-lg-3  col-md-4 col-sm-4 col-4">
          <span className="movieRating " >{rating !== 10 ? rating?.toFixed(1) || "0.0" : rating}</span>
        </div>
      </div>
      <div className="row pb-2 p-1">
        <div className="movieDesc text-ellipsis_2  col ">
        {description || staticLabels.noDescription}
        </div>
        
      </div>
      </div>
    </Fragment>
  );
}

export default MovieCard;
