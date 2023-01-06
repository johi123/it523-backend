import {config} from 'dotenv';

config();

export const appPort = process.env.APP_PORT || "4002";

export const FOOTBALL_DATA_API_TOKEN = process.env.FOOTBALL_DATA_API_TOKEN;
export const POLYGON_API_TOKEN = process.env.POLYGON_API_TOKEN;

export const TEAM_ID = process.env.TEAM_ID || "66";

if (!FOOTBALL_DATA_API_TOKEN || !POLYGON_API_TOKEN) {
  throw new Error("Did you forget to add the api keys?");
}
