# This defines our starting point
FROM node:latest
 
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install -g @angular/cli
RUN npm install
RUN npm fund

COPY . /app

# start app
ENTRYPOINT ng serve --host 0.0.0.0 --port 50000
