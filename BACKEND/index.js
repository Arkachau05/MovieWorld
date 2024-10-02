import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import {nanoid} from "nanoid"
import dotenv from "dotenv";
import QRCode from 'qrcode';

import cookieParser from "cookie-parser"
import authRoutes from "./routes/auth.Routes.js"





dotenv.config();


const app=express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());

//connecting to database
mongoose.connect(process.env.DATABASE_URL)
.then(()=>console.log("DataBase Connected Successfully"))
.catch((err)=>console.log("error",err))

const urlSchema=new mongoose.Schema({
    originalUrl:String,
    shortUrl:String,
    clicks:{type:Number,default:0},
});

const Url=mongoose.model("url",urlSchema)


app.use("/api/auth",authRoutes)

app.post("/api/short",async(req,res)=>{
    try {
        const {originalUrl}=req.body;

        if(!originalUrl){
            return res.status(400).json({error:'original Url required'})
        }
        const shortUrl= nanoid(8)
        const url=new Url({originalUrl,shortUrl})
        const myUrl=`http://localhost:3000/${shortUrl}`;
        
        const qrCodeImg=await QRCode.toDataURL(myUrl);

        await url.save();
       return res.status(200).json({message:"URL Generated",shortUrl:myUrl,qrCodeImg})
    } catch (error) {
        console.log(error)
        res.status(500).json({error:'server Error'});
    }
})





app.get('/:shortUrl',async(req,res)=>{
    try {
        const {shortUrl}=req.params;
        const url=await Url.findOne({shortUrl})
       // console.log("url found",url);
       if(url){
        url.clicks++;
        await url.save();
        return res.redirect(url.originalUrl);
       }
       else{
        return res.status(404).json({error:"URl not found"});
       }
    } catch (error) {
        console.log(error)
        res.status(500).json({error:'server Error'});
    }
})




const PORT=process.env.PORT;
//server start
app.listen(PORT,()=>console.log(`Server is Running on ${PORT}`))