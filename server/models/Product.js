import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    brand: { type: String, required: true },
    price: { type: Number, required: true }, // Wholesale unit price
    minOrder: { type: Number, default: 10 },
    images: [{ type: String }], // Cloudinary URLs
    description: { type: String },
    inStock: { type: Boolean, default: true }
}, { timestamps: true });

export default mongoose.model('Product', ProductSchema);
