# 🚀 Node.js Express Backend Starter Template

A modern, production-ready backend boilerplate built with **Express.js**, **TypeScript**, **MongoDB**, and more. Designed for scalable, secure, and maintainable server-side applications.

---

## 🌟 Features

- **⚡ Express.js** – Fast, minimalist framework for RESTful APIs.
- **🟦 TypeScript** – Static typing for safer, scalable code.
- **🍃 MongoDB + Mongoose** – Schema-based data modeling and management.
- **📕 Redis** – In-memory store for caching, sessions, and more.
- **📝 Winston** – Advanced logging system with structured logs.
- **🐳 Docker & Docker Compose** – Containerize your app with ease.
- **🔐 dotenv** – Securely manage configuration and secrets.
- **🚫 Rate Limiting** – Defend against abuse and brute-force attacks.
- **🔒 bcrypt** – Secure password hashing.
- **🪪 JWT Auth** – Stateless, scalable token-based authentication.
- **☁️ Vercel Deployment** – Out-of-the-box serverless deployment.
- **🧹 ESLint + Prettier** – Clean, consistent codebase.
- **🐶 Husky + Lint-Staged** – Automated pre-commit quality checks.
- **🧪 Vitest** – Unit & E2E tests with modern test tooling.

---

## 🔧 Prerequisites

- **Node.js** v18+
- **Docker** (optional but recommended)
- **Bun** *(optional package manager)*

```bash
# Install Bun (optional)
npm i -g bun
```

---

## 🚀 Getting Started

```bash
git clone https://github.com/ShivShankarKushwaha/express-ts-template
cd express-ts-template
bun install # or npm install
```

> 💡 Create a `.env` file from `.env.example`. Never commit secrets to git.

```env
MONGO_URI=mongodb://localhost:27017/devdb
APP_SECRET=strong_jwt_secret
REDIS_URL=redis://localhost:6379
PORT=5500
```

---

## 📁 Project Structure

```
.
├── .husky/              # Git hooks
├── src/
│   ├── config/          # DB, Redis, Logger, Env configs
│   ├── controllers/     # Route logic
│   ├── middlewares/     # Express middlewares
│   ├── models/          # Mongoose models
│   ├── routes/          # API route declarations
│   ├── services/        # Business logic
│   ├── utils/           # Helpers (JWT, bcrypt, etc.)
│   └── server.ts        # App entry point
├── tests/               # Unit & E2E tests
├── Dockerfile
├── docker-compose.yml
└── ...
```

---

## 🛠 Development

```bash
bun run dev # or npm run dev
```

---

## 📦 Production

```bash
bun run build     # or npm run build
bun run start     # or npm run start
```

---

## 🐳 Docker

```bash
bun run build:docker
bun run start:docker
```

Ensure `.env` uses Docker hostnames (e.g., `mongodb://mongodb:27017/db`).

---

## ✅ Testing

```bash
bun run test        # All tests
bun run test:unit   # Unit tests only
bun run test:e2e    # E2E tests only
bun run coverage    # Coverage report
```

---

## 🧼 Code Quality

```bash
bun run lint        # Check lint errors
bun run format      # Auto-fix code
```

> ✅ Enforced via Git hooks using Husky + Lint-Staged.

---

## ☁️ Vercel Deployment

```bash
vercel        # First-time setup
vercel --prod # Push to production
```

---

## 🤝 Contributing

1. Fork and create your branch.
2. Follow code style (`bun run format`).
3. Add/Update tests.
4. Make a PR!

---

## 🧠 Author

**Shiv Shankar Kushwaha**
🌐 [shivshankar.vercel.app](https://shivshankar.vercel.app)
