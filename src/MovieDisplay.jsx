function MovieDisplay({ movies }) {
  return (
    <>
      <main className="container">
        <h1> MovieDisplay </h1>
        <div className="showMovies" style={{ margin: "2rem" }}>
          <ul>
            {movies &&
              movies.map((movie) => {
                return (
                  <p key={movie.imdbID}>
                    {" "}
                    <span> title: {movie.Title} | </span>
                    <span> year : {movie.Year} </span>{" "}
                    <img src="{movie.Poster}" alt="" />
                  </p>
                );
              })}
          </ul>
        </div>
      </main>
    </>
  );
}

export default MovieDisplay;
