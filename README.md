# express-session-example
Demonstation using express-sessions when creating a web application backend.

## Building and deploying

```bash
docker build --no-cache -t 10.10.10.1:5000/express-api .

docker push 10.10.10.1:5000/express-api

docker pull 10.10.10.1:5000/express-api \
&& docker run -d \
  -p 3000:3000 \
  --name express-api \
  --restart unless-stopped \
  10.10.10.1:5000/express-api
  ```
