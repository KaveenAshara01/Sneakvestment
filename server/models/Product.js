import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    brand: { type: String, required: true },
    price: { type: Number, required: true }, // Wholesale unit price
    minOrder: { type: Number, default: 10 },
    images: [{ type: String }], // Cloudinary URLs
    description: { type: String },
    category: { type: String, default: 'Sneakers' },
    type: { type: String, enum: ['bulk', 'single'], default: 'bulk' },
    inStock: { type: Boolean, default: true },
    options: [{
        label: { type: String }, // e.g., "x25"
        price: { type: Number }  // e.g., 500
    }]
}, { timestamps: true });

export default mongoose.model('Product', ProductSchema);
