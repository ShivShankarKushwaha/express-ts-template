# Stage 1: Build stage
FROM node:18-alpine AS builder

WORKDIR /app

RUN npm install -g bun
COPY package.json bun.lock* ./
RUN bun install --frozen-lockfile
COPY . .
RUN bun run build

# Stage 2: Runtime stage
FROM node:18-alpine

WORKDIR /app

# Install bun directly from npm (no curl needed)
RUN npm install -g bun && \
    npm uninstall -g npm && \
    rm -rf /usr/local/lib/node_modules/npm

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json .

EXPOSE 5500
CMD ["bun", "start"]
