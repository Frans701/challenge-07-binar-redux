import { useEffect, useState } from "react";
import "boxicons";
import { Link } from "react-router-dom";
import Movie from "../components/Movie";
import Hero from "../components/Hero";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovies, getDetailsMovie } from "../redux/actions/movieActions";

function Homepage() {
  const dispatch = useDispatch();

  const { movies } = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(getAllMovies());
  }, [dispatch]);

  return (
    <div>
      {/* Carousel Start */}
      <div className="h-screen">
        <Carousel
          autoFocus={true}
          autoPlay={true}
          infiniteLoop={true}
          showStatus={false}
          interval={3000}
          showArrows={true}
        >
          {movies?.results?.slice(0, 3).map((movie) => {
            return <Hero key={movie.id} movie={movie} />;
          })}
        </Carousel>
      </div>
      {/* Carousal End */}

      {/* Popular Movie Start */}
      <div className="px-[40px] mt-6">
        <h1 className="text-4xl font-bold">Popular Movie</h1>

        <div className="grid grid-cols-4 gap-10 rounded-sm my-6">
          {movies?.results?.map((movie, index) => {
            return (
              <div>
                <Link to={`/detail/${movie.id}`}>
                  <Movie key={movie.id} movie={movie} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      {/* Popular Movie End */}
    </div>
  );
}

export default Homepage;
