FROM node:latest
RUN mkdir /app
ADD . /app
WORKDIR /app
RUN npm install
RUN npm install -g grunt
RUN grunt
EXPOSE 3030
CMD ["npm","start"]
