import React from 'react';
import styled from "styled-components";
import Zoom from 'react-reveal/Zoom';

import { useScrollFadeIn } from '../hooks';

const Container = styled.div`
  width:900px;
  height:600px;
  border-radius:20px;
  padding:40px;
  border:7px solid white;
  text-align:center;
  position:relative;
  z-index:2;
  margin-bottom:100px;
  @media(max-width:700px){
    width:53%;
    margin-bottom:40px;
    height:350px;
  }
`;

const TitleContainer = styled.div`
  position:relative;
  z-index:1;
  top:0px;
  left:-30px;
`;
const Title = styled.span`
  font-size:120px;
  font-weight:900;
  cursor: pointer;
  color:white;
  opacity:0.6
`;
const ProfileImg = styled.img`
  width:20%;
  border-radius:10px;
`;
const Card = styled.div`
  width:40%;
  height:50%;
  background-color:white;
  opacity:0.5;
  border-radius:10px;
`;

const About = () => {
  const animatedItem = useScrollFadeIn();

  return (
    <div {...animatedItem}>

      <TitleContainer>
        <Title>INTERESTS</Title>
      </TitleContainer>
      <Zoom left>
        <Container>
          <Card></Card>
          <Card></Card>
        </Container>
      </Zoom>

    </div>
  );
};

export default About;