FROM node:16.16.0

WORKDIR /app

COPY . .

RUN npm i

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.9.0/wait /wait
RUN chmod +x /wait

EXPOSE 3000

CMD /wait && npm run start