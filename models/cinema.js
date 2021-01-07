const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.listOfTitles = function() {
  const titles = this.films.map(function(movie){
    return movie.title
  })
  return titles
}

Cinema.prototype.findFilm = function(filmTitle) {
  const findFilm = this.films.filter(function(film) {
    return film.title === filmTitle
  })
  return findFilm
}

Cinema.prototype.findFilmByGenre = function(filmGenre) {
  const findFilmByGenre = this.films.filter(function(film) {
    return film.genre === filmGenre
  })
  return findFilmByGenre
}

Cinema.prototype.findFilmByYear = function(filmYear) {
  const findFilmByYear = this.films.filter(function(film) {
    return film.year === filmYear
  })
  return findFilmByYear
}

module.exports = Cinema;
