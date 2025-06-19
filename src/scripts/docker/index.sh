#!/bin/bash

# Define the image name
IMAGE_NAME="advanced"

echo "Running container from image: $IMAGE_NAME $1"
# Get all containers related to the specific image
CONTAINERS=$(docker ps -a -q --filter ancestor="$IMAGE_NAME")

# Stop and remove containers if 'remove' is passed
if [ "$1" == "--remove" ]; then
  if [ ! -z "$CONTAINERS" ]; then
    echo "Stopping containers related to image: $IMAGE_NAME"
    docker stop $CONTAINERS

    echo "Removing containers related to image: $IMAGE_NAME"
    docker rm $CONTAINERS
  else
    echo "No running containers found for image: $IMAGE_NAME"
  fi
else
  echo "Skipping container removal as 'remove' argument was not provided."
fi

# load the environment variables
source .env

# Run the container with environment variables
docker run --env-file .env -e NODE_ENV=production -p 5500:5500 $IMAGE_NAME
