# Step 1: Build React frontend
FROM node:18 AS builder
WORKDIR /app

# Copy and install frontend
COPY client ./client
RUN cd client && npm install && npm run build

# Step 2: Setup backend with built frontend
FROM node:18
WORKDIR /app

# Copy backend code
COPY server ./server
COPY --from=builder /app/client/build ./server/build

# Install backend deps
RUN cd server && npm install

# Start the server
CMD ["node", "server/index.js"]

EXPOSE 10000
