# This defines our starting point
FROM node:latest
 
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

COPY . /app

# start app
ENTRYPOINT ["ng", "serve", "--host 0.0.0.0", "--port 50000"];
