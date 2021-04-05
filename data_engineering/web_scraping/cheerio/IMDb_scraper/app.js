const express = require('express');
const cors = require('cors');
const { searchMovies, searchMovieById } = require('./scraper');
const connectDB = require('./config');
const Movie = require('./models/Movie');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Connect to the DB
connectDB();

// Get the top movies on IMDB - home route
app.get('/', (req, res) => {
  res.send('hello');
});

// Search for a movie - performs a scrape on the request if the requested term movies does not already exist in the db
app.post('/movies', async (req, res) => {
  const { term } = req.body;
  const movies = await Movie.find({ title: { $regex: term, $options: 'i' } });
  movies.length > 0
    ? res.status(200).json(movies)
    : res.status(200).json(await searchMovies(term));
});

// Get movie by its ID
app.get('/movies/:id', async (req, res) => {
  const { id } = req.params;
  // const movieInformation = await searchMovieById(id);
  res.status(200).json(await Movie.findById(id));
});

const PORT = process.env.PORT || 4040;

app.listen(PORT, console.log(`Server listening on port: ${PORT}`));
