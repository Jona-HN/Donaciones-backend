const express = require('express');
const multer = require('multer');
const router = express.Router();
const controller = require('../controller/archivosController');

// Middleware para manejar archivos multipartes (imágenes)
const storage = multer.diskStorage({
    destination: './public/uploads',
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
  
const upload = multer({ storage: storage });

router.post('/imagen', upload.single('file-input-1'), controller.procesarImagen);

module.exports = router;