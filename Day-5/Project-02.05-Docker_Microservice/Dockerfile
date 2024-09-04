# Use the official Node.js 14 image as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json into the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application's code into the working directory
COPY . .

# Make the application's port available to the outside
EXPOSE 3000

# Define the command to run the application
CMD ["node", "index.js"]
