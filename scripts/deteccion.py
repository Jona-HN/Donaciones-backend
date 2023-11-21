import cv2
import pytesseract
import sys

if __name__ == "__main__":
    # Obtener el nombre de la imagen como argumento
    if len(sys.argv) != 2:
        print("No se recibió la imagen")
        sys.exit(1)

    nombre_imagen = sys.argv[1]
    print(f"Procesando la imagen: {nombre_imagen}")

    img = cv2.imread(f'./public/uploads/{nombre_imagen}')
    data = pytesseract.image_to_string(img) #Se guarda texto en variable
    banco = "Desconocido"
    
    if "banamex" in data:
        banco = "banamex"
    nombre = data.split("Nombre: ", 1)[1][0:26].replace("/", " ").replace(",", "")
    montoDepositado = data.split("MONTO INSERTADO: § ", 1)[1][0:9]

    print(banco)
    print(nombre) #Se imprimen los datos 
    print(montoDepositado)