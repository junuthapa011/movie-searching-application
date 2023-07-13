import { useEffect, useState } from "react";
import "./App.css";
import { Result } from "./Components/SearchResult";
import axios from "axios";
import NavBar from "./components/nav-bar";
import SearchBar from "./components/search-bar";
import { FcSearch } from "react-icons/fc";
import Header from "./Components/header";

const APIURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const getAllMovies = () => {
    axios
      .get(APIURL)
      .then((response) => {
        setMovies(response.data.results);
        console.log(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const changeSearch = (e) => {
    setSearch(e.target.value);
    return e.target.value;
  };

  const getSearchedMovies = () => {
    axios
      .get(SEARCHAPI + search)
      .then((response) => {
        setMovies(response.data.results);
        console.log(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    setMovies([]);
    if (search === "") {
      getAllMovies();
    } else {
      getSearchedMovies();
    }
  }, [search]);

  return (
    <>
      <Header />
      <div className="grid grid-cols-2 max-w-[1240px] min-h-[400px]">
        <NavBar>
          <SearchBar
            type="search"
            value={search}
            onChange={changeSearch}
            className="text-slate-300"
            placeholder="Search Movies..."
          />
        </NavBar>

        {movies.length === 0 && search !== "" ? (
          <div className="flex flex-col pt-14 pl-[720px]">
            <FcSearch className="text-3xl" />
            <span className="text-2xl pb-5">Results for:{search}</span>
            <div className="text-xl">Can't find movies...</div>
          </div>
        ) : (
          <Result movies={movies} />
        )}
      </div>
    </>
  );
}

export default App;
