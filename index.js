const express = require('express');
const app = express();
const Movie = require('./Movie');
const axios = require('axios');
const bodyParser = require('body-parser');
const apikey = '385e80';

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/getmovie', (req, res) => {
  const title = req.query.title;
  const querystr = `http://www.omdbapi.com/?t=${title}&apikey=${apikey}`;

  axios
    .get(querystr)
    .then(response => {
      //Store in database
      const movie = new Movie({
        title: response.data.Title,
        year: response.data.Year,
        genre: response.data.Genre,
        actors: response.data.Actors,
        plot: response.data.Plot,
        poster: response.data.Poster
      });

      //No Data return from third party
      if (!movie.title) {
        res.status(200).json('Not found');
        return;
      }

      //Save data into mongoDb
      movie
        .save()
        .then(response => {
          res.status(200).json(response);
        })
        .catch(error => {
          res.status(400).json(error);
        });
    })
    .catch(error => {
      res.status(400).json(error);
    });
});

app.listen(5000, () => {
  console.log('server listening on port 5000');
});
