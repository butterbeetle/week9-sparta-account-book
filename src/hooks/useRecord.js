import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useShallow } from "zustand/react/shallow";
import api from "../api/api";
import useRecordStore from "../zustand/record.store";

export default function useRecord() {
  const queryClient = useQueryClient();
  let recordDatasByMonth = [];

  const { month, selectMonth } = useRecordStore(
    useShallow((state) => ({
      month: state.month,
      selectMonth: state.selectMonth,
    }))
  );

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

  if (records) {
    recordDatasByMonth = records.filter(
      (record) => +record.date.split("-")[1] === +month
    );
  }

  return {
    records,
    isLoading,
    createRecord,
    deleteRecord,
    updateRecord,
    month,
    selectMonth,
    recordDatasByMonth,
  };
}
