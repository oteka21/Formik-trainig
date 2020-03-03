import styled from "styled-components";

export const CustomField = styled.input`
  width: 100%;
  margin: 4px;
  border: ${props => (props.error ? "1px solid red" : " 1px solid #e3e3e3")};
  padding: 8px;
  border-radius: 3px;
  font-size: 20px;
  box-sizing: border-box;
`;

export const CustomSelect = styled.select`
width: 100%;
margin: 4px;
border: ${props => (props.error ? "1px solid red" : " 1px solid #e3e3e3")};
padding: 8px;
border-radius: 3px;
font-size: 20px;
box-sizing: border-box;
`;
