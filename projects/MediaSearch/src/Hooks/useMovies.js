import { useState, useRef, useMemo, useCallback } from "react";
import { searchMovies } from "../services/movies";

export function useMovies({ query, sort }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const previousSearch = useRef(query);

  const getMovies = useCallback(async ({ query }) => {
    if (query === previousSearch.current) return;
    try {
      setLoading(true);
      setError(null);
      previousSearch.current = query;
      const newMovies = await searchMovies({ query });
      setMovies(newMovies);
    } catch (e) {
      setError(e.message);
    } finally {
      // se ejecuta tanto en el try como en el catch
      setLoading(false);
    }
  }, []);

  const sortedMovies = useMemo(() => {
    console.log("Memo sorted movies");
    if (query === "") {
      return;
    } else {
      return sort
        ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
        : movies;
    }
  }, [sort, movies, query]);

  return {
    movies: sortedMovies,
    getMovies,
    loading,
  };
}
