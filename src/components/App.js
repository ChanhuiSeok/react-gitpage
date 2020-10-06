import React from 'react';
import { HashRouter as Router, Route } from "react-router-dom"
import Home from "../routes/Home"
import Detail from "../routes/Detail"
import { createGlobalStyle } from 'styled-components'
import ScrollTop from './ScrollTop'

const GlobalStyles = createGlobalStyle`
  body {
  font-family: 'Noto Sans KR', serif;
  min-height: 100vh;
  margin: 0;  
  background:
  radial-gradient(
  farthest-side at bottom left,
  rgba(165, 129, 243, 0.5), 
  transparent
),
radial-gradient(
  farthest-corner at top right,
  rgba(0,189,231, 0.1), 
  transparent 30%
),
radial-gradient(
  farthest-corner at bottom right,
  rgba(32,129,215, 0.5), 
  transparent 60%
);
  background-color: #12143B;
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
      <Router>
          <Route exact path="/" component={Home} />
          <Route exact path="/detail" component={Detail} />
      </Router>
    </>
  );
}
export default App;
