# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies and tools globally
RUN npm install
RUN npm install -g prisma
RUN npm install -g @nestjs/cli

# Copy source code
COPY . .

# Generate Prisma client
RUN prisma generate

# Fix permissions and build the application
RUN chmod -R 777 node_modules/.bin/
RUN npm run build

# Production stage
FROM node:18-alpine

WORKDIR /app

# Copy built assets from builder stage
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/prisma ./prisma

# Install Prisma globally in production
RUN npm install -g prisma

# Generate Prisma client in production
RUN prisma generate

# Expose port
EXPOSE 3000

# Start the application
CMD ["npm", "run", "start:prod"]