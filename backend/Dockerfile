# Usa una imagen de Node.js
FROM node:18-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el archivo package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código
COPY . .

# Expone el puerto que usará el contenedor
EXPOSE 3000

# Define el comando para correr la aplicación
CMD ["node", "index.js"]
