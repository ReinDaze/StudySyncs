#!/usr/bin/env bash

echo "Running Laravel build commands..."

# Install composer dependencies
composer install --no-dev --optimize-autoloader

# Clear and cache Laravel config
php artisan config:cache
php artisan route:cache
php artisan view:cache

# Generate application key if not exists
php artisan key:generate --force

# Run database migrations
php artisan migrate --force

echo "Laravel build completed!"
