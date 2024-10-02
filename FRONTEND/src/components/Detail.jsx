// MovieDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../navbar';
import Footer from '../Footer';

const Detail = () => {
    const { imdbID } = useParams();
    const [movies, setMovies] = useState([]);
	const [Value, setValue] = useState('');
		
    const getDetails = async () => {
		const url = `http://www.omdbapi.com/?i=${imdbID}&apikey=263d22d8`;

		const response = await fetch(url);
		const responseJson = await response.json();
		if (responseJson) {
			setMovies(responseJson);
		}
        console.log(responseJson.Ratings[1].Source)
	};
	useEffect(() => {
		getDetails(Value);
	}, [Value]);

    return (
        <>
        <Navbar/>
        <div className="bg-black  text-white p-10 shadow-lg hover:shadow-xl transition-shadow duration-300 w-full flex flex-col md:flex-row items-start gap-10 relative">
    {/* Movie Poster */}
    <div className="w-full md:w-1/2 lg:w-1/3">
        <img 
            src={movies.Poster} 
            alt={`${movies.Title} Poster`} 
            className="w-full h-auto object-cover shadow-md" 
        />
    </div>

    {/* Movie Details */}
    <div className="flex-1 flex flex-col justify-between">
        {/* Header with Title and Bookmark */}
        <div className="flex justify-between items-start">
            <h1 className="text-5xl font-bold text-yellow-400 tracking-wide">
                {movies.Title}
            </h1>
            <i 
                className="fa-solid fa-bookmark text-4xl text-yellow-400 hover:text-yellow-300 cursor-pointer transition duration-200"
                role="button"
                aria-label="Bookmark this movie"
                onClick={() => {/* Add bookmark functionality */}}
            ></i>
        </div>

        {/* Ratings Section */}
        <div className="mt-4 text-lg text-yellow-500">
            <h2 className="font-bold">IMDb Rating</h2>
            <div className="flex items-center">
                <span className="text-3xl font-bold">{movies.imdbRating || 'N/A'}</span>
                <span className="text-sm ml-2">/ 10</span>
            </div>
            <div className="mt-1 flex justify-between text-gray-400">
                <span>Votes:</span>
                <span>{movies.imdbVotes || 'N/A'}</span>
            </div>
        </div>

        {/* Movie Info */}
        <div className="mt-4 text-lg text-gray-400 flex items-center space-x-6">
            <span>{movies.Year || 'N/A'}</span>
            <span>&#x2022; {movies.Country || 'N/A'}</span>
            <span>&#x2022; {movies.Genre || 'N/A'}</span>
        </div>

        {/* Movie Details Grid */}
        <div className="grid grid-cols-2 gap-6 mt-6 text-base">
            <div>
                <p className="text-yellow-400 font-semibold">Director</p>
                <p>{movies.Director || 'N/A'}</p>
            </div>
            <div>
                <p className="text-yellow-400 font-semibold">Writers</p>
                <p>{movies.Writer || 'N/A'}</p>
            </div>
            <div>
                <p className="text-yellow-400 font-semibold">Actors</p>
                <p>{movies.Actors || 'N/A'}</p>
            </div>
            <div>
                <p className="text-yellow-400 font-semibold">Runtime</p>
                <p>{movies.Runtime || 'N/A'}</p>
            </div>
            <div>
                <p className="text-yellow-400 font-semibold">Release Date</p>
                <p>{movies.DVD || 'N/A'}</p>
            </div>
            <div>
                <p className="text-yellow-400 font-semibold">Box Office</p>
                <p>{movies.BoxOffice || 'N/A'}</p>
            </div>
        </div>

        {/* Movie Plot */}
        <p className="text-gray-300 text-lg mt-8 leading-relaxed">{movies.Plot || 'No plot available.'}</p>

        {/* Awards */}
        {movies.Awards && (
            <div className="mt-6 flex items-center text-yellow-400">
                <i className="fa-solid fa-award mr-2"></i>
                <span className="font-semibold">{movies.Awards}</span>
            </div>
        )}
    </div>
</div>



<Footer/>
    </>
    );
};

export default Detail;
