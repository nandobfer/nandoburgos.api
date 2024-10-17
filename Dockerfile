# Stage 1: Build Stage
FROM node:22 AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install all dependencies (including devDependencies)
RUN npm install --ignore-scripts

# Copy the rest of the application code
COPY . .

# Generate Prisma client and format schema
RUN npm run prismix

# Build the TypeScript application
RUN npm run build

# Remove development dependencies
RUN npm prune --production

# Stage 2: Production Stage
FROM node:22

# Set working directory
WORKDIR /app

# Copy package.json to the container
COPY package*.json ./

# Copy the production node_modules from the build stage
COPY --from=build /app/node_modules ./node_modules

# Copy the built application from the build stage
COPY --from=build /app/dist ./dist

# Copy any other necessary files (e.g., public assets)
# COPY --from=build /app/public ./public

# Expose the application's port
EXPOSE 4103

# Set environment variables if needed
ENV DATABASE_URL="mysql://boz:Ewhblt69%21%40%23@agencyboz.com:3306/nandoburgos"
ENV PORT=4103

# Start the application
CMD ["node", "dist/index.js"]
