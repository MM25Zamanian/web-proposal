FROM docker.io/library/node:23 AS deps

WORKDIR /app

COPY package*.json ./

RUN npm install --frozen-lockfile

FROM docker.io/library/node:23 AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules

# Copy the rest of the application code
COPY . .

# Set environment variables for build
ENV NODE_ENV=production

# Run the Next.js build command
RUN npm run build

FROM ghcr.io/alwatr/nginx-ws:3.3.5 AS runner

COPY nginx/etc/nginx/ /etc/nginx/

COPY --from=builder /app/dist .

EXPOSE 80