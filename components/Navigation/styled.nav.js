import styled from "styled-components";
import Link from "next/link";


export const StyledNextLink = styled(Link)`
  padding: 10px;
  margin: 10px;
  border-radius: 1rem;
  &.active {
    background-color: lightblue;
  }
`;
