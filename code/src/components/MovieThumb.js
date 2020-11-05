import React from 'react';
import { Link } from 'react-router-dom';

const MovieThumb = ({ id, poster_path, name, title, release_date }) => {
  return (
    <article className="movie-thumb">
      <Link className="movie-thumb__link" to={`/movies/${id}`}>
        {/* <picture className="article__image">
          <source
            media="(min-width:1024px)"
            srcSet={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          />
          <source
            media="(min-width:768px)"
            srcSet={`https://image.tmdb.org/t/p/w342/${poster_path}`}
          />
          <img
            src={`https://image.tmdb.org/t/p/w154/${poster_path}`}
            alt={name}
            style="width:auto;"
          />
        </picture> */}
        <img
          className="movie-thumb__image"
          src={`https://image.tmdb.org/t/p/w342/${poster_path}`}
          alt={name}
        />
        <div className="movie-thumb__overlay">
          <h2 className="movie-thumb__title">{title}</h2>
          <p>{`Released ${release_date}`}</p>
        </div>
      </Link>
    </article>
  );
};
export default MovieThumb;
