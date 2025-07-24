import { styled } from "styled-components";
const Myheader = styled.header`
  text-align: center;
  font-size: 1.5rem;
  padding: 1.5rem;
`;
export default function Header() {
  return (
    <Myheader>
      <h1>To-do list</h1>
    </Myheader>
  );
}
