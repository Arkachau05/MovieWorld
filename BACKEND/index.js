import path from "path"
import express from "express";
import mongoose from "mongoose";
import cors from 'cors';

import dotenv from "dotenv";


import cookieParser from "cookie-parser"
import authRoutes from "./routes/auth.routes.js"





dotenv.config();


const app=express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());

//connecting to database
mongoose.connect(process.env.DATABASE_URL)
.then(()=>console.log("DataBase Connected Successfully"))
.catch((err)=>console.log("error",err))


app.use("/api/auth",authRoutes)

const reviewSchema = new mongoose.Schema({
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    name: { type: String, required: true },
  });
  
  const Review = mongoose.model('Review', reviewSchema);
  
  // API Routes
  
  // POST Route to Submit a Review
  app.post('/api/reviews', async (req, res) => {
    try {
      const newReview = new Review(req.body);
      await newReview.save();
      res.status(201).json({ message: 'Review added successfully!' });
    } catch (err) {
      res.status(500).json({ error: 'Failed to add review' });
    }
  });
  
  // GET Route to Fetch All Reviews
  app.get('/api/reviews', async (req, res) => {
    try {
      const reviews = await Review.find();
      res.status(200).json(reviews);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch reviews' });
    }
  });





const PORT=process.env.PORT;
//server start
app.listen(PORT,()=>console.log(`Server is Running on ${PORT}`))