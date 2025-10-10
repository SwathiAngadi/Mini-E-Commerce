import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useProductById = (id) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
      return data;
    },
    enabled: !!id, // only runs if id is defined
  });
};
