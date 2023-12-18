import React from 'react';
import styled from "styled-components";
type WorkProps={
    title:string,
    text:string,
    src:string
}
export const Work = (props:WorkProps) => {
    return (
        <StyledWork>
<Image src={props.src} alt=""/>

        <Title>{props.title}</Title>
        <TextWork>{props.text}</TextWork>
           <LinkWorkContainer>
               <LinkWork href={"#"}>demo</LinkWork>
               <LinkWork href={"#"}>code</LinkWork>
           </LinkWorkContainer>

        </StyledWork>
    );
};
const StyledWork=styled.div`
    background-color: bisque;
  max-width: 540px;
  width:100%
    
`
const Image=styled.img`
 width: 100%;
  height: 260px;
  object-fit: cover;
  
`

const LinkWork=styled.a`
display: flex;

`
const LinkWorkContainer=styled.div`
display: flex;
  gap:10px
`
const TextWork=styled.div`
    
`
const Title=styled.h3``
