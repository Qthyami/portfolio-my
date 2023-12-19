import React from 'react';
import ken from "../../../assets/ken.png"
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"space-around"}>
                <div>
                    <span>Hi There</span>
                    <Name>I am Anton</Name>
                    <MainTitle>FRONTEND DEVELOPER</MainTitle>
                </div>
                <Photo src={ken} alt={"avatar"}/>
            </FlexWrapper>

        </StyledMain>
    );
};

const StyledMain=styled.section`
    min-height: 50vh;
  background-color: bisque;
  position: relative;
  
`

const Photo=styled.img`
    max-width: 534px;
  max-height: 400px;
  object-fit: cover;
  
    `
const MainTitle=styled.h1`
    
    `
const Name=styled.h2`
    
    `