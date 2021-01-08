FROM node:lts

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install
RUN npm install -g @angular/cli@latest

# Bundle app source
COPY . /usr/src/app

EXPOSE 4200

CMD ["ng","serve"]