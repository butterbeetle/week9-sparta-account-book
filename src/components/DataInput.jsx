import { useSelector } from "react-redux";
import styled from "styled-components";

const Div = styled.div`
  position: relative;
`;

const Span = styled.span`
  top: 4px;
  right: 24px;
  font-size: 12px;
  line-height: 24px;
  user-select: none;
  color: #a1a1aa;
`;

const Label = styled.label`
  position: absolute;
  top: 16px;
  left: 24px;
  font-size: 16px;
  line-height: 24px;
  user-select: none;
  color: #a1a1aa;
  transform: translateY(-12px) scale(0.75);
  transform-origin: 0;
`;

const Input = styled.input`
  display: block;
  padding: 24px;
  padding-bottom: 1px;
  width: 100%;
  font-size: 16px;
  line-height: 24px;
  appearance: none;

  &:focus {
    outline: none;
  }

  border: 1px solid #0a0426;
  border-radius: 8px;
  font-size: 16px;
  color: #0a0426;
  background-color: #fffafc;
  outline: none;
  transition: border-color 0.3s, box-shadow 0.3s;

  ${(props) =>
    props.type === "date" &&
    `&:hover{
      },
      &::-webkit-calendar-picker-indicator {
        filter: invert(20%);
        cursor: pointer;
      }
    `}

  &:hover {
    transition-duration: 150ms;
    box-shadow: 0 2px 5px rgba(43, 2, 2, 0.5);
  }
`;

const P = styled.p`
  position: absolute;
  top: 4px;
  left: 48px;
  font-size: 12px;
  line-height: 24px;
  color: red;
  cursor: default;
  user-select: none;
`;

export default function DataInput({
  id,
  type = "text",
  label,
  inputData,
  setInputData,
}) {
  const { errorData } = useSelector((state) => state.error);
  const maxLength = id === "content" ? 30 : 8;

  const onChangeHandler = (value) => {
    setInputData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  return (
    <Div>
      <Input
        id={id}
        type={type}
        value={inputData}
        autoFocus={id === "category"}
        placeholder=""
        maxLength={maxLength}
        onChange={(e) => onChangeHandler(e.target.value)}
      />
      <Label htmlFor={id}>{label}</Label>
      {errorData[id] && (
        <P className="">{`${
          type === "date" ? "를" : "을"
        } 제대로 입력해주세요.`}</P>
      )}
      {type !== "date" && (
        <Span className="absolute top-0 right-0">{`${
          (inputData + "").length
        }/${maxLength}`}</Span>
      )}
    </Div>
  );
}
