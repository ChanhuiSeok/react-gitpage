import React from 'react';
import styled from "styled-components";

import Zoom from 'react-reveal/Zoom';
import { useScrollFadeIn } from '../hooks';

const Container = styled.div`
  width:900px;
  height:600px;
  border-radius:20px;
  box-shadow:0px 0px 10px 10px rgba(0,0,0,0.05);
  padding:40px;
  background-color:white;
  text-align:center;
  position:relative;
  z-index:2;
  margin-bottom:100px;
  @media(max-width:700px){
    width:53%;
    height:350px;
  }
`;

const TitleContainer = styled.div`
  position:relative;
  z-index:1;
  top:30px;
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
const BlankImg = styled.div`
  margin-top:50px;
  width:100%;
  height:300px;
  background-color:#F1FAF9;
  border-radius:10px;
`;

const About = () => {
  const animatedItem = useScrollFadeIn();

  return (
    <div {...animatedItem}>

      <TitleContainer>
        <Title>PROJECT</Title>
      </TitleContainer>

      <Zoom>
        <Container>

        </Container>
      </Zoom>

    </div>
  );
};

export default About;