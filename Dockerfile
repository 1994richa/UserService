# Step 1: Use an official Node.js image as a base image
FROM node:18-alpine

# Step 2: Set the working directory in the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json to the container
COPY package*.json ./

# Step 4: Install dependencies inside the container
RUN npm install

# Step 5: Copy the rest of the application files to the container
COPY . .

# Step 6: Expose the application port (the port your Express server listens to)
EXPOSE 5000

# Step 7: Command to run your application
CMD ["npm", "start"]
