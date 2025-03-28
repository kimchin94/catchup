 # CatchUp - Project Management Application

A full-stack project management application built with NestJS, React, and PostgreSQL.

## 🚀 Features

- Project management dashboard
- Project creation and editing
- Task tracking and management
- Docker containerization for easy deployment
- PostgreSQL database for data persistence

## 🛠️ Tech Stack

### Backend
- NestJS - A progressive Node.js framework
- Prisma ORM - Next-generation ORM for Node.js and TypeScript
- PostgreSQL - Open-source relational database

### Frontend
- React 19 - JavaScript library for building user interfaces
- React Router - Routing library for React
- Vite - Next generation frontend tooling
- TypeScript - Typed JavaScript

## 🏗️ Project Structure

```
catchup/
├── apps/
│   ├── backend/         # NestJS backend application
│   │   ├── src/         # Source code
│   │   │   ├── prisma/  # Prisma schema and migrations
│   │   │   └── projects/ # Project-related modules
│   │   ├── Dockerfile   # Backend Docker configuration
│   │   └── package.json # Backend dependencies
│   └── frontend/        # React frontend application
│       ├── src/         # Source code
│       │   ├── pages/   # React components for pages
│       │   └── assets/  # Static assets
│       ├── Dockerfile   # Frontend Docker configuration
│       └── package.json # Frontend dependencies
├── docker-compose.yml   # Docker Compose configuration
└── package.json         # Root package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- Docker and Docker Compose (for containerized deployment)
- npm or yarn

### Development Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd catchup
   ```

2. Install dependencies:
   ```bash
   npm install
   cd apps/backend && npm install
   cd ../frontend && npm install
   ```

3. Start the development servers:

   For backend:
   ```bash
   cd apps/backend
   npm run start:dev
   ```

   For frontend:
   ```bash
   cd apps/frontend
   npm run dev
   ```

### Using Docker Compose

To start all services (backend, frontend, and database) with Docker Compose:

```bash
docker-compose up -d
```

This will start:
- PostgreSQL database on port 5432
- Backend service on port 3000
- Frontend service on port 5173

## 🧪 Testing

### Backend Testing
```bash
cd apps/backend
npm run test        # Run unit tests
npm run test:e2e    # Run end-to-end tests
npm run test:cov    # Generate test coverage
```

### Frontend Testing
```bash
cd apps/frontend
npm run test        # Run tests
```

## 📝 Environment Variables

Create a `.env` file in the root directory with the following variables:

```
POSTGRES_USER=user
POSTGRES_PASSWORD=password
POSTGRES_DB=mydb
```

## 🚢 Deployment

The application is containerized using Docker, making it easy to deploy to various environments.

1. Build the images:
   ```bash
   docker-compose build
   ```

2. Start the services:
   ```bash
   docker-compose up -d
   ```

## 📜 License

MIT