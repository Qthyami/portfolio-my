import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon";
import {FlexWrapper} from "../../../../components/FlexWrapper";
type SkillProps={
    iconId:string,
    title:string,
    description?:string
}
export const Skill = ({iconId, title, description}:SkillProps) => {
    return (
        <StyledSkill>
           <FlexWrapper direction={"column"}  align={"center"}>
               <SkillIcon> <Icon  iconId={iconId} width={"120"} height={"120"} viewBox={"0 0 120 120" } /></SkillIcon>
               <SkillTitle>{title}</SkillTitle>

           </FlexWrapper>

        </StyledSkill>
    );
};

const StyledSkill = styled.div`
  width: calc(20% - 48px); /* 20% минус 2 раза 24px (половина от 120px) */
  margin-right: 48px; /* Расстояние между элементами */
  margin-bottom: 59px; /* Расстояние между SkillTitle */

  @media (max-width: 1200px) {
    width: calc(20% - 48px);
    margin-bottom: 59px;
  }

  @media (max-width: 768px) {
    width: calc(33.3333% - 48px);
    margin-bottom: 59px;
  }

  @media (max-width: 480px) {
    width: calc(100% - 48px);
    margin-right: 0;
    margin-bottom: 0;
  }

  @media (max-width: 414px) {
    width: calc(50% - 24px); /* Изменено для равномерного распределения в ряду */
    margin-right: 24px; /* Изменено для равномерного распределения в ряду */
  }

  @media (max-width: 375px) {
    width: calc(50% - 24px); /* Изменено для равномерного распределения в ряду */
    margin-right: 24px; /* Изменено для равномерного распределения в ряду */
  }
`;

const SkillIcon = styled.div`
  display: flex;
  justify-content: flex-start;

  @media (max-width: 480px) {
    width: 88px;
    height: 88px;
  }

  @media (max-width: 414px) {
    width: 88px;
    height: 88px;
  }

  @media (max-width: 375px) {
    width: 88px;
    height: 88px;
  }
`;

const SkillTitle = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center; /* Центрирование по вертикали */
  margin-top: 22px;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 2.166px;
  text-transform: uppercase;

  @media (max-width: 480px) {
    margin-bottom: 30px;
  }

  @media (max-width: 375px) {
    margin-bottom: 30px;
  }
`;