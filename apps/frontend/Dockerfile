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
# COPY --from=0 /app/dist /usr/share/nginx/html
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy nginx configuration
# COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/templates/default.conf.template
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

RUN apk add --no-cache gettext

# Set environment variable with default value
# ENV BACKEND_URL=http://backend:3000
# ENV BACKEND_URL=localhost:3000
ENV BACKEND_URL=http://my-app-alb-1849450811.ap-southeast-2.elb.amazonaws.com:3000

# Expose port
EXPOSE 5173 80

# Start nginx
# CMD ["nginx", "-g", "daemon off;"]
CMD ["/entrypoint.sh"]