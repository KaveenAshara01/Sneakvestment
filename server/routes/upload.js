import express from 'express';
import { parser } from '../config/cloudinary.js';

const router = express.Router();

// Upload Multiple Images
// Post files to /api/upload
router.post('/', parser.array('images', 10), (req, res) => {
    if (!req.files || req.files.length === 0) {
        return res.status(400).json({ message: 'No files uploaded' });
    }
    // Cloudinary returns file information in req.files
    const imageUrls = req.files.map(file => file.path);
    res.status(200).json({
        urls: imageUrls,
        message: 'Images uploaded successfully'
    });
});

export default router;
