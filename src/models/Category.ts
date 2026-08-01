import mongoose, { Schema, models, model } from "mongoose";

const CategorySchema = new Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    description: { type: String },
    thumbnail: { type: Schema.Types.ObjectId, ref: "Work", default: null },
  },
  { timestamps: true }
);

export default models.Category || model("Category", CategorySchema);