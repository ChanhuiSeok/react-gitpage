import React from 'react';
import styled from "styled-components";
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import '../routes/Home.css';
import { useScrollFadeIn } from '../hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const Container = styled.div`
  margin:0 auto;
  text-align:center;
  margin-bottom:200px;
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
    font-size:70px;
  }
`;
const ProfileImg = styled.img`
  width:30%;
  border-radius:10px;
  @media (max-width:700px){
    width:40%;
  }
`;

const Card = styled.div`
  width:70%;
  display:inline-block;
  border-radius:20px;
  box-shadow:0px 0px 10px 10px rgba(0,0,0,0.05);
  padding:5px;
  padding-top:50px;
  background-color:white;
  text-align:center;
  z-index:2;
  margin-top:20px;
  @media (max-width:700px){
    width:80%;
  }
`;

const TextDiv = styled.div`
  margin:20px;
`;
const Name = styled.p`
  font-size:25px;
  font-weight:700;
  @media(max-width:700px){
    font-size:20px;
  }
`;
const TextTitle = styled.p`
  margin-top:20px;
  font-size:18px;
  @media(max-width:700px){
    margin-top:16px;
    font-size:16px;
  }
`;
const Text = styled.p`
  margin-top:16px;
  margin-bottom:20px;
  font-size:18px;
  @media(max-width:700px){
    margin-top:13px;
    font-size:16px;
  }
`;
const Greet = styled.div`
  margin:0 auto;
  max-width:700px;
  margin-bottom:7px;
  line-height:23px;
  text-align: justify;
  font-weight:300;
  @media(max-width:700px){
    font-weight:300;
    font-size:13.5px;
  }
`;
const Greet2 = styled.div`
  margin:0 auto;
  max-width:700px;
  margin-bottom:40px;
  line-height:23px;
  text-align: justify;
  font-weight:300;
  @media(max-width:700px){
    font-weight:300;
    font-size:13.5px;
  }
`;

const About = () => {
  const animatedItem = useScrollFadeIn();

  return (
    <Container {...animatedItem}>

      <TitleContainer>
        <Title>ABOUT</Title>
      </TitleContainer>
      <Zoom left>
        <Card>
          <div>
            <ProfileImg src={'profile.png'}></ProfileImg>
          </div>
          <TextDiv>
              <Name>석찬희(Chanhui Seok)</Name>
              <TextTitle>경북대학교 컴퓨터학부 졸업예정(2015~2021)</TextTitle>
              <Text style={{color:'#1b556e'}}><FontAwesomeIcon icon={faPaperPlane}/> 가치 있는 성장을 하는 Frontend 개발자</Text>
              
              <Greet>
              👍 중학생 때부터 취미로 포토샵 등 그래픽 툴을 다뤄왔는데, 그 때부터 컴퓨터에서 무언가 디자인을 하는 것이 취미가 되었습니다.
              그리고 이러한 취미는 각종 소프트웨어의 UI나 웹 페이지 view 개발처럼 사용자가 직접 보는 부분을 개발하는 데에 관심을 갖는 계기가 되었습니다.
              </Greet>
              <Greet2>
              ✌ 특히 인터넷을 사용할 때 브라우저에서 보여지는 모든 부분들을 직접 만들 수 있다는 것이 큰 매력으로 다가왔고, 
              관련 공부를 하는 내내 흥미를 가지면서 내용을 익힐 수 있었습니다.
              </Greet2>

          </TextDiv>
        </Card>
      </Zoom>

    </Container>
  );
};

export default About;