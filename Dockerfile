# syntax=docker/dockerfile:1.7
# This Dockerfile is based on the official Node.js image and is optimized for building and running a Next.js application in production.

FROM node:22-alpine AS base
WORKDIR /app

FROM base AS deps
COPY package*.json ./
RUN npm ci

FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM base AS runner
ENV NODE_ENV=production
ENV PORT=3000

RUN addgroup -S nextjs && adduser -S nextjs -G nextjs



COPY package*.json ./
RUN npm ci --omit=dev && npm cache clean --force

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/app ./app
COPY --from=builder /app/components ./components
COPY --from=builder /app/next.config.* ./
COPY --from=builder /app/next-env.d.ts ./next-env.d.ts
COPY --from=builder /app/postcss.config.mjs ./postcss.config.mjs
COPY --from=builder /app/tsconfig.json ./tsconfig.json
COPY --from=builder /app/eslint.config.mjs ./eslint.config.mjs

RUN chown -R nextjs:nextjs /app
USER nextjs

EXPOSE 3000
CMD ["npm", "start"]