#!/bin/sh
sed -i "s|BACKEND_URL_PLACEHOLDER|$BACKEND_URL|g" /etc/nginx/conf.d/default.conf
cat /etc/nginx/conf.d/default.conf
echo "healthy" > /usr/share/nginx/html/health
echo "Starting nginx..."
exec nginx -g "daemon off;"