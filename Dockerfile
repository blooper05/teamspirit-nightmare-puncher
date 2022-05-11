FROM node:18.1.0-bullseye-slim

WORKDIR /usr/src/app

RUN apt-get update && apt-get install -y \
  libgtk-3-bin \
  libxtst6 \
  libxss1 \
  libgconf2-dev \
  libnss3-dev \
  libasound2-dev \
  xvfb

COPY entrypoint.sh /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]

COPY package.json yarn.lock ./
RUN yarn install && yarn cache clean

COPY src ./src
