#!/bin/bash

IMAGE_NAME="advanced"

# Function to build the Docker image
build_image() {
    echo "🛠️  Building Docker image: $IMAGE_NAME"
    docker build -t "$IMAGE_NAME" .
}

# Function to stop and remove containers for the image
remove_containers() {
    CONTAINERS=$(docker ps -a -q --filter ancestor="$IMAGE_NAME")

    if [ -n "$CONTAINERS" ]; then
        echo "🛑 Stopping containers for image: $IMAGE_NAME"
        docker stop $CONTAINERS

        echo "🗑️  Removing containers for image: $IMAGE_NAME"
        docker rm $CONTAINERS
    else
        echo "ℹ️  No containers found for image: $IMAGE_NAME"
    fi
}

# Function to run the container (includes cleanup)
run_container() {
    echo "🔄 Cleaning up existing containers..."
    remove_containers

    # Load env variables and run
    if [ -f .env ]; then
        echo "📄 Loading environment variables from .env"
        source .env
        echo "🚀 Running container with environment variables"
        docker run --env-file .env -e NODE_ENV=production -p 5500:5500 "$IMAGE_NAME"
    else
        echo "⚠️  .env file not found. Running without environment variables"
        docker run -e NODE_ENV=production -p 5500:5500 "$IMAGE_NAME"
    fi
}

# Handle arguments
case "$1" in
    --build)
        build_image
        run_container
        ;;
    --remove)
        remove_containers
        ;;
    --start)
        run_container
        ;;
    *)
        echo "Usage: $0 {--build|--remove|--start}"
        echo "  --build   Build the Docker image and run the container"
        echo "  --remove  Stop and remove containers for the image"
        echo "  --start   Run the container (cleans up existing containers first)"
        exit 1
        ;;
esac
