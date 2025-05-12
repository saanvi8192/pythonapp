# Use Node.js v18
FROM node:14

# Create app directory
WORKDIR /app.js

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

# Expose the port
EXPOSE 3000

CMD [ "node", "app.js" ]