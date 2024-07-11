import { useQuery } from "@tanstack/react-query";
import { USER_KEY } from "../queryKeys/queryKeys";
import { Login } from "../api/axiosApi";

export const useLoginQuery = () => {
  const { data } = useQuery({
    queryKey: [USER_KEY.LOGIN],
    queryFn: () => Login,
    staleTime: Infinity,
  });

  return data;
};
