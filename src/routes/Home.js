import React from 'react';
import './Home.css';
import styled from "styled-components";
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';
import About from '../components/About';

const Cube = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Title = styled.span`
  font-size:75px;
  font-weight:800;
  color:white;
  @media(max-width:800px){
    font-size:45px;
  }
`;

const Nextbutton = styled.button`
  
`;


const Home = () => {

  return (
    <>
      <Zoom>
        <Cube>
          <figure>
            <div className="face front">
              <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
            </div>

            <div className="face top">
              <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
            </div>

            <div className="face right">
              <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
            </div>

            <div className="face left">
              <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
            </div>

            <div className="face bottom"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
            </div>

            <div className="face back"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
            </div>
          </figure>
        </Cube>
      </Zoom>
      <Container>
        <Bounce>
          <Title className='title'>CHANHUI SEOK</Title>
        </Bounce>
      </Container>
      <Nextbutton className='scroll'>눌러보세요</Nextbutton>
      <About></About>
    </>
  );
};

export default Home;