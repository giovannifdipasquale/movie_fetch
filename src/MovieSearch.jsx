import { useState, useEffect } from "react";
function MovieSearch({ search, setSearch, fetchMovie }) {
  const searchMovie = (e) => {
    e.preventDefault();
    fetchMovie();
  };
  return (
    <section>
      <form>
        <fieldset>
          <input
            type="search"
            name="search"
            value={search}
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
          />
        </fieldset>

        <input type="submit" value="Search" onClick={searchMovie} />
      </form>
    </section>
  );
}

export default MovieSearch;
