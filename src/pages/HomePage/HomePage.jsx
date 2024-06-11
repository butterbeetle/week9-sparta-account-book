import Calendar from "../../components/Calendar";
import CreateRecordData from "../../components/CreateRecordData";
import RecordsList from "../../components/RecordsList";
import TotalOutlay from "../../components/TotalOutlay";

export default function HomePage() {
  return (
    <>
      <CreateRecordData />
      <Calendar />
      <TotalOutlay />
      <RecordsList />
    </>
  );
}
