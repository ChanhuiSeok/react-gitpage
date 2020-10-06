import React from 'react';
import { HashRouter as Router, Route } from "react-router-dom"
import Home from "../routes/Home"
import Detail from "../routes/Detail"
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  body {
  min-height: 150vh;
  margin: 0;  
  background: radial-gradient(
  farthest-side at bottom left,
  rgba(255, 0, 255, 0.5), 
  transparent
),
  radial-gradient(
  farthest-corner at top right,
  rgba(243, 229, 58, 0.5), 
  transparent 70%
);
  background-color: #4ABAE4 ;
  font-family: 'Roboto', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
