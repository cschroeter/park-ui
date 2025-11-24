# syntax=docker/dockerfile:1.4

FROM oven/bun:1.3.3-alpine  AS base
WORKDIR /app

# Install dependencies with bun
FROM base AS deps
COPY package.json bun.lock* ./
COPY website/package.json ./website/
COPY components/react/package.json ./components/react/
COPY packages/preset/package.json ./packages/preset/
COPY packages/scripts/package.json ./packages/scripts/

RUN bun install --no-save --ignore-scripts

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules

COPY . .

ENV NEXT_TELEMETRY_DISABLED=1

RUN bun web prepare
RUN bun web build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production \
    PORT=3000 \
    HOSTNAME="0.0.0.0"

RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

COPY --from=builder /app/website/public ./public

COPY --from=builder --chown=nextjs:nodejs /app/website/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/website/.next/static ./website/.next/static

USER nextjs

EXPOSE 3000

CMD ["bun", "./website/server.js"]