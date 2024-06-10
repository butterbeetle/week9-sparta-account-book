import Calendar from "../../components/Calendar";
import DataInputForm from "../../components/DataInputForm";
import RecordsList from "../../components/RecordsList";
import TotalOutlay from "../../components/TotalOutlay";

export default function HomePage() {
  return (
    <>
      <DataInputForm />
      <Calendar />
      <TotalOutlay />
      <RecordsList />
    </>
  );
}
