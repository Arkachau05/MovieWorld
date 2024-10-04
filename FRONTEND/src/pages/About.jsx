import React from 'react'
import Navbar from '../navbar'
import Footer from '../Footer'

const About = () => {
  return (
    <div>
        <Navbar/>
        <div className="bg-black text-white min-h-screen p-6 flex items-center">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-yellow-400 text-center mb-6">About Us</h1>

                <section className="mb-8 bg-gray-900 p-6 rounded-lg">
                    <h2 className="text-3xl font-semibold text-yellow-300 text-center">Our Mission</h2>
                    <p className="mt-4 text-lg text-gray-300 text-center">
                        At MovieWorld, our mission is to connect movie lovers with their favorite films and provide a platform for discovering new cinematic experiences. We aim to foster a community of passionate movie enthusiasts.
                    </p>
                </section>

                <section className="mb-8 bg-gray-900 p-6 rounded-lg">
                    <h2 className="text-3xl font-semibold text-yellow-300 text-center">Our History</h2>
                    <p className="mt-4 text-lg text-gray-300 text-center">
                        Founded in 2024, MovieWorld started as a small project aimed at simplifying movie discovery. Over the years, we have grown into a comprehensive platform featuring movie reviews, ratings, and a personalized favorites system.
                    </p>
                </section>

                <section className="mb-8 bg-gray-900 p-6 rounded-lg">
                    <h2 className="text-3xl font-semibold text-yellow-300 text-center">Features</h2>
                    <ul className="mt-4 text-lg text-gray-300 list-disc list-inside">
                        <li>✔ Comprehensive movie database with detailed information.</li>
                        <li>✔ User-friendly interface for easy navigation.</li>
                        <li>✔ Personalized favorites list to keep track of movies.</li>
                        <li>✔ Advanced search features to find movies quickly.</li>
                        <li>✔ Regular updates with the latest movie releases.</li>
                    </ul>
                </section>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default About
