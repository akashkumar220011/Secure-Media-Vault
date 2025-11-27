import mongoose from "mongoose";

const assetSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  name: String,
  path: String,
  size: Number,
  mimeType: String,
  uploadedAt: { type: Date, default: Date.now }
});

export default mongoose.model("Asset", assetSchema);
