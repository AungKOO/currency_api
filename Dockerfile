FROM node:18.12-alpine3.17
RUN apk add --no-cache postgresql-client
WORKDIR /app/currency_api
ADD package.json /app/currency_api/
COPY ./build /app/currency_api/
ADD ./migrations/currencies.sql /app/currency_api/migrations/
ADD ./migrations/function.sql /app/currency_api/migrations/
RUN npm i

# RUN npm run prod