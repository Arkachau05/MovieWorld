import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios for API requests
import { FaStar } from 'react-icons/fa';

const RatingComment = () => {
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
    const [name, setName] = useState('');
    const [reviews, setReviews] = useState([]);
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        // Fetch all reviews when the component mounts
        axios.get('https://movieworld-1.onrender.com/api/reviews')
            .then((response) => {
                setReviews(response.data);
            })
            .catch((error) => {
                console.error('Failed to fetch reviews:', error);
            });
    }, []);

    const handleRatingChange = (value) => {
        setRating(value);
    };

    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newReview = { rating, comment, name };

        // Send the new review to the backend
        axios.post('https://movieworld-1.onrender.com/api/reviews', newReview)
            .then((response) => {
                setReviews([...reviews, newReview]);
                setComment('');
                setName('');
                setRating(0);
                setSubmitted(true);
                
                setTimeout(() => {
                    setSubmitted(false);
                }, 3000);
            })
            .catch((error) => {
                console.error('Failed to submit review:', error);
            });
    };

    const averageRating = reviews.length 
        ? (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1) 
        : 0;

    return (
        <div className=" bg-black flex justify-center items-center p-4">
            <div className="bg-gray-900 text-yellow-300 p-6 rounded-lg shadow-lg border border-yellow-400 w-full max-w-sm">
                
                <div className="text-center mb-5">
                    <h3 className="text-2xl font-extrabold text-yellow-400">Average Rating: {averageRating} ★</h3>
                    <h4 className="text-lg font-semibold text-gray-300">{reviews.length} Reviews</h4>
                </div>

                <div className="flex justify-center mb-5">
                    {[1, 2, 3, 4, 5].map((value) => (
                        <FaStar
                            key={value}
                            onClick={() => handleRatingChange(value)}
                            className={`cursor-pointer text-4xl transition-transform duration-300 hover:scale-125 ${
                                value <= rating ? 'text-yellow-400' : 'text-gray-600'
                            }`}
                            aria-label={`Rate ${value} stars`}
                        />
                    ))}
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                    <input
                        type="text"
                        value={name}
                        onChange={handleNameChange}
                        placeholder="Your name..."
                        className="bg-gray-800 border border-yellow-400 text-yellow-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 text-lg"
                    />
                    <textarea
                        value={comment}
                        onChange={handleCommentChange}
                        placeholder="Leave your comment..."
                        className="w-full h-24 bg-gray-800 border border-yellow-400 text-yellow-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 text-lg resize-none"
                    />
                    <button
                        type="submit"
                        className={`w-full bg-yellow-400 text-black font-bold py-2 rounded-md transition-transform duration-300 hover:bg-yellow-500 hover:scale-105 text-lg ${
                            rating === 0 || comment.trim() === '' || name.trim() === '' ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                        disabled={rating === 0 || comment.trim() === '' || name.trim() === ''}
                    >
                        Submit
                    </button>
                </form>

                {submitted && (
                    <div className="mt-3 text-green-400 text-center text-sm">
                        Thank you for your feedback!
                    </div>
                )}

                <div className="mt-6">
                    <h3 className="text-xl font-bold text-yellow-400 border-b border-yellow-400 pb-2">Previous Reviews</h3>
                    <div className="mt-4 space-y-3">
                        {reviews.length === 0 ? (
                            <p className="text-gray-400 text-sm">No reviews yet.</p>
                        ) : (
                            reviews.map((review, index) => (
                                <div key={index} className="border-b border-gray-600 pb-3">
                                    <div className="flex items-center">
                                        <span className="text-yellow-400 text-lg">{'★'.repeat(review.rating)}</span>
                                        <span className="text-gray-400 ml-2 text-md"> - {review.comment} <strong>({review.name})</strong></span>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RatingComment;
