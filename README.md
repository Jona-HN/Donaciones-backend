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
   /* 5. Crear tabla de usuarios */
   CREATE TABLE usuarios(
       id INT PRIMARY KEY AUTO_INCREMENT,
       nombre VARCHAR(100) NOT NULL,
       email VARCHAR(100) NOT NULL,
       password VARCHAR(100) NOT NULL,
       UNIQUE (email)
   );
   ```
