import React from 'react';

import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";

import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle> Skills</SectionTitle>

                <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                        <Skill title={"JS"} iconId={"JS"}/>
                        <Skill title={"Typescript"} iconId={"typescript"}/>
                        <Skill title={"React"} iconId={"react"}/>
                        <Skill title={"Redux"} iconId={"redux"} description={"classic Redux, Redux Toolkit, RTK Query"}/>
                        <Skill title={"React Router"} iconId={"react-router"}/>
                        <Skill title={"Jest"} iconId={"jest"}/>
                        <Skill title={"Formik"} iconId={"formik"}/>
                        <Skill title={"Storybook"} iconId={"storybook"}/>
                        <Skill title={"HTML"} iconId={"HTML"}/>
                        <Skill title={"CSS"} iconId={"CSS"}/>
                        <Skill title={"Styled Components"} iconId={"styled-components"}/>
                        <Skill title={"Material-UI"} iconId={"MUI"}/>
                        <Skill title={"Git"} iconId={"git"}/>

                </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills=styled.section`
min-height: 100vh;
  background-color: burlywood;
`

