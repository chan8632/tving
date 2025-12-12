import { useQuery } from "@tanstack/react-query";
import { instance } from "../api/api";

const fetchPopularMovies = async () => {
  return await instance.get("popular");
};

export const usePopularMovies = () => {
  return useQuery({
    queryKey: ["popular"],
    queryFn: () => fetchPopularMovies(),
    select: (result) => result.data,
  });
};
