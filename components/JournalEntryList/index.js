import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import { titles } from "../lib/data.json";

export default function JournalEntryList() {
  return (
    <Ul>
      {titles.map((title) => (
        <Li key={uuidv4()}>{title.name}</Li>
      ))}
    </Ul>
  );
}

const Ul = styled.ul`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: start;
  padding-left: 20px;
`;
const Li = styled.li`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: start;
  padding-left: 20px;
`;
