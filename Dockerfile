# This defines our starting point
FROM node:latest
 
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

RUN npm install -g npm@latest
RUN npm install -g yarn
RUN yarn global add @angular/cli
RUN ng config —global cli.packageManager yarn

COPY . /app

# start app
ENTRYPOINT ["ng", "serve", "--host 0.0.0.0", "--port 50000"];
