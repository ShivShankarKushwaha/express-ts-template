# Node.js Express Backend Starter Template

This is a Node.js backend template using Express.js, TypeScript, and several other essential libraries and tools. It is designed to provide a strong foundation for building robust and scalable server-side applications.

## Features

- Express.js for building RESTful APIs
- TypeScript for static typing
- Redis for caching
- MongoDB for data persistence
- Winston for logging
- Docker support for containerization
- Environment variable management with dotenv
- Rate limiting for security
- Password hashing with bcrypt
- JWT for authentication
- vercel for deployment

## Prerequisites

Ensure you have the following installed:

- Node.js (version 18.x)
- Docker (optional, for containerization)
- bun `npm i -g bun`

## Getting Started

### Clone the repository

```bash
git clone https://github.com/ShivShankarKushwaha/templates
cd templates/Ts-Server
```

### Install dependencies

```bash
# Using bun
bun install

```

### Environment Variables

Create a `.env` file in the root of the project and configure the following environment variables:
**Do not use quotes to keep value in .env**
❌ APP_SECRET="asda34rwer" or APP_SECRET='asda34rwer'
✅ APP_SECRET=asda34rwer
```
MONGO_URI=your-mongodb-uri
APP_SECRET=your-app-secret
REDIS_URL=your-redis-url
REDIS_PASSWORD=your-redis-password
```

### Running the Development Server

```bash
# Using bun
bun run dev

```

The server will start on the port defined in the `.env` file or default to 5500.

### Building for Production

```bash
# Using bun
bun run build

```

### Running the Production Server

```bash
# Using bun
bun start

```

### Running with Docker

Build and start the Docker container:

```bash
# Suggestion: change the docker image name as you want from ("build:docker":"docker build -t advanced .") from package.json and from docker/index.sh (Image_Name=advanced)
bun run build:docker
bun run start:docker
```

## Testing

Run unit and end-to-end tests using Vitest:

```bash
# Unit tests
bun run test:unit

# E2E tests
bun run test:e2e

# Coverage report
bun run coverage
```

## Linting and Formatting

Ensure your code adheres to the project's code style:

```bash
# Check for linting errors
bun run lint

# Automatically fix linting errors
bun run format
```

## Deploying on Vercel
Ensure you have an account on vercel.com
```bash
# install vercel globally
bun add -g vercel

# deploy on vercel
vercel

# if updating deploy on vercel
vercel;vercel --prod
```

## Contributing

Contributions are welcome! Please follow the established code style and ensure all tests pass before submitting a pull request.
