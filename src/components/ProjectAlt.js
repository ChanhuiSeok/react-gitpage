import React from 'react';
import styled from "styled-components";
import { useScrollFadeIn } from '../hooks';
import { Link } from "react-router-dom";

const Container = styled.div`
  margin:0 auto;
  text-align:center;
  margin-top:100px;
  margin-bottom:80px;
`;

const TitleContainer = styled.div`
  z-index:1;
  top:30px;
  left:-30px;
`;
const Title = styled.span`
  font-size:120px;
  font-weight:900;
  color:white;
  opacity:0.6;

  @media(max-width:700px){
    font-size:60px;
  }
`;
const Card = styled.div`
  width:70%;
  display:inline-block;
  margin:0 auto;
  text-align:center;
  border-radius:20px;
  padding:5px;
  z-index:2;
  margin-top:20px;
  @media (max-width:700px){
    width:80%;
  }
`;

const SubTitle = styled.span`
  margin-top:50px;
  letter-spacing :.3em;
  font-size:25px;
  font-weight:500;
  color:white;
  cursor:pointer;
`;

const ProjectAlt = () => {
  const animatedItem = useScrollFadeIn();

  return (
    <Container {...animatedItem}>

      <TitleContainer>
        <Title>PROJECTS</Title>
      </TitleContainer>
        <Card>
          <Link to={'/project'}>
            <SubTitle className='blinking'>Click here!</SubTitle>
          </Link>
        </Card>
    </Container>
  );
};

export default ProjectAlt;