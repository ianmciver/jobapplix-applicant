import React from "react";
import styled from "styled-components";

const Screen = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  line-height: 3rem;
`;

const Message = styled.h1`
  font-size: 1.9rem;
`;

const SecondMessage = styled.h2`
  font-size: 1.6rem;
  margin-top: 30px;
`;

const Link = styled.a`
  text-decoration: none;
`;

export default function App() {
  return (
    <Screen>
      <Message>404 Page Not Found.</Message>
      <Message>Please check the address and try again.</Message>
      <SecondMessage>
        Find Out More About JobApplix{" "}
        <Link href="https://www.jobapplix.com">Here</Link>.
      </SecondMessage>
    </Screen>
  );
}
