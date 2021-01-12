import React from 'react';
import styled from "styled-components";
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import { useScrollFadeIn } from '../hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

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
  opacity:0.6;

  @media(max-width:700px){
    font-size:60px;
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
  margin:0 auto;
  text-align:center;
  border-radius:20px;
  z-index:2;
  margin-top:20px;
  @media (max-width:700px){
    width:80%;
  }
`;

const Cards = styled.div`
  border-radius:10px;
  display:inline-block;
  background-color: rgba( 0,0,0, 0.5 );
  color:white;
  width:44%;
  height:45%;
  padding:17px;
  margin:8px;
  @media (max-width:700px){
    width:85%;
  }
`;

const CardsTitle = styled.p`
  margin:10px;
  font-size:28px;
`;
const CardsText = styled.p`
  font-size:18px;
  font-weight:400;
  @media (max-width:700px){
    font-size:15px;
  }
`;
const CardsSubText = styled.p`
  margin-top:10px;
  font-size:15px;
  font-weight:400;
  @media (max-width:700px){
    font-size:12px;
  }
`;

const ItemImg = styled.img`
  width:130px;
  height:130px;
`;

const Interests = () => {
  const animatedItem = useScrollFadeIn();

  return (
    <Container {...animatedItem}>

      <TitleContainer>
        <Title>INTERESTS</Title>
      </TitleContainer>
      <Zoom left>
        <Card>
          <Cards>
            <ItemImg src={'javascript.png'}></ItemImg>
            <CardsTitle>JavaScript</CardsTitle>
            <CardsText>프론트엔드에서 빠질 수 없는 자바스크립트</CardsText>
            <CardsSubText>기본 원리부터 알아가기 위해 노력하고 있습니다</CardsSubText>
            </Cards>
          <Cards>
            <ItemImg src={'react.png'}></ItemImg>
            <CardsTitle>React</CardsTitle>
            <CardsText>모던 웹의 필수 자바스크립트 라이브러리</CardsText>
            <CardsSubText>React로 웹페이지를 재미있게 만들고 있습니다</CardsSubText>
            </Cards>
          <Cards>
            <ItemImg src={'GraphQL.png'}></ItemImg>
            <CardsTitle>GraphQL</CardsTitle>
            <CardsText>REST API를 대체할 수 있는 쿼리언어</CardsText>
            <CardsSubText>서버로부터 데이터를 간편하게 가져올 수 있습니다</CardsSubText>
            
            </Cards>
          <Cards><ItemImg src={'photoshop.png'}></ItemImg>
            <CardsTitle>Photoshop</CardsTitle>
            <CardsText>컨텐츠 제작에 빠질 수 없는 디자인 툴</CardsText>
            <CardsSubText>After Effects로 영상을 만드는 것에도 관심이 많습니다</CardsSubText>
          </Cards>
        </Card>
      </Zoom>

    </Container>
  );
};

export default Interests;