# Use Node.js base image
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Install global tools
RUN npm install -g typescript vite

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Fix permissions
RUN chmod -R 777 node_modules/.bin/

# Build the application
RUN npm run build || npx tsc -b && npx vite build

# Use nginx for serving
FROM nginx:alpine

# Copy built assets from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy nginx configuration template
COPY nginx.conf /etc/nginx/templates/default.conf.template

# Set environment variable with default value
ENV BACKEND_URL=http://backend:3000

# Expose port
EXPOSE 5173

# Start nginx with environment variables
CMD ["nginx", "-g", "daemon off;"]