FROM node:18.12-alpine3.17
RUN apk add --no-cache postgresql-client
WORKDIR /app/currency_api
ADD package.json /app/currency_api/
COPY ./build /app/currency_api/
RUN npm i
# RUN npm run prod