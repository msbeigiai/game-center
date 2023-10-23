import { useQuery } from "@tanstack/react-query";
import useData from "./useData";
import apiClient from "../services/api-client";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () => apiClient.get("/platforms/lists/parent"),
  });
export default usePlatforms;
