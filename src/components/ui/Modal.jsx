import styled from "styled-components";

const ModalSection = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 99;
  background-color: #7f7f7fd9;
`;

const ModalButton = styled.button`
  position: fixed;
  top: 0;
  right: 0;
  padding: 12px;
  margin: 4px;
  color: white;
  background-color: #2c2c2c;
  border-radius: 100%;
`;

export default function Modal({ children, onClose }) {
  return (
    <ModalSection
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <ModalButton onClick={() => onClose()}>X</ModalButton>
      <div>{children}</div>
    </ModalSection>
  );
}
