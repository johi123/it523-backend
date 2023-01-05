# Backend-Service

## How to install

```
# copy environment variables from Teams into the file with the name .env

npm install

npm run build

npm start
```

# LIMITATIONS
The Polygon API (Stock API) only allows us to create 5 API requests per limit with a max 120 items per requests. This means the time span between the from date and the to date is not allowed to exceed 120 days.


# API Documentation

## GET /api/stocks

### Query Params
* dateFrom: Date\
  _EXAMPLE: 2022-01-01_
* dateTo: Date\
  _EXAMPLE: 2022-12-12_

### Response
The response is a normal JSON object with the following 3 keys:
* matchData: is an array of objects with all the matches in the time span
* stockData: is an object with 2 keys:
  * team: contains an array of the stock data for each day in the time span of the team
  * market: contains an array of the stock data for each day in the time span of the market

## Example Request
localhost:4002/api/stocks?dateFrom=2022-12-01&dateTo=2023-01-05

### Response
```
{
    "matchData": [
        {
            "homeTeam": {
                "id": 66,
                "name": "Manchester United FC",
                "shortName": "Man United",
                "tla": "MUN",
                "crest": "https://crests.football-data.org/66.png"
            },
            "awayTeam": {
                "id": 351,
                "name": "Nottingham Forest FC",
                "shortName": "Nottingham",
                "tla": "NOT",
                "crest": "https://crests.football-data.org/351.png"
            },
            "score": {
                "winner": "HOME_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "home": 3,
                    "away": 0
                },
                "halfTime": {
                    "home": 2,
                    "away": 0
                }
            },
            "date": "2022-12-27T20:00:00Z"
        },
        {
            "homeTeam": {
                "id": 76,
                "name": "Wolverhampton Wanderers FC",
                "shortName": "Wolverhampton",
                "tla": "WOL",
                "crest": "https://crests.football-data.org/76.svg"
            },
            "awayTeam": {
                "id": 66,
                "name": "Manchester United FC",
                "shortName": "Man United",
                "tla": "MUN",
                "crest": "https://crests.football-data.org/66.png"
            },
            "score": {
                "winner": "AWAY_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "home": 0,
                    "away": 1
                },
                "halfTime": {
                    "home": 0,
                    "away": 0
                }
            },
            "date": "2022-12-31T12:30:00Z"
        },
        {
            "homeTeam": {
                "id": 66,
                "name": "Manchester United FC",
                "shortName": "Man United",
                "tla": "MUN",
                "crest": "https://crests.football-data.org/66.png"
            },
            "awayTeam": {
                "id": 1044,
                "name": "AFC Bournemouth",
                "shortName": "Bournemouth",
                "tla": "BOU",
                "crest": "https://crests.football-data.org/1044.png"
            },
            "score": {
                "winner": "HOME_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "home": 3,
                    "away": 0
                },
                "halfTime": {
                    "home": 1,
                    "away": 0
                }
            },
            "date": "2023-01-03T20:00:00Z"
        }
    ],
    "stockData": {
        "team": {
            "ticker": "MANU",
            "results": [
                {
                    "date": "2022-12-01",
                    "close": 22.56,
                    "open": 21.8,
                    "high": 23.35,
                    "low": 21.64
                },
                {
                    "date": "2022-12-02",
                    "close": 22.73,
                    "open": 22.3,
                    "high": 22.92,
                    "low": 21.71
                },
                {
                    "date": "2022-12-03",
                    "close": 22.36,
                    "open": 22.4,
                    "high": 23.16,
                    "low": 22.09
                },
                {
                    "date": "2022-12-04",
                    "close": 22.21,
                    "open": 22.21,
                    "high": 22.48,
                    "low": 21.75
                },
                {
                    "date": "2022-12-05",
                    "close": 22.13,
                    "open": 22.3,
                    "high": 22.48,
                    "low": 21.91
                },
                {
                    "date": "2022-12-06",
                    "close": 21.85,
                    "open": 22.33,
                    "high": 22.59,
                    "low": 21.64
                },
                {
                    "date": "2022-12-07",
                    "close": 20.35,
                    "open": 22.09,
                    "high": 22.72,
                    "low": 20.21
                },
                {
                    "date": "2022-12-08",
                    "close": 20.56,
                    "open": 20.37,
                    "high": 21.47,
                    "low": 20.28
                },
                {
                    "date": "2022-12-09",
                    "close": 20.68,
                    "open": 20.68,
                    "high": 21.15,
                    "low": 20.29
                },
                {
                    "date": "2022-12-10",
                    "close": 21.59,
                    "open": 20.74,
                    "high": 21.6099,
                    "low": 20.735
                },
                {
                    "date": "2022-12-11",
                    "close": 21.62,
                    "open": 21.05,
                    "high": 21.77,
                    "low": 20.72
                },
                {
                    "date": "2022-12-12",
                    "close": 21.85,
                    "open": 21.52,
                    "high": 21.91,
                    "low": 21.3973
                },
                {
                    "date": "2022-12-13",
                    "close": 21.27,
                    "open": 21.49,
                    "high": 21.85,
                    "low": 20.9815
                },
                {
                    "date": "2022-12-14",
                    "close": 21.9,
                    "open": 21.26,
                    "high": 22.34,
                    "low": 21.14
                },
                {
                    "date": "2022-12-15",
                    "close": 22.76,
                    "open": 21.91,
                    "high": 22.89,
                    "low": 21.91
                },
                {
                    "date": "2022-12-16",
                    "close": 22.44,
                    "open": 22.65,
                    "high": 22.8,
                    "low": 22.06
                },
                {
                    "date": "2022-12-17",
                    "close": 22.48,
                    "open": 22.38,
                    "high": 22.63,
                    "low": 22.3201
                },
                {
                    "date": "2022-12-18",
                    "close": 23.12,
                    "open": 22.44,
                    "high": 23.26,
                    "low": 22.21
                },
                {
                    "date": "2022-12-19",
                    "close": 22.45,
                    "open": 22.99,
                    "high": 23.1521,
                    "low": 22.41
                },
                {
                    "date": "2022-12-20",
                    "close": 23.09,
                    "open": 22.65,
                    "high": 23.6,
                    "low": 22.34
                },
                {
                    "date": "2022-12-21",
                    "close": 23.33,
                    "open": 22.95,
                    "high": 23.5476,
                    "low": 22.83
                },
                {
                    "date": "2022-12-22",
                    "close": 22.76,
                    "open": 23.43,
                    "high": 23.55,
                    "low": 22.74
                },
                {
                    "date": "2022-12-23",
                    "close": 23.3,
                    "open": 22.99,
                    "high": 23.58,
                    "low": 22.9
                }
            ]
        },
        "market": {
            "ticker": "URTH",
            "results": [
                {
                    "date": "2022-12-01",
                    "close": 115.82,
                    "open": 116.17,
                    "high": 116.38,
                    "low": 115.15
                },
                {
                    "date": "2022-12-02",
                    "close": 115.69,
                    "open": 114.44,
                    "high": 115.94,
                    "low": 114.44
                },
                {
                    "date": "2022-12-03",
                    "close": 113.63,
                    "open": 114.98,
                    "high": 115.2,
                    "low": 113.31
                },
                {
                    "date": "2022-12-04",
                    "close": 112.31,
                    "open": 113.59,
                    "high": 113.8,
                    "low": 111.74
                },
                {
                    "date": "2022-12-05",
                    "close": 112.17,
                    "open": 112.15,
                    "high": 112.74,
                    "low": 111.9
                },
                {
                    "date": "2022-12-06",
                    "close": 112.98,
                    "open": 112.62,
                    "high": 113.2,
                    "low": 112.14
                },
                {
                    "date": "2022-12-07",
                    "close": 112.4,
                    "open": 112.81,
                    "high": 113.49,
                    "low": 112.35
                },
                {
                    "date": "2022-12-08",
                    "close": 113.54,
                    "open": 112.62,
                    "high": 113.58,
                    "low": 112.36
                },
                {
                    "date": "2022-12-09",
                    "close": 113.86,
                    "open": 116.04,
                    "high": 116.04,
                    "low": 113.18
                },
                {
                    "date": "2022-12-10",
                    "close": 113.33,
                    "open": 113.89,
                    "high": 114.74,
                    "low": 112.5
                },
                {
                    "date": "2022-12-11",
                    "close": 110.43,
                    "open": 111.92,
                    "high": 112,
                    "low": 110.05
                },
                {
                    "date": "2022-12-12",
                    "close": 109.27,
                    "open": 109.71,
                    "high": 110.04,
                    "low": 108.6801
                },
                {
                    "date": "2022-12-13",
                    "close": 108.49,
                    "open": 109.46,
                    "high": 109.48,
                    "low": 108.06
                },
                {
                    "date": "2022-12-14",
                    "close": 108.76,
                    "open": 108.27,
                    "high": 109.21,
                    "low": 108.14
                },
                {
                    "date": "2022-12-15",
                    "close": 110.26,
                    "open": 109.47,
                    "high": 110.55,
                    "low": 109.36
                },
                {
                    "date": "2022-12-16",
                    "close": 108.89,
                    "open": 109.53,
                    "high": 109.56,
                    "low": 107.42
                },
                {
                    "date": "2022-12-17",
                    "close": 109.44,
                    "open": 108.64,
                    "high": 109.44,
                    "low": 108.24
                },
                {
                    "date": "2022-12-18",
                    "close": 109.18,
                    "open": 109.53,
                    "high": 109.93,
                    "low": 108.74
                },
                {
                    "date": "2022-12-19",
                    "close": 107.87,
                    "open": 109.3,
                    "high": 109.61,
                    "low": 107.86
                },
                {
                    "date": "2022-12-20",
                    "close": 109.74,
                    "open": 108.88,
                    "high": 109.969,
                    "low": 108.69
                },
                {
                    "date": "2022-12-21",
                    "close": 109.25,
                    "open": 108.94,
                    "high": 109.3025,
                    "low": 108.39
                },
                {
                    "date": "2022-12-22",
                    "close": 109.1,
                    "open": 110.04,
                    "high": 110.57,
                    "low": 108.39
                },
                {
                    "date": "2022-12-23",
                    "close": 110.17,
                    "open": 110.08,
                    "high": 110.65,
                    "low": 109.2
                }
            ]
        }
    }
}
```
