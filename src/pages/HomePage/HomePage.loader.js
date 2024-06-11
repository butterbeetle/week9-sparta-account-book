import api from "../../api/api";

export default async function homePageLoader() {
  const data = await api.record.getRecords();
  // console.log(data);
  return data;
}
