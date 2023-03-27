# Description: Dockerfile to deploy the node application
# Author: Sebastián Gámez Ariza

FROM node:16.19.1

RUN mkdir /home/app

COPY . /home/app

RUN cd /home/app && npm install

WORKDIR /home/app

EXPOSE 3000

CMD ["npm", "start"]
