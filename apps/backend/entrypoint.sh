#!/bin/sh
echo "Environment variables:"
echo "DATABASE_URL=$DATABASE_URL"
echo "ALLOWED_ORIGINS=$ALLOWED_ORIGINS"
echo "PORT=$PORT"
if [ -z "$ALLOWED_ORIGINS" ]; then
  export ALLOWED_ORIGINS="http://my-app-alb-1849450811.ap-southeast-2.elb.amazonaws.com,http://my-app-alb-1849450811.ap-southeast-2.elb.amazonaws.com:80"
fi
echo "Starting backend application..."
node dist/main
