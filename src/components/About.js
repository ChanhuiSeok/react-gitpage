import React from 'react';
import styled from "styled-components";

import { useScrollFadeIn } from '../hooks';

const Container = styled.div`
  width:1000px;
  height:600px;
  border-radius:20px;
  background-color:white;
  @media(max-width:700px){
    width:100%;
  }
`;

const About = () => {
  const animatedItem = useScrollFadeIn();

  return (
    <div {...animatedItem}>
      <Container>
        ddddddd
      </Container>
    </div>
  );
};

export default About;