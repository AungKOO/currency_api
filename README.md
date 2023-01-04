# currency_api

## Getting_started

This project is intended for practicing and learning based on typescript, postgres and express.
You can get daily rate of the MMK per USD.

### Prerequsites

1. Node - v18.9.0
2. Typescript
3. Database client


## Usage

### daily rate

https://localhost:8000/api/v1/day/today.json

#### monthly rate

format: https://localhost:8000/api/v1/month/{yyyymm}.json
https://localhost:8000/api/v1/month/202202.json

#### rate for specific date

format: https://localhost:8000/api/v1/date/{yyyymmdd}.json
https://localhost:8000/api/v1/date/20221101.json

## JSON_format

Specific date or today အတွက် JSON format:

`[
    {
        "date": "2022-12-01T06:12:40.991Z",
        "currency": {
            "currencies": [
                {
                    "rate": 2935,
                    "currency_format": "USD"
                }
            ]
        }
    }
]`

month အတွက် JSON format:

`[
    {
        "date": "2022-12-01T06:12:40.991Z",
        "currency": {
            "currencies": [
                {
                    "rate": 2935,
                    "currency_format": "USD"
                }
            ]
        }
    },
    {
        "date": "2022-12-02T06:12:40.991Z",
        "currency": {
            "currencies": [
                {
                    "rate": 2935,
                    "currency_format": "USD"
                }
            ]
        }
    },
    ...
    ]`

if there is no data in Database:
server will return **empty array** `[]`

if there is an invalid request from client,
server will return **Bad Request** `400`
