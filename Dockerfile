FROM node
LABEL authors="Bob Reselman"
# update dependencies and install curl
RUN apt-get update && apt-get install -y \
    curl \
    && rm -rf /var/lib/apt/lists/*
# Create app directory
WORKDIR /app
COPY . .
RUN npm run build
# Bundle app source
COPY . /app
CMD [ "npm", "run", "deploy" ]