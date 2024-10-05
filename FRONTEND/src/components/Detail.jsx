import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../navbar';
import Footer from '../Footer';
import RatingComment from '../RatingComment';
import Loader from '../Loader'; // Import the Loader component

const Detail = () => {
    const { imdbID } = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getDetails = async () => {
        const url = `https://www.omdbapi.com/?i=${imdbID}&apikey=263d22d8`;
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error('Network response was not ok');
            const responseJson = await response.json();
            if (responseJson.Response === "True") {
                setMovie(responseJson);
            } else {
                setError(responseJson.Error);
            }
        } catch (error) {
            setError('Failed to fetch movie details. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getDetails();
        window.scrollTo(0, 0);
    }, [imdbID]);

    if (loading) return <Loader />; // Use the Loader component
    if (error) return <div className="text-red-500 text-center">{error}</div>;
    if (!movie) return null;

    const { 
        Poster, Title, imdbRating, imdbVotes, Year, 
        Country, Genre, Director, Writer, Actors, Runtime, 
        DVD, BoxOffice, Plot, Awards 
    } = movie;

    return (
        <>
            <Navbar />
            <div className="bg-black text-white p-10 shadow-lg hover:shadow-xl transition-shadow duration-300 w-full flex flex-col md:flex-row items-start gap-10 relative">
                {/* Movie Poster */}
                <div className="w-full md:w-1/2 lg:w-1/3">
                    <img 
                        src={Poster} 
                        alt={`${Title} Poster`} 
                        className="w-full h-auto object-cover shadow-md" 
                    />
                </div>

                {/* Movie Details */}
                <div className="flex-1 flex flex-col justify-between">
                    {/* Header with Title and Bookmark */}
                    <div className="flex justify-between items-start">
                        <h1 className="text-5xl font-bold text-yellow-400 tracking-wide">
                            {Title}
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
                            <span className="text-3xl font-bold">{imdbRating || 'N/A'}</span>
                            <span className="text-sm ml-2">/ 10</span>
                        </div>
                        <div className="mt-1 flex justify-between text-gray-400">
                            <span>Votes:</span>
                            <span>{imdbVotes || 'N/A'}</span>
                        </div>
                    </div>

                    {/* Movie Info */}
                    <div className="mt-4 text-lg text-gray-400 flex items-center space-x-6">
                        <span>{Year || 'N/A'}</span>
                        <span>&#x2022; {Country || 'N/A'}</span>
                        <span>&#x2022; {Genre || 'N/A'}</span>
                    </div>

                    {/* Movie Details Grid */}
                    <div className="grid grid-cols-2 gap-6 mt-6 text-base">
                        <div>
                            <p className="text-yellow-400 font-semibold">Director</p>
                            <p>{Director || 'N/A'}</p>
                        </div>
                        <div>
                            <p className="text-yellow-400 font-semibold">Writers</p>
                            <p>{Writer || 'N/A'}</p>
                        </div>
                        <div>
                            <p className="text-yellow-400 font-semibold">Actors</p>
                            <p>{Actors || 'N/A'}</p>
                        </div>
                        <div>
                            <p className="text-yellow-400 font-semibold">Runtime</p>
                            <p>{Runtime || 'N/A'}</p>
                        </div>
                        <div>
                            <p className="text-yellow-400 font-semibold">Release Date</p>
                            <p>{DVD || 'N/A'}</p>
                        </div>
                        <div>
                            <p className="text-yellow-400 font-semibold">Box Office</p>
                            <p>{BoxOffice || 'N/A'}</p>
                        </div>
                    </div>

                    {/* Movie Plot */}
                    <p className="text-gray-300 text-lg mt-8 leading-relaxed">{Plot || 'No plot available.'}</p>

                    {/* Awards */}
                    {Awards && (
                        <div className="mt-6 flex items-center text-yellow-400">
                            <i className="fa-solid fa-award mr-2"></i>
                            <span className="font-semibold">{Awards}</span>
                        </div>
                    )}
                </div>
            </div>
            <RatingComment />
            <Footer />
        </>
    );
};

export default Detail;
