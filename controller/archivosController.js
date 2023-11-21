const { spawn } = require('child_process');

const procesarImagen = async function(req, res) {
    const imageName = req.file.filename;
    let result;

    const pythonProcess = spawn('python3', ['./scripts/deteccion.py', imageName]);

    pythonProcess.stdout.on('data', (data) => {
        console.log(`Python script output: ${data}`);
        result = 'Imagen enviada y procesada con éxito.';
    });

    pythonProcess.stderr.on('data', (data) => {
        console.error(`Error from Python script: ${data}`);
        result = 'Error';
    });

    res.send(result);
}

module.exports.procesarImagen = procesarImagen;