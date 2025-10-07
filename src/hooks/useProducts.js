import { useQuery } from "@tanstack/react-query";
import api from "../api/axios";

export const useProducts = (page = 2, limit = 4) => {
  return useQuery({
    queryKey: ["products"], // same data for all pages
    queryFn: async () => {
      const { data } = await api.get("/products");
      return data;
    },
    select: (data) => {
      const start = (page - 1) * limit;
      const end = start + limit;
      return data.slice(start, end);
    },
  });
};
