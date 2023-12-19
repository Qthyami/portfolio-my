import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {HeaderMenu} from "../../components/menu/HeaderMenu";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
               <FlexWrapper justify={"space-between"} align={"center"}>
                   <Logo/>
                   <HeaderMenu/>

               </FlexWrapper>

            </Container>

        </StyledHeader>
    );
};

const StyledHeader=styled.header`
display: flex;
  //justify-content: space-between;
  //align-items: center;
  position: sticky;
  
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;
  background-color: #fff;
  padding: 20px 0;
  
  
  
 

`