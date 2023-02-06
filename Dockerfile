FROM node:19.6.0-bullseye-slim

WORKDIR /usr/src/app

RUN apt-get update && apt-get install -y --no-install-recommends \
  libgtk-3-bin=3.24.24-* \
  libxtst6=2:1.2.3-* \
  libxss1=1:1.2.3-* \
  libgconf2-dev=3.2.6-* \
  libnss3-dev=2:3.61-* \
  libasound2-dev=1.2.4-* \
  xvfb=2:1.20.11-* \
  && rm -rf /var/lib/apt/lists/*

COPY entrypoint.sh /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]

COPY package.json yarn.lock ./
RUN yarn install && yarn cache clean

COPY src ./src
