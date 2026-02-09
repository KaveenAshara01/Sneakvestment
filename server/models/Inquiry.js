import mongoose from 'mongoose';

const InquirySchema = new mongoose.Schema({
    name: { type: String, required: true },
    businessName: { type: String },
    email: { type: String, required: true },
    phone: { type: String },
    message: { type: String },
    productInterest: { type: String },
    quantity: { type: Number },
    status: { type: String, default: 'Pending' } // Pending, Contacted, Completed
}, { timestamps: true });

export default mongoose.model('Inquiry', InquirySchema);
