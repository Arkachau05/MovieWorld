import React from 'react'
import Navbar from '../navbar'
import Footer from '../Footer'

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <div className="min-h-screen flex flex-col bg-black text-white">
      {/* Header */}
      <header className="py-8 border-b border-yellow-400 text-center">
        <h1 className="text-5xl font-bold text-yellow-400 drop-shadow-lg">Contact Us</h1>
        <p className="text-yellow-300 mt-2 text-lg italic">We'd love to hear from you!</p>
        <div className="mt-4">
          <hr className="w-1/4 mx-auto border-t-2 border-yellow-400" />
        </div>
      </header>

      {/* Contact Form Section */}
      <main className="flex flex-col items-center justify-center flex-1  py-28">
        <form className="w-full max-w-lg bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block text-yellow-400 font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-2 border border-yellow-400 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-black" 
              required
              placeholder='Your Name'
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-yellow-400 font-bold mb-2 ">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-yellow-400 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-black"
              required
              placeholder='Your Email'
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-yellow-400 font-bold mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              className="bg-black w-full p-2 border border-yellow-400 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
              placeholder='Write a message for us'
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-400 text-black font-bold py-2 rounded hover:bg-yellow-300 transition duration-200"
          >
            Send Message
          </button>
        </form>
      </main>

    </div>
    <Footer/>
    </div>
  )
}

export default Contact
