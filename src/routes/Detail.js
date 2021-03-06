import React from 'react';
import './Home.css';
import styled from "styled-components";
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';
import About from '../components/About';
import Interests from '../components/Interests';
import ProjectAlt from '../components/ProjectAlt';
import { Link } from "react-router-dom";
import $ from 'jquery';
const Head = styled.div`
  position:absolute;
  top:5%;
  left:10%;
  color:white;
  font-size:15px;
  font-weight:100;
`;

const Cube = styled.div`
  margin-top:200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  @media(max-width:700px){
    margin-top:250px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom:200px;
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

const SubTitle = styled.span`
  margin-top:50px;
  letter-spacing :.3em;
  font-size:25px;
  font-weight:400;
  color:white;
  cursor:pointer;
`;


const Footer = styled.div`
  postion:absolute;
  bottom:0;
  color:white;
  text-align:center;
  margin:10px;
`;

const FooterText = styled.span`
  font-size:13px;
  opacity:0.8;
  font-weight:100;
`;

const Detail = () => {
  $(document).ready(function () {
    $('body').css('overflow','auto');
  });
  return (
    <>
    <Head>
    <span style={{opacity:'0.5'}}><Link to={'/'}>Home</Link></span> > <span><Link to={'/detail'}>Detail </Link></span>
      > <span style={{opacity:'0.5'}}><Link to={'/project'}>Projects</Link></span>
    </Head>
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
        <SubTitle className='blinking'>화면을 스크롤해 보세요</SubTitle>
        <SubTitle className='blinking1'>∨</SubTitle>
        <SubTitle className='blinking2' style={{marginTop:'-1px'}}>∨</SubTitle>
        <SubTitle className='blinking3' style={{marginTop:'-1px'}}>∨</SubTitle>
      </Container>
      <About></About>
      <Interests></Interests>
      <ProjectAlt></ProjectAlt>

      <Footer><FooterText>chanhuiseok</FooterText></Footer>
    </>
  );
};

export default Detail;