import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Showmovie = (props) => {
	const FavouriteComponent = props.favouriteComponent;
    const [selectedImdbID, setSelectedImdbID] = useState(null); // State to store selected imdbID
	const navigate = useNavigate(); // Hook for navigation

    // Function to handle displaying imdbID
    const handleImdbIDDisplay = (movie) => {
        setSelectedImdbID(movie.imdbID);
        navigate(`/movie/${movie.imdbID}`); // Navigate to the new page with imdbID
    };
	return (
		<div className='p-6 bg-black min-h-screen'>
			<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6'>
				{props.movies.map((movie, index) => (
					<div 
						key={index} 
						className='bg-gray-900 rounded-lg overflow-hidden shadow-md transform hover:scale-105 transition-transform duration-300 hover:shadow-yellow-500'
						
						
					>
						<img src={movie.Poster} alt='movie' className="w-full h-56 object-cover transition-transform duration-300"						onClick={() => {
							// Log imdbID
						   handleImdbIDDisplay(movie);
					   }} />
						
						<div className="p-3">
							<h3 className="text-lg font-bold text-yellow-400 truncate">{movie.Title}</h3>
							<p className="text-gray-400 text-sm">{movie.Year}</p>
						</div>
						
						<div
							onClick={() => props.handleFavouritesClick(movie)}
							className='flex items-center justify-center p-2 bg-yellow-500 hover:bg-yellow-400 transition-colors duration-200 cursor-pointer'
						>
							<FavouriteComponent />
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Showmovie;
