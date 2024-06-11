import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import api from "../api/api";

export default function useRecord() {
  const queryClient = useQueryClient();

  const { data: records, isLoading } = useQuery({
    queryKey: ["record"],
    queryFn: () => api.record.getRecords(),
  });

  const { mutateAsync: createRecord } = useMutation({
    mutationFn: (newRecordData) => api.record.createRecord(newRecordData),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["record"] }),
  });

  const { mutateAsync: deleteRecord } = useMutation({
    mutationFn: (deletedRecordId) => api.record.deleteRecord(deletedRecordId),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["record"] }),
  });

  const { mutateAsync: updateRecord } = useMutation({
    mutationFn: (newRecordData) => api.record.updateRecord(newRecordData),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["record"] }),
  });

  return { records, isLoading, createRecord, deleteRecord, updateRecord };
}
