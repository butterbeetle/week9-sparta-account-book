import Calendar from "../../components/Calendar";
import DataInputForm from "../../components/DataInputForm";
import RecordsList from "../../components/RecordsList";
import TotalOutlay from "../../components/TotalOutlay";

export default function HomePage() {
  return (
    <main className="p-3 max-w-[800px] min-h-[800px] mx-auto flex flex-col gap-3">
      <DataInputForm />
      <Calendar />
      <TotalOutlay />
      <RecordsList />
    </main>
  );
}
