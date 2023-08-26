# Use the official Node.js 16 image for Node.js
FROM node:16.20.1

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Install global dependencies if needed
RUN npm install -g vite

# Expose the port the app runs on
EXPOSE 3000

# Command to run the app
CMD ["npm", "run", "dev"]

# Use the official Python 3.8 image for Python
FROM python:3.8

# Set the working directory for Python
WORKDIR /app

# Copy requirements.txt to the container
COPY requirements.txt ./

# Install Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Expose the port for your Python application if needed
# EXPOSE 5000

# Command to run your Python application
# CMD ["python", "your_script.py"]