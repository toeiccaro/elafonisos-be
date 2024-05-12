FROM node:18.17-alpine
# Installing libvips-dev for sharp Compatibility
RUN apk update && apk add --no-cache curl build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

WORKDIR /opt/
COPY package.json yarn.lock ./
RUN npm install -g node-gyp
RUN yarn config set network-timeout 600000 -g && yarn install --unsafe-perm
ENV PATH /opt/node_modules/.bin:$PATH

WORKDIR /opt/app
COPY . .
RUN chown -R node:node /opt/app
USER root
# Change permissions of the uploads directory to 777
RUN chmod -R 777 /opt/app

# Switch back to the node user
USER node
RUN ["yarn", "build"]
EXPOSE 1337
CMD ["yarn", "develop"]