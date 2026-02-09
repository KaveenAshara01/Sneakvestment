import express from 'express';
import Inquiry from '../models/Inquiry.js';

const router = express.Router();

// CREATE INQUIRY
router.post('/', async (req, res) => {
    const newInquiry = new Inquiry(req.body);
    try {
        const savedInquiry = await newInquiry.save();
        res.status(200).json(savedInquiry);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET ALL INQUIRIES (Admin)
router.get('/', async (req, res) => {
    try {
        const inquiries = await Inquiry.find();
        res.status(200).json(inquiries);
    } catch (err) {
        res.status(500).json(err);
    }
});

export default router;
