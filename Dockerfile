ARG NODE_VERSION=22.13.1
FROM node:${NODE_VERSION}-slim as builder

WORKDIR /app

ENV NODE_ENV="production"
ENV API_SERVER="https://ac-2025-cms.fly.dev"

# Install packages needed to build node modules
RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y build-essential node-gyp pkg-config python-is-python3

# Install node modules
COPY --link package-lock.json package.json ./
RUN npm ci --include=dev

# Copy application code
COPY --link . .

# Build application
RUN npm run build

# Remove development dependencies
RUN npm prune --omit=dev

FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html/alternating-current-2025
