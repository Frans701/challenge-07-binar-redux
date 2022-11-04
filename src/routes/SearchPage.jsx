import React, { useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import Movie from "../components/Movie";
import { useDispatch, useSelector } from "react-redux";
import { getSearchMovie } from "../redux/actions/movieActions";

function SearchPage() {
  let [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  let search = searchParams.get("search");

  const { searchMovieList } = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(getSearchMovie(search));
  }, [dispatch]);

  return (
    <div className="mt-[80px] px-[40px]">
      <h1 className="text-4xl text-gray-800 font-bold">
        Search Result "{search}"
      </h1>
      <div className="grid grid-cols-4 gap-10 rounded-sm my-6 ">
        {searchMovieList?.results?.map((movie) => {
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
  );
}

export default SearchPage;
