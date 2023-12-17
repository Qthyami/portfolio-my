import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";

export const Footer = () => {
    return (
        <StyledFooter>
<Name>Anton</Name>
            <SocialIconsList>
                <SocialIconLink>
                    <Icon iconId={"JS"}/>
                </SocialIconLink>
            </SocialIconsList>
        </StyledFooter>
    );
};
const StyledFooter=styled.footer`

`
const Name=styled.span`
    
`
const SocialIconsList=styled.ul`
    
`
const SocialIconLink=styled.li`

`