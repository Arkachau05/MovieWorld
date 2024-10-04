import React, { useState, useEffect } from 'react';
import RemoveFavourites from './components/RemoveFavourites';
import AddFavourite from './components/AddFovourites';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';

const Huh0 = () => {
	const [movies, setMovies] = useState([]);
	const [favourites, setFavourites] = useState([]);
	const [searchValue, setSearchValue] = useState('');

	// Fetch movies based on search input
	const getMovieRequest = async (searchValue) => {
		const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`;

		const response = await fetch(url);
		const responseJson = await response.json();

		// Check if the response contains movies
		if (responseJson.Search) {
			setMovies(responseJson.Search);
		} else {
			setMovies([]); // Clear movie list if no results found
		}
	};

	// Call the movie API whenever search value changes
	useEffect(() => {
		if (searchValue) {
			getMovieRequest(searchValue);
		}
	}, [searchValue]);

	// Load favourites from local storage
	useEffect(() => {
		const movieFavourites = JSON.parse(
			localStorage.getItem('react-movie-app-favourites')
		);

		if (movieFavourites) {
			setFavourites(movieFavourites);
		}
	}, []);

	// Save favourites to local storage
	const saveToLocalStorage = (items) => {
		localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
	};

	// Add movie to favourites
	const addFavouriteMovie = (movie) => {
		const newFavouriteList = [...favourites, movie];
		setFavourites(newFavouriteList);
		saveToLocalStorage(newFavouriteList);
	};

	// Remove movie from favourites
	const removeFavouriteMovie = (movie) => {
		const newFavouriteList = favourites.filter(
			(favourite) => favourite.imdbID !== movie.imdbID
		);

		setFavourites(newFavouriteList);
		saveToLocalStorage(newFavouriteList);
	};

	return (
		<div className='bg-black p-6 flex flex-col'>
			{/* Search and Movies Section */}
			<div>
				<MovieListHeading heading='Movies' />
				<div className='flex items-center justify-center'>
					<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
				</div>
			</div>
			<div className='mt-6'>
				<MovieList
					movies={movies}
					handleFavouritesClick={addFavouriteMovie}
					favouriteComponent={AddFavourite}
				/>
			</div>

			{/* Favourites Section */}
			<div className='flex justify-between items-center mb-8 sticky top-0 bg-black z-10 border-b border-yellow-400'>
				<h1 className="text-3xl text-yellow-400 font-bold py-2">Favourites ⭐</h1>
			</div>

			{/* Favourites Movies */}
			<div>
				<h1 className='text-yellow-300 text-center mb-4'>
					“In every film, there’s a line that resonates with our hearts, capturing the essence of our dreams, fears, and triumphs.”
				</h1>
				<MovieList
					movies={favourites}
					handleFavouritesClick={removeFavouriteMovie}
					favouriteComponent={RemoveFavourites}
				/>
			</div>
		</div>
	);
};

export default Huh0;
