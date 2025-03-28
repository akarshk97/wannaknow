FROM node:18-alpine

# Install Git
RUN apk --no-cache add git

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Install vite globally
RUN npm install -g vite

# Copy project files
COPY . .

EXPOSE 5173

# Use npx to run vite
CMD ["npx", "vite", "--host"]