import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon";
type SkillProps={
    iconId:string,
    title:string
}
export const Skill = ({iconId, title}:SkillProps) => {
    return (
        <StyledSkill>
            <Icon iconId={iconId} width={"120"} height={"120"} viewBox={"0 0 120 120" } />
            <SkillTitle>{title}</SkillTitle>
            <SkillText>LOREM IPSUM</SkillText>
        </StyledSkill>
    );
};

const StyledSkill=styled.div`
  width:20%
`
const SkillTitle=styled.h3`
  
`
const SkillText=styled.p`
  
`