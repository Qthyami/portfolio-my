import React from 'react';
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Skill } from "./skill/Skill";
import {Container} from "../../../components/Container";

const skillsData = [
    { title: "JS", iconId: "JS" },
    { title: "Typescript", iconId: "typescript" },
    { title: "React", iconId: "react" },
    { title: "Redux", iconId: "redux", description: "classic Redux, Redux Toolkit, RTK Query" },
    { title: "React Router", iconId: "react-router" },
    { title: "Jest", iconId: "jest" },
    { title: "Formik", iconId: "formik" },
    { title: "Storybook", iconId: "storybook" },
    { title: "HTML", iconId: "HTML" },
    { title: "CSS", iconId: "CSS" },
    { title: "Styled Components", iconId: "styled-components" },
    { title: "Material-UI", iconId: "MUI" },
    { title: "Git", iconId: "git" },
    { title: "REST API", iconId: "restApi" },
];

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
            <SectionTitle>Skills</SectionTitle>
            <FlexWrapper wrap={"wrap"} justify={"space-between"} align={"center"}>
                {skillsData.map((skill, index) => (
                    <Skill key={index} title={skill.title} iconId={skill.iconId} description={skill.description} />
                ))}
            </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
  min-height: 100%;
  background-color: burlywood;
  margin-bottom: 140px;
`;
