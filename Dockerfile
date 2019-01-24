FROM node
FROM yarn
WORKDIR /app
COPY package.json /app
RUN yarn
COPY . /app
CMD node .
EXPOSE 3000