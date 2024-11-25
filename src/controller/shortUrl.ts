import { Request, Response, NextFunction } from "express";
import { nanoid } from "nanoid"; 
import { URLModel } from "../models/urlModel";


export const shortURL:any = async (req: Request, res: Response, next: NextFunction) => {
  const { longurl } = req.body;

  if (!longurl) {
    return res.status(400).json({ message: "URL is required" });
  }

  const shortId = nanoid(8);
  const shortUrl = `https://WWW.ly/${shortId}`;

  try {
    const newUrl = new URLModel({
      longUrl: longurl,
      shortUrl: shortUrl,
      shortId: shortId,
    });
    await newUrl.save();


    res.status(200).json({ shortUrl });
  } catch (error) {
    console.error("Error shortening URL:", error);
    next(error);
  }
};
