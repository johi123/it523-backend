export interface StockDataResponse {
  ticker: string;
  queryCount: number;
  resultsCount: number;
  adjusted: boolean;
  results?: (ResultsEntity)[] | null;
  status: string;
  request_id: string;
  count: number;
}
export interface ResultsEntity {
  date?: string;
  v: number;
  vw: number;
  o: number;
  c: number;
  h: number;
  l: number;
  t: number;
  n: number;

  close?: number;
  open?: number;
  high?: number;
  low?: number;
}


export interface FootballDataResponse {
  filters: Filters;
  resultSet: ResultSet;
  competition: Competition;
  matches?: (MatchesEntity)[] | null;
}
export interface Filters {
  season: string;
  matchday: string;
}
export interface ResultSet {
  count: number;
  first: string;
  last: string;
  played: number;
}
export interface Competition {
  id: number;
  name: string;
  code: string;
  type: string;
  emblem: string;
}
export interface MatchesEntity {
  area: Area;
  competition: Competition;
  season: Season;
  id: number;
  utcDate: string;
  status: string;
  minute: string;
  injuryTime: number;
  attendance?: number | null;
  venue?: string | null;
  matchday: number;
  stage: string;
  group?: null;
  lastUpdated: string;
  homeTeam: HomeTeam;
  awayTeam: AwayTeam;
  score: Score;
  goals?: (GoalsEntity)[] | null;
  penalties?: (PenaltiesEntity | null)[] | null;
  bookings?: (null)[] | null;
  substitutions?: (null)[] | null;
  odds: Odds;
  referees?: (RefereesEntity)[] | null;
}
export interface Area {
  id: number;
  name: string;
  code: string;
  flag: string;
}
export interface Season {
  id: number;
  startDate: string;
  endDate: string;
  currentMatchday: number;
  winner?: null;
  stages?: (string)[] | null;
}
export interface HomeTeam {
  id: number;
  name: string;
  shortName: string;
  tla: string;
  crest: string;
  coach: Coach;
  leagueRank: number;
  formation: string;
  lineup?: (null)[] | null;
  bench?: (null)[] | null;
}
export interface Coach {
  id: number;
  name: string;
  nationality?: string | null;
}
export interface AwayTeam {
  id: number;
  name: string;
  shortName: string;
  tla: string;
  crest: string;
  coach: Coach1;
  leagueRank: number;
  formation: string;
  lineup?: (null)[] | null;
  bench?: (null)[] | null;
}
export interface Coach1 {
  id?: number | null;
  name?: string | null;
  nationality?: string | null;
}
export interface Score {
  winner: string;
  duration: string;
  fullTime: FullTimeOrHalfTimeOrScore;
  halfTime: FullTimeOrHalfTimeOrScore;
}
export interface FullTimeOrHalfTimeOrScore {
  home: number;
  away: number;
}
export interface GoalsEntity {
  minute: number;
  injuryTime?: number | null;
  type: string;
  team: TeamOrScorerOrAssistOrPlayer;
  scorer: TeamOrScorerOrAssistOrPlayer;
  assist?: TeamOrScorerOrAssistOrPlayer1 | null;
  score: FullTimeOrHalfTimeOrScore;
}
export interface TeamOrScorerOrAssistOrPlayer {
  id: number;
  name: string;
}
export interface TeamOrScorerOrAssistOrPlayer1 {
  id: number;
  name: string;
}
export interface PenaltiesEntity {
  player: TeamOrScorerOrAssistOrPlayer;
  team: TeamOrScorerOrAssistOrPlayer;
  scored: boolean;
  score?: Score1 | null;
}
export interface Score1 {
  home?: null;
  away?: null;
}
export interface Odds {
  homeWin: number;
  draw: number;
  awayWin: number;
}
export interface RefereesEntity {
  id: number;
  name: string;
  type: string;
  nationality?: string | null;
}
