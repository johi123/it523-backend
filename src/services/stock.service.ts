import { Service } from 'typedi';
import axios from 'axios';
import { FOOTBALL_DATA_API_TOKEN, POLYGON_API_TOKEN, TEAM_ID } from '../configs/app.config';
import { FootballDataResponse, StockDataResponse } from '../types/types';

@Service()
export class StockService {
  getGames = async (dateFrom: string, dateTo: string): Promise<any> => {
    const response = await axios.get(`https://api.football-data.org/v4/teams/${TEAM_ID}/matches`, {
      headers: {
        "X-Auth-Token": FOOTBALL_DATA_API_TOKEN,
      },
      params: {
        dateFrom,
        dateTo,
        status: "FINISHED",
      }
    });

    return (response.data as FootballDataResponse).matches.map((match) => ({
      homeTeam: match.homeTeam,
      awayTeam: match.awayTeam,
      score: match.score,
      date: match.utcDate,
    }));
  };

  getStockData = async (dateFrom: string, dateTo: string) => {
    const stockDataMapper = (data: StockDataResponse) => {
      const fromDate = (new Date(dateFrom)).getTime();
      const toDate = (new Date(dateTo)).getTime();

      const results = data.results.map((e, index) => ({
        date: (new Date(fromDate + 86400000 * index)).toISOString().split("T")[0], // add a date to each entry (iterate over days)
        close: e.c,
        open: e.o,
        high: e.h,
        low: e.l,
      }));

      return {
        ticker: data.ticker,
        results,
      };
    };

    const responseTeam = await axios.get(`https://api.polygon.io/v2/aggs/ticker/MANU/range/1/day/${dateFrom}/${dateTo}`, {
      params: {
        apiKey: POLYGON_API_TOKEN,
        adjusted: "true",
        sort: "asc",
        limit: "120",
      },
    });

    const responseMarket = await axios.get(`https://api.polygon.io/v2/aggs/ticker/URTH/range/1/day/${dateFrom}/${dateTo}`, {
      params: {
        apiKey: POLYGON_API_TOKEN,
        adjusted: "true",
        sort: "asc",
        limit: "120",
      },
    });

    return {
      team: stockDataMapper(responseTeam.data as StockDataResponse),
      market: stockDataMapper(responseMarket.data as StockDataResponse),
    };
  };
}
