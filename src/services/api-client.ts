import axios, { AxiosRequestConfig } from "axios";
import { GameQuery } from "../components/gameQueryStore";

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiousInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "9c7b39113933420fb3734e7e6871b340",
  },
});

interface ParamsGame {
  params: {
    genres: GameQuery;
    parent_platforms: GameQuery;
    ordering: GameQuery;
    search: GameQuery;
  };
}

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiousInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };
}

export default APIClient;
