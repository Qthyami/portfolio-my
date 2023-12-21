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
                        Когда усталость валит с ног
                        И спится на ходу
                        Когда молчит дверной звонок
                        И чай не греет
                        И даже мой любимый пёс
                        Поджав свой хвост
                        Добра не ждёт

                        Когда усталость валит с ног
                        И спится на ходу
                        Когда молчит дверной звонок
                        И чай не греет
                        И даже мой любимый пёс
                        Поджав свой хвост
                        Добра не ждёт

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
    display: inline-block;
    top: 0;
    left: 0;
    width: 5px;
    height: 100%; /* Подстройте по необходимости для высоты текста */
    
    border-radius: 2px;
    background: #5222D0;
  }
`
const StyledAbout=styled.section`
  min-height: 100%;
  position: relative;
  display: flex;
  margin-bottom: 140px;
  

  
`