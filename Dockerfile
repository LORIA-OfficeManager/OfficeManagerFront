# This defines our starting point
FROM node:latest
 
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json .
RUN npm install -g npm@latest
RUN yarn install

COPY . .

# start app
ENTRYPOINT ["ng", "serve", "--host 0.0.0.0", "--port 50000"];
