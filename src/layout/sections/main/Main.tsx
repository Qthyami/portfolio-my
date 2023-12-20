import React from 'react';
import ken from "../../../assets/ken.png"
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";
export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-around"} >
                    <div>
                        <SmallText>Hi There</SmallText>
                        <Name>I am Anton</Name>
                        <MainTitle>FRONTEND DEVELOPER</MainTitle>

                    </div>
                    <PhotoWrapper>
                        <Photo src={ken} alt={"avatar"}/>
                    </PhotoWrapper>

                </FlexWrapper>
            </Container>


        </StyledMain>
    );
};

const StyledMain=styled.section`
  min-height: 80vh;
  background-color: #b7874d;
  position: relative;
  display: flex;

`

const Photo=styled.img`
  max-width: 534px;
  max-height: 400px;
  object-fit: cover;

`
const MainTitle=styled.h1`
  font-size: 27px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`
const Name=styled.h2`
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 2.5px;
  color:${theme.colors.secondaryColor} ;
  margin: 10px 0;
`

const SmallText=styled.span`
  font-family: Tinos;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`
const PhotoWrapper=styled.div`
  position: relative;
  z-index: 1;
  &::before{
    content:"";
    width: 412px;
    height: 448px;
    border: 5px solid ${theme.colors.secondaryColor};

    position: absolute;
    top:-24px;
    right:-36px;
    z-index: -1;

  }
`