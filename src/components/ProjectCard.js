import React from 'react';
import styled from "styled-components";
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import { useScrollFadeIn } from '../hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import { faPython, faJs } from '@fortawesome/free-brands-svg-icons'

const Container = styled.div`
  margin:0 auto;
  text-align:center;
  margin-bottom:250px;
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
  opacity:0.9;

  @media(max-width:700px){
    font-size:60px;
  }
`;

const Card = styled.div`
  width:950px;
  display:inline-block;
  margin:0 auto;
  border-radius:20px;
  z-index:2;
  margin-top:20px;
  @media (max-width:700px){
    width:95%;
  }
`;

const Cards = styled.div`
  text-align:left;
  border-radius:10px;
  background-color: rgba( 0,0,0, 0.7 );
  color:white;
  width:95%;
  height:200px;
  padding:20px;
  @media (max-width:700px){
    padding:10px;
    height:100%;
  }
`;

const CardsTitle = styled.p`
  margin:10px;
  font-size:27px;
  @media (max-width:700px){
    font-size:19px;
  }
`;

const CardsSubTitle = styled.p`
  margin:10px;
  font-weight:100;
  font-size:17px;
  @media (max-width:700px){
    font-size:14px;
  }
`;

const Greet = styled.div`
  max-width:90%;
  margin-left:10px;
  margin-bottom:7px;
  line-height:23px;
  text-align: justify;
  font-weight:100;
  @media(max-width:700px){
    font-weight:100;
    font-size:13px;
  }
`;

const ProjcetCard = () => {

  return (
      <Container>

        <TitleContainer>
          <Title>PROJECTS</Title>
        </TitleContainer>

        <Fade left>
        <Card>
          {/* 1. 학부연구생 */}
          <Cards style={{ backgroundSize: 'cover', backgroundImage: "url('/ytest.png')" }}>
            <CardsTitle>Secure Memory Overhead 분석</CardsTitle>
            <CardsSubTitle>기간 : 2019.01 ~ 2019.12 </CardsSubTitle>
            <CardsSubTitle>사용언어 : <FontAwesomeIcon icon={faCopyright} /> / <FontAwesomeIcon icon={faPython} /></CardsSubTitle>

          </Cards>
        </Card>
        <Card>
          {/* 2. 경북대 코로나 알리미 */}
          <Cards style={{ backgroundSize: 'cover', backgroundImage: "url('/ytest.png')" }}>
            <CardsTitle>경북대 코로나 알리미 제작</CardsTitle>
            <CardsSubTitle>기간 : 2019.01 ~ 2019.12 </CardsSubTitle>
            <CardsSubTitle>사용언어 : <FontAwesomeIcon icon={faCopyright} /> / <FontAwesomeIcon icon={faPython} /></CardsSubTitle>

          </Cards>
        </Card>
        <Card>
          {/* 3. 제3회 부산 ICT융합 해커톤 */}
          <Cards style={{ backgroundSize: 'cover', backgroundImage: "url('/ytest.png')" }}>
            <CardsTitle>제3회 부산 ICT융합 해커톤</CardsTitle>
            <CardsSubTitle>기간 : 2019.01 ~ 2019.12 </CardsSubTitle>
            <CardsSubTitle>사용언어 : <FontAwesomeIcon icon={faCopyright} /> / <FontAwesomeIcon icon={faPython} /></CardsSubTitle>

          </Cards>
        </Card>
        <Card>
          {/* 4. 제 5회 글로벌 이노베이터 페스타 */}
          <Cards style={{ backgroundSize: 'cover', backgroundImage: "url('/ytest.png')" }}>
            <CardsTitle>제 5회 글로벌 이노베이터 페스타</CardsTitle>
            <CardsSubTitle>기간 : 2019.01 ~ 2019.12 </CardsSubTitle>
            <CardsSubTitle>사용언어 : <FontAwesomeIcon icon={faCopyright} /> / <FontAwesomeIcon icon={faPython} /></CardsSubTitle>

          </Cards>
        </Card>
        <Card>
          {/* 5. UNIST X Naver D2SF X 멋쟁이사자처럼 해커톤 */}
          <Cards style={{ backgroundSize: 'cover', backgroundImage: "url('/ytest.png')" }}>
            <CardsTitle>UNIST X Naver D2SF X 멋쟁이사자처럼 해커톤</CardsTitle>
            <CardsSubTitle>기간 : 2019.01 ~ 2019.12 </CardsSubTitle>
            <CardsSubTitle>사용언어 : <FontAwesomeIcon icon={faCopyright} /> / <FontAwesomeIcon icon={faPython} /></CardsSubTitle>

          </Cards>
        </Card>
        <Card>
          {/* 6. Kartinfo */}
          <Cards style={{ backgroundSize: 'cover', backgroundImage: "url('/ytest.png')" }}>
            <CardsTitle>React와 GraphQL로 Kartinfo 웹페이지 제작</CardsTitle>
            <CardsSubTitle>기간 : 2019.01 ~ 2019.12 </CardsSubTitle>
            <CardsSubTitle>사용언어 : <FontAwesomeIcon icon={faCopyright} /> / <FontAwesomeIcon icon={faPython} /></CardsSubTitle>

          </Cards>
        </Card>
        </Fade>
      </Container>
    
  );
};

export default ProjcetCard;