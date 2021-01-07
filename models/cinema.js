const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.listOfTitles = function() {
  const titles = this.films.filter(function(title){
    return title
});

//const evens = ints, .filter(function(item){
  //return item % 2 === 0;

module.exports = Cinema;
