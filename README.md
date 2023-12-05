# Donaciones-backend

1. Clonar el repositorio
2. Ejecutar `npm i` para instalar las librerías
3. Configurar la base de datos:
   
   ```sql
   /* 1. Crear la base de datos */
   CREATE DATABASE donaciones;
   /* 2. Crear el usuario */
   CREATE USER 'donacionesbackend'@'localhost' IDENTIFIED BY 'sistemadonaciones';
   /* 3. Otorgar permisos */
   GRANT ALL PRIVILEGES ON donaciones.* TO 'donacionesbackend'@'localhost';
   FLUSH PRIVILEGES;
   QUIT;
   /* 4. Iniciar sesión con el nuevo usuario */
   mysql -u donacionesbackend -p donaciones
   /* 5. Crear tablas */
    CREATE TABLE roles(
        id INT PRIMARY KEY AUTO_INCREMENT,
        descripcion VARCHAR(50) NOT NULL
    );

    CREATE TABLE usuarios(
        id INT PRIMARY KEY AUTO_INCREMENT,
        id_rol INT NOT NULL DEFAULT 1,
        nombre VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL UNIQUE,
        password VARCHAR(100) NOT NULL,
        FOREIGN KEY (id_rol) REFERENCES roles(id)
    );

    CREATE TABLE carreras(
        id INT PRIMARY KEY AUTO_INCREMENT,
        nombre VARCHAR(100) NOT NULL
    );

    CREATE TABLE coordinadores(
        id INT PRIMARY KEY AUTO_INCREMENT,
        id_usuario INT NOT NULL,
	    id_carrera INT NOT NULL,
        num_empleado VARCHAR(50) NOT NULL UNIQUE,
        ext_telefonica VARCHAR(10) NOT NULL,
        FOREIGN KEY (id_usuario) REFERENCES usuarios(id),
        FOREIGN KEY (id_carrera) REFERENCES carreras(id)
    );

    CREATE TABLE administradores(
        id INT PRIMARY KEY AUTO_INCREMENT,
        id_usuario INT NOT NULL,
        num_empleado VARCHAR(50) NOT NULL UNIQUE,
        ext_telefonica VARCHAR(10) NOT NULL,
        FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
    );

    CREATE TABLE cortes(
        id INT PRIMARY KEY AUTO_INCREMENT,
        id_carrera INT NOT NULL,
        monto_total FLOAT NOT NULL,
        fecha_corte DATE NOT NULL,
        ultima_actualizacion DATE NOT NULL,
        estado VARCHAR(50),
        FOREIGN KEY (id_carrera) REFERENCES carreras(id)
    );

    CREATE TABLE recibos(
        id INT PRIMARY KEY AUTO_INCREMENT,
        id_usuario INT NOT NULL,
        monto FLOAT NOT NULL,
        banco VARCHAR(100),
        FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
    );

    CREATE TABLE donaciones(
        id INT PRIMARY KEY AUTO_INCREMENT,
        id_usuario INT NOT NULL,
        id_corte INT,
        id_recibo INT NOT NULL,
        id_carrera INT NOT NULL,
        monto FLOAT NOT NULL,
        fecha_pago DATE NOT NULL,
        ultima_actualizacion DATE NOT NULL,
        estado VARCHAR(50) NOT NULL,
        FOREIGN KEY (id_usuario) REFERENCES usuarios(id),
        FOREIGN KEY (id_corte) REFERENCES cortes(id),
        FOREIGN KEY (id_recibo) REFERENCES recibos(id),
        FOREIGN KEY (id_carrera) REFERENCES carreras(id)
    );
   ```
4. Configuración Tesseract en Ubuntu (detección de caracteres en imágenes):

    ```
    pip3 install pytesseract
    sudo apt install tesseract-ocr
    pip3 install opencv-python
    sudo apt install libgl1
    ```