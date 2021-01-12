import React from 'react';
import { HashRouter as Router, Route } from "react-router-dom"
import Home from "../routes/Home"
import Detail from "../routes/Detail"
import Project from "../routes/Project"
import { createGlobalStyle } from 'styled-components'
import ScrollTop from './ScrollTop'

const GlobalStyles = createGlobalStyle`
  body {
  font-family: 'Noto Sans KR', 'Apple SD Gothic NEO', 'NanumSquareRound', '삼성 고딕', 'LG스마트 고딕', '나눔 고딕', 'Dotum', '맑은 고딕', sans-serif;
  font-weight:400;
  min-height: 100vh;
  margin: 0;  
  background:
  radial-gradient(
  farthest-side at bottom left,
  rgba(7, 195, 226, 0.5), 
  transparent
),
radial-gradient(
  farthest-corner at top left,
  rgba(238, 84, 231, 0.6), 
  transparent 60%
),
radial-gradient(
  farthest-corner at top right,
  rgba(250, 247, 136, 0.3), 
  transparent 40%
),
radial-gradient(
  farthest-corner at bottom right,
  rgba(250, 247, 136, 0.5), 
  transparent 60%
);
  background-color: #184E9E;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow:hidden;

  animation: fadein 1s;
  }

  @keyframes fadein{
    0% {opacity:0;}
    100% {opacity:1;}
  }

`;

function App() {
  return (
    <>
      <GlobalStyles />
      <Router basename={"/react-gitpage"}>
          <Route exact path="/" component={Home} />
          <Route exact path="/detail" component={Detail} />
          <Route exact path="/project" component={Project} />
      </Router>
    </>
  );
}
export default App;
