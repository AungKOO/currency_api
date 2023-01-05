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

<https://localhost:8000/api/v1/day/today.json>

#### monthly rate

format: <https://localhost:8000/api/v1/month/{yyyymm}.json>
<https://localhost:8000/api/v1/month/202202.json>

#### rate for specific date

format: <https://localhost:8000/api/v1/date/{yyyymmdd}.json>
<https://localhost:8000/api/v1/date/20221101.json>

## JSON_format

Specific date or today အတွက် JSON format:

```
{
    "type": "success",
    "data": [
        {
            "date": "2022-12-11T06:12:40.991Z",
            "currency": {
                "currencies": [
                    {
                        "rate": 2935,
                        "currency_format": "USD"
                    }
                ]
            }
        }
    ]
}
```

month အတွက် JSON format:

```
{
    "type": "success",
    "data": [
        {
            "date": "2022-10-01T04:12:40.991Z",
            "currency": {
                "currencies": [
                    {
                        "rate": 2900,
                        "currency_format": "USD"
                    }
                ]
            }
        },
        {
            "date": "2022-10-02T04:12:40.991Z",
            "currency": {
                "currencies": [
                    {
                        "rate": 2895,
                        "currency_format": "USD"
                    }
                ]
            }
        },
        ...
        {
            "date": "2022-10-29T04:12:40.991Z",
            "currency": {
                "currencies": [
                    {
                        "rate": 2915,
                        "currency_format": "USD"
                    }
                ]
            }
        },
        {
            "date": "2022-10-30T04:12:40.991Z",
            "currency": {
                "currencies": [
                    {
                        "rate": 2917,
                        "currency_format": "USD"
                    }
                ]
            }
        }
    ]
}
```

if there is no data in Database:
server will return `{type: "no data", data:[]}`

if there is an invalid request from client,
server will return **Bad Request** `400`

