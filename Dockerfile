# Multi-stage build for Storybook
FROM node:20-alpine AS builder

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY packages ./packages

# Install dependencies
RUN pnpm install --frozen-lockfile

# Build all packages first (tokens must be built before other packages)
RUN pnpm build

# Build Storybook static files
RUN pnpm storybook build

# Production stage - serve with nginx
FROM nginx:alpine

# Copy built storybook to nginx html directory
COPY --from=builder /app/storybook-static /usr/share/nginx/html

# Copy custom nginx config if needed
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
