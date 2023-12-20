import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon";
type SkillProps={
    iconId:string,
    title:string,
    description?:string
}
export const Skill = ({iconId, title, description}:SkillProps) => {
    return (
        <StyledSkill>
            <SkillIcon> <Icon  iconId={iconId} width={"120"} height={"120"} viewBox={"0 0 120 120" } /></SkillIcon>
            <SkillTitle>{title}</SkillTitle>
            <SkillText>{description}</SkillText>

        </StyledSkill>
    );
};

const StyledSkill=styled.div`
  width:20%;
  border: 1px red solid;
  margin: 10px;
  


  
`
const SkillTitle=styled.h3`
  display: flex;
  justify-content: center;
`
const SkillText=styled.p`
  
`
const SkillIcon=styled.div`
  display: flex;
  justify-content: center;
`