import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailsMovie } from "../redux/actions/movieActions";

function Detail() {
  let { id } = useParams();
  const dispatch = useDispatch();

  const { movie } = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(getDetailsMovie(id));
  }, [dispatch]);

  return (
    <div className="relative z-[1] h-screen w-full">
      <div className="px-[40px]">
        <div className="absolute z-[1] text-white text-left w-[700px] mt-[180px]">
          <h1 className="text-6xl font-bold">{movie?.title}</h1>
          <div className="mt-8">
            {movie?.genres?.map((genre) => {
              let name = genre.name;
              return (
                <button class="bg-red-600 text-white font-normal px-4 py-2 rounded-lg mr-2">
                  {name}
                </button>
              );
            })}
          </div>
          <p className="mt-6 text-sm">{movie?.overview}</p>
          <div className="flex items-center mt-6">
            <svg
              className="inline-block w-4 text-yellow-500 mr-1"
              aria-hidden="true"
              focusable="false"
              data-prefix="far"
              data-icon="star"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path
                fill="currentColor"
                d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"
              ></path>
            </svg>
            <p className="text-sm inline-block">{movie?.vote_average} / 10</p>
          </div>
          <button class="bg-red-500 hover:bg-red-700 text-white font-medium py-2 px-6 rounded-full uppercase mt-6 flex items-center">
            <box-icon color="white" name="play-circle"></box-icon>
            <span className="ml-2">Watch Trailer</span>
          </button>
        </div>
      </div>
      {/* Image */}
      <div className="absolute w-full h-full top-0">
        <img
          className="w-full h-full object-cover"
          src={"https://image.tmdb.org/t/p/w500" + movie?.backdrop_path}
          alt={movie?.path}
        />
      </div>
      {/* Black background */}
      <div className="absolute w-full h-full bg-black bg-opacity-50"></div>
    </div>
  );
}

export default Detail;
