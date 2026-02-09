import express from 'express';
import { parser } from '../config/cloudinary.js';

const router = express.Router();

// Upload Image
// Post file to /api/upload
router.post('/', parser.single('image'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded' });
    }
    // Cloudinary returns file information in req.file
    res.status(200).json({
        url: req.file.path,
        public_id: req.file.filename
    });
});

export default router;
