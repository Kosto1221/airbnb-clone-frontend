import { useQuery } from "@tanstack/react-query";
import { getMe } from "../api";

export default function useUser() {
  const { isLoading, data, isError } = useQuery({
    queryKey: ["me"],
    queryFn: getMe,
    retry: false,
  });
  console.log(isError);
  return {
    userLoading: isLoading,
    user: data,
    isLoggedIn: !isError,
  };
}
