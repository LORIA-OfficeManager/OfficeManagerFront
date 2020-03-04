# This defines our starting point
FROM node:latest
 
WORKDIR /app

# install and cache app dependencies
COPY package.json .
RUN npm install -g npm@latest
RUN yarn install

COPY . .

# start app
ENTRYPOINT ["ng", "serve", "--host 0.0.0.0", "--port 50000"];
