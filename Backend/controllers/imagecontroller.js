const upload = require('../middlewares/upload');
const port = process.env.PORT || 5000;

exports.uploadImage = (req, res) => {
    upload.single('image')(req, res, (err) => {
        if (err) {
            return res.status(400).json({ message: err });
        }
        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }
        // Success: return file path
        res.status(200).json({
            message: 'Image uploaded successfully',
            image_url: `http://localhost:${port}/images/${req.file.filename}`
        });
    });
};
