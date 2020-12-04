# stage1 - build react app first 
FROM 837909195439.dkr.ecr.us-east-1.amazonaws.com/node:14.15.1 as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY ./package.json /app/
COPY . /app
RUN npm install

CMD ["npm", "start"]
EXPOSE 4000