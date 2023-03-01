# Use an official Node.js runtime as the base image
FROM node:18-alpine

# Set the database URL as a build argument
ARG build_databas_url
ENV DATABASE_URL $build_database_url

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
