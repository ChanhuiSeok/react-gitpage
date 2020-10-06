import React from 'react';
import './Home.css';
import styled from "styled-components";
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';
import About from '../components/About';
import Interests from '../components/Interests';
import Project from '../components/Project';
import { Link } from "react-router-dom";
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faMicroblog } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faLaptopCode, faNetworkWired } from '@fortawesome/free-solid-svg-icons'


const Cube = styled.div`
  margin-top:400px;
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
  margin-bottom:80px;
`;

const SubTitle = styled.span`
  margin-top:50px;
  letter-spacing :.3em;
  font-size:25px;
  font-weight:100;
  color:white;
  cursor:pointer;
`;

const Footer = styled.div`
  postion:absolute;
  bottom:0;
  color:white;
  text-align:center;
`;

const FooterText = styled.span`
  font-size:10px;
  opacity:0.8;
  font-weight:100;
`;

const Home = () => {

  $(document).ready(function () {
    var stars = 700;
    var $stars = $(".stars");
    var $face = $(".face");

    var r = 700;
    for (var i = 0; i < stars; i++) {
      var $star = $("<div/>").addClass("star");
      $stars.append($star);
    }
    $(".star").each(function () {
      var cur = $(this);
      var s = 0.2 + (Math.random() * 1);
      var curR = r + (Math.random() * 300);
      cur.css({
        transformOrigin: "0 0 " + curR + "px",
        transform: " translate3d(0,0,-" + curR + "px) rotateY(" + (Math.random() * 360) + "deg) rotateX(" + (Math.random() * -50) + "deg) scale(" + s + "," + s + ")"

      })
    })
    $('body').css('overflow','hidden');
  });

  return (
    <>
      <div className="stars">
      </div>
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
        <Link to={'/detail'} style={{marginTop:'50px'}}>
          <SubTitle className='blinking'>Click here for Exploring</SubTitle>
        </Link>
        <SubTitle style={{opacity:0.8, fontSize:'35px'}}><a href='https://github.com/chanhuiseok'><FontAwesomeIcon icon={faGithub}/></a>
        <a href='mailto:chanhuicom@gmail.com'> <FontAwesomeIcon icon={faEnvelope}/></a>
        <a href='https://chanhuiseok.github.io/'> <FontAwesomeIcon icon={faMicroblog}/></a>
        </SubTitle>
      </Container>
      <About></About>
      <Interests></Interests>
      <Project></Project>

      <Footer><FooterText>chanhuiseok</FooterText></Footer>
    </>
  );
};

export default Home;