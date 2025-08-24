# Use the official Microsoft devcontainers Node.js image
FROM mcr.microsoft.com/devcontainers/javascript-node:18

# Install additional tools you might need
RUN apt-get update && apt-get install -y \
    git \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Install global npm packages
RUN npm install -g \
    vercel \
    @types/node \
    typescript

# Set the default user
USER node

# Set working directory
WORKDIR /workspace

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Expose the development port
EXPOSE 3000
