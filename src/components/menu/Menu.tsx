import React from 'react';
import { Link as ScrollLink } from 'react-scroll/modules';
import styled from 'styled-components';

export const Menu = () => {
    return (
        <>
            <StyledMenu>
                <ScrollLink to="about" smooth={true} duration={500} offset={-76}>
                    About
                </ScrollLink>
                <ScrollLink to="skills" smooth={true} duration={500} offset={-76}>
                    Tech Stack
                </ScrollLink>
                <ScrollLink to="projects" smooth={true} duration={500} offset={-76}>
                    Projects
                </ScrollLink>
                <ScrollLink to="contact" smooth={true} duration={500} offset={-76}>
                    Contact
                </ScrollLink>
            </StyledMenu>
        </>
    );
};

const StyledMenu = styled.nav`
  display: flex;
  gap :100px
  
`;
