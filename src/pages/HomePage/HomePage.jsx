import styled from "styled-components";
import Calendar from "../../components/Calendar";
import DataInputForm from "../../components/DataInputForm";
import RecordsList from "../../components/RecordsList";
import TotalOutlay from "../../components/TotalOutlay";

const MainDiv = styled.div`
  padding: 12px;
  max-width: 800px;
  min-height: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export default function HomePage() {
  return (
    <MainDiv>
      <DataInputForm />
      <Calendar />
      <TotalOutlay />
      <RecordsList />
    </MainDiv>
  );
}
