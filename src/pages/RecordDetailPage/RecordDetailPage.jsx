import styled from "styled-components";
import DataInputForm from "../../components/DataInputForm";
const MainDiv = styled.div`
  padding: 12px;
  max-width: 800px;
  min-height: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
export default function RecordDetailPage() {
  return (
    <MainDiv>
      <DataInputForm />
    </MainDiv>
  );
}
