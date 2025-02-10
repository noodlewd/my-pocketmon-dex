import React from "react";
import Router from "./shared/Router";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

// 전역 스타일 reset
const GlobalStyle = createGlobalStyle`
${reset}
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
};

export default App;
