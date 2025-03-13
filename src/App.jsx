import "./App.css";
import MovieSearch from "./MovieSearch.jsx";
import MovieDisplay from "./MovieDisplay.jsx";
import { useState, useEffect } from "react";
function App() {
  // 6f956ef3
  // example title search: http://www.omdbapi.com/?t=Blade+Runner&y=1982&apikey=6f956ef3
  // example general search:
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  async function fetchMovie() {
    const url = `http://www.omdbapi.com/?s=batman&apikey=6f956ef3`;
    const rawData = await fetch(url);
    const jsonData = await rawData.json();
    console.log(jsonData);
    setMovies(jsonData.Search);
  }
  return (
    <div style={{ padding: "2rem" }}>
      <main>
        <MovieSearch
          search={search}
          setSearch={setSearch}
          fetchMovie={fetchMovie}
        ></MovieSearch>
        <MovieDisplay movies={movies}></MovieDisplay>
      </main>
    </div>
  );
}

export default App;
