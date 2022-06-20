FROM node:14-alpine

# create dir
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app

# build dependencies
COPY ./package*.json ./
USER node
# copy in source code
COPY --chown=node:node ./ ./
RUN npm install
RUN npm run build

COPY --chown=node:node .env .env

EXPOSE 3000

# start express server
CMD [ "npm", "start" ]
