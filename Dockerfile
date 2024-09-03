# Use uma imagem base do Node.js
FROM node:18

# Instale FFmpeg
RUN apt-get update && \
    apt-get install -y ffmpeg

# Crie um diretório para o aplicativo
WORKDIR /usr/src/app

# Copie os arquivos do projeto para o contêiner
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante dos arquivos do projeto
COPY . .

# Defina o comando para iniciar o bot
CMD ["node", "src/index.js"]
