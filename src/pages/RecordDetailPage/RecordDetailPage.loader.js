import api from "../../api/api";

export default async function RecordDetailPageLoader({ params }) {
  const { recordId } = params;

  const data = await api.record.getRecord(recordId);
  // console.log(data);
  return data;
}
