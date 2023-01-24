import Landingpage from "@/componentens/Landingpage";
import styled from "styled-components";
export default function HomePage() {
  return (
    <>
      {" "}
      <Title>Your Travel Journal App</Title>
      <Landingpage />
    </>
  );
}

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
