# Use an official Node.js runtime as the base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY . .

# Install dependencies in the container
RUN yarn install

# Build the app in the container
RUN yarn build

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Specify the command to run when the container starts
CMD [ "yarn", "start" ]

# docker build --platform linux/amd64  -t dosfinrepo:* .
