import { Movie, MovieResponse } from "@/types/typing";

const api_key = process.env.TMDB_ACCESS_TOKEN;

async function fetchFromTMDB(url: URL, cacheTire?: number) {
  url.searchParams.set("include_adult", "false");
  url.searchParams.set("include_video", "false");
  url.searchParams.set("sort_by", "popularity.desc");
  url.searchParams.set("language", "en-us");
  url.searchParams.set("page", "1");

  const options: RequestInit = {
    method: "GET",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      Authorization: `Bearer ${api_key}`,
    },
    next: {
      revalidate: cacheTire || 60 * 60 * 24, //24 hours
    },
  };

  try {
    const response = await fetch(url, options);
    const data = (await response.json()) as MovieResponse;

    if (response.ok) {
      return data;
    } else if (!response.ok) {
      console.log("err :", data);
      throw new Error("No internet connection or an error occured");
    }
  } catch (error) {
    console.log("error : ", error);
    return;
  }
}

export async function getUpcomingMovies() {
  const url = new URL("https://api.themoviedb.org/3/movie/upcoming");

  const data = await fetchFromTMDB(url);
  if (data) {
    return data.results;
  } else {
    return [];
  }
}
export async function getTopRatedMovies() {
  const url = new URL("https://api.themoviedb.org/3/movie/top_rated");

  const data = await fetchFromTMDB(url);

  if (data) {
    return data.results;
  } else {
    return [];
  }
}
export async function getPopularMovies() {
  const url = new URL("https://api.themoviedb.org/3/movie/popular");

  const data = await fetchFromTMDB(url);

  if (data) {
    return data.results;
  } else {
    return [];
  }
}

export async function getDiscoverMovies(id?: string, keywords?: string) {
  const url = new URL("https://api.themoviedb.org/3/discover/movie");

  keywords && url.searchParams.set("with_keywords", keywords);
  id && url.searchParams.set("with_genres", id);

  const data = await fetchFromTMDB(url);
  if (data) {
    return data.results;
  } else {
    return [];
  }
}
export async function getSearchMovies(term: string) {
  const url = new URL("https://api.themoviedb.org/3/search/movie");

  url.searchParams.set("query", term);
  const data = await fetchFromTMDB(url);

  if (data) {
    return data.results;
  } else {
    return [];
  }
}
