import { useQuery } from "@tanstack/react-query";
import api from "../api/api";

export default function useRecord() {
  const { data: records, isLoading } = useQuery({
    queryKey: ["record"],
    queryFn: () => api.record.getRecord(),
  });
  return { records, isLoading };
}
