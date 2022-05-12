import React from 'react';
import PropTypes from "prop-types";
import axios from 'axios';
import Movie from '../components/Movie';
import Film from '../components/Film';
import './Home.css';



class Home extends React.Component {

  state = {
    isLoading: true,
    movies: [],
    films: [],
    message: ''
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating');
    this.setState({ movies, isLoading: false });

  };

  getMoviesV2 = async () => {
    const {
      data: { docs }
    } = await axios.get('https://api.kinopoisk.dev/movie?field=year&search=2018-2022&field=typeNumber&search=2&field=rating.kp&search=8-10&page=1&token=83R57P2-T0YMWM5-K6PW1FJ-DVYYCER').catch(err => {
        this.setState({message: err.response.data.ruMessage, isLoading: true });
    });
    this.setState({ films: docs, isLoading: false });
  };

  componentDidMount() {
    this.getMovies();
    this.getMoviesV2();
  };

  render() {
    const { isLoading, movies, films, message } = this.state;
    /* return (
       <section className="container">
         {isLoading ? (
           <div className="loader">
             <span className="loader__text">Загрузка...</span>
           </div>
         ) : (
           <div className="movies">
             {movies.map((movie) => (
               <Movie
                 key={movie.id}
                 id={movie.id}
                 year={movie.year}
                 title={movie.title}
                 summary={movie.summary}
                 poster={movie.medium_cover_image}
                 genres={movie.genres}
               />
             ))}
           </div>
         )}
       </section>
     ); */
    return (
      <section className="container">
        
        {
        isLoading ? (
          <div className="loader">
            <span className="loader__text">Загрузка...</span>
          </div>
        ) : (
          <div className="wrapper">
            <span>{message.slice(0, 72)}</span>
          <div className="movies">
            {films.map((film) => (
              <Film
                key={film.id}
                id={film.id}
                year={film.year}
                name={film.name}
                poster={film.poster.url}
                description={film.description}
              />
            ))}
          </div>
          </div>
        )}
      </section>
    );
  }
}

export default Home;
