import mongoose, { Schema, models, model } from "mongoose";

const WorkSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    imageUrl: { type: String, required: true },   // Cloudinary URL
    imagePublicId: { type: String, required: true }, // Cloudinary public_id, needed to delete images later
    category: { type: Schema.Types.ObjectId, ref: "Category", required: true },
  },
  { timestamps: true }
);

export default models.Work || model("Work", WorkSchema);