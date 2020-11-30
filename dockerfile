# stage1 - build react app first 
FROM node:14.15.1-alpine3.12 as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY ./package.json /app/
COPY . /app
RUN npm install

CMD ["npm", "start"]
EXPOSE 4000