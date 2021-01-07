const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.listOfTitles = function() {
  const titles = this.films.map(function(movie){
    return movie.title
  })
  return titles
}
 


module.exports = Cinema;
