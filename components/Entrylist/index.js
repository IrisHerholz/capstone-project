import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { entries } from "../lib/data.json";

export default function Entries() {
  retirn(
    <ul>
      {entries.map((entry) => (
        <li key={uuidv4()}>{entry.name}</li>
      ))}
    </ul>
  );
}
