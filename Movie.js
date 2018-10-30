const mongoose = require('mongoose');

const db = 'mongodb://nodemcu1:nodemcu1@ds141043.mlab.com:41043/movie-api';

mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log('mongoose connected to mongodb');
  })
  .catch(error => {
    console.log('mongoose connection error: ', error);
  });

const movieSchema = new mongoose.Schema({
  title: {
    type: String
  },
  year: {
    type: String
  },
  genre: {
    type: String
  },
  actors: {
    type: String
  },
  plot: {
    type: String
  },
  poster: {
    type: String
  }
});

const Movie = mongoose.model('Movie', movieSchema, 'movieCollection');

module.exports = Movie;
