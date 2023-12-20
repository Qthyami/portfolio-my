import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";

export const About = () => {
    return (
        <StyledAbout>
            <Container>
                <FlexWrapper direction="column" align="flex-start">
                    <StyledAboutTitle>About mе</StyledAboutTitle>
                    <StyledAboutText>


                        Длинный курган был построен на земле, ранее населенной в мезолите. Он состоял из подпрямоугольного земляного тумула, оцениваемого в длину 15 метров (50 футов), с камерой, построенной из сарсеновых мегалитов на его восточном конце. В эту камеру в неолите были помещены как похороненные, так и кремированные человеческие останки, представляющие по меньшей мере девять или десять человек.
                    </StyledAboutText>
                </FlexWrapper>
            </Container>
        </StyledAbout>
    );
};

const StyledAboutTitle = styled.h1`
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 26px;
  letter-spacing: 0.96px;
  margin: 20px  30px ;
`;

const StyledAboutText = styled.p`
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0.72px;
  position: relative;
  padding-left: 30px; /* Подстройте по необходимости для расстояния между линией и текстом */

  /* Псевдоэлемент для вертикальной линии */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 5px;
    height: 100%; /* Подстройте по необходимости для высоты текста */
    
    border-radius: 2px;
    background: #5222D0;
  }
`
const StyledAbout=styled.section`
  min-height: 80vh;
  position: relative;
  display: flex;

  
`