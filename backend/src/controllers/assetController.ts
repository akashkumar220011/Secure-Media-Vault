import { Request, Response } from "express";
import Asset from "../models/Asset";

export const uploadAsset = async (req: Request, res: Response)=>{
    try {
        const file = req.file!;
        const userId = req.userId;

        const asset = await Asset.create({
            userId,
            name: file.originalname,
            path: file.path,
            size: file.size,
            mimeType: file.mimetype

        });
        res.json(asset);
    } catch (err) {
        res.status(500).json({ message:"Upload failed"});
    }
};

export const getMyAssets = async (req: Request, res: Response) => {
  const userId = req.userId;
  const assets = await Asset.find({ userId });
  res.json(assets);
};