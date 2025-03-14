import express from "express";
import { urlModel } from "../model/shortUrl";

export const createUrl = async (
  req: express.Request,
  res: express.Response
) => {
    try {
        console.log("This fullUrl is: ", req.body.fullUrl);
        const {fullUrl} = req.body;
        const urlFound = await urlModel.find({fullUrl})
        if(urlFound.length > 0){
            res.status(409)
            res.send(urlFound)
        }else{
            const shortUrl = await urlModel.create({fullUrl})
            res.status(201)
            res.send(shortUrl)
        }
    
    } catch (error) {
        res.status(500).send({"message": "Internal Server Error"})
    }
};

export const getAllUrl = async (
    req: express.Request,
    res: express.Response
) => {
    try {
        const shortUrls = await urlModel.find()
        if(shortUrls.length < 0){
            res.status(404)
            res.send({"message": "shortUrls not found"})
        }else{
            res.status(200)
            res.send(shortUrls)
        }
        
    } catch (error) {
        res.status(500).send({"message": "Internal Server Error"})
    }
 };
  
export const getUrl = async (
    req: express.Request,
    res: express.Response
) => {};
  
export const deleteUrl = async (
    req: express.Request,
    res: express.Response
) => {};  
  
