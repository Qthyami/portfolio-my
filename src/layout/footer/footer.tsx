import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";

export const Footer = () => {
    return (
        <StyledFooter>
           <FlexWrapper direction={"column"} align={"center"} >
               <Name>Anton</Name>

               <SocialList>
                   <SocialItem>
                       <SocialLink>
                           <Icon height={"38px"} width={"39px"} iconId={"gmail"} viewBox={"0 0 39 38px"} />
                       </SocialLink>
                   </SocialItem>
                   <SocialItem>
                       <SocialLink>
                           <Icon height={"38px"} width={"39"} viewBox={"0 0 39 38px"} iconId={"linkedIn"} descript={"linkedIn"}/>

                       </SocialLink>
                   </SocialItem>
                   <SocialItem>
                       <SocialLink>
                           <Icon height={"38px"} width={"39"}  iconId={"github"} viewBox={"0 0 39 38px"} />

                       </SocialLink>
                   </SocialItem>
                   <SocialItem>
                       <SocialLink>
                           <Icon height={"38px"} width={"39"} iconId={"telegram"} viewBox={"0 0 39 38px"}  />
                       </SocialLink>
                   </SocialItem>

               </SocialList>
               <Copyright>© 2023 Anton Soloview, All Rights Reserved.</Copyright>
           </FlexWrapper>
        </StyledFooter>
    );
};
const StyledFooter = styled.footer`
  background-color: #e1963f;
  min-height: 20vh;
`
const Name = styled.span`

`
const SocialList = styled.ul`
  display: flex;
  gap:30px;
  list-style-type: none;
`
const SocialLink = styled.a`

`
const Copyright = styled.small`

`

const SocialItem = styled.li`

`