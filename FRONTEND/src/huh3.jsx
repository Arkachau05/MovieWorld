import React, { useState, useEffect } from 'react';

import AddFavourite from './components/AddFovourites';

import ShowMovie from './components/ShowMovie';

const Huh3 = () => {
	const [movies, setMovies] = useState([]);
	const [favourites, setFavourites] = useState([]);
	const [searchValue, setSearchValue] = useState('');

	const getMovieRequest = async () => {
		const url = "http://www.omdbapi.com/?s=Avengers&page=1&apikey=263d22d8";

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};

	

	useEffect(() => {
		getMovieRequest(searchValue);
	}, [searchValue]);

	useEffect(() => {
		const movieFavourites = JSON.parse(
			localStorage.getItem('react-movie-app-favourites')
		);

		if (movieFavourites) {
			setFavourites(movieFavourites);
		}
	}, []);

	const saveToLocalStorage = (items) => {
		localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
	};

	const addFavouriteMovie = (movie) => {
		const newFavouriteList = [...favourites, movie];
		setFavourites(newFavouriteList);
		saveToLocalStorage(newFavouriteList);
	};

	const removeFavouriteMovie = (movie) => {
		const newFavouriteList = favourites.filter(
			(favourite) => favourite.imdbID !== movie.imdbID
		);

		setFavourites(newFavouriteList);
		saveToLocalStorage(newFavouriteList);
	};

	return (
		<div className='p-6 bg-black min-h-screen flex flex-col'>
<div className='flex justify-between items-center mb-8 sticky top-0 bg-black z-10 border-b border-yellow-400'>
<h1 className="text-3xl text-yellow-400 font-bold py-2"> Recent Popular 🔥</h1>
</div>
<h1 className='text-yellow-300 text-center mb-4'>
				"In a world of endless possibilities, sometimes the greatest adventure is finding your true self."
			</h1>
			<div className='row'>
				<ShowMovie
					movies={movies}
					handleFavouritesClick={addFavouriteMovie}
					favouriteComponent={AddFavourite}
				/>
			</div>
		</div>
	);
};

export default Huh3