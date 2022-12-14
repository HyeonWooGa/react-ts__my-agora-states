import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import { createGlobalStyle } from "styled-components";
import App from "./App";

const GlobalStyle = createGlobalStyle`
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
`;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <GlobalStyle />
      <App />
    </RecoilRoot>
  </React.StrictMode>
);
