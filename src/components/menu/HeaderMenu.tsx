import React from 'react';
import { Link as ScrollLink } from 'react-scroll/modules';
import styled from 'styled-components';

export const HeaderMenu = () => {
    return (
        <>
            <StyledHeaderMenu>
                <MenuItem to="about" smooth={true} duration={500} offset={-116}>
                    About
                </MenuItem>
                <MenuItem to="skills" smooth={true} duration={500} offset={-116}>
                    Tech Stack
                </MenuItem>
                <MenuItem to="projects" smooth={true} duration={500} offset={-116}>
                    Projects
                </MenuItem>
                <ContactItem to="contact" smooth={true} duration={500} offset={-96}>
                    Contact
                </ContactItem>
            </StyledHeaderMenu>
        </>
    );
};

const StyledHeaderMenu = styled.nav`
  display: flex;
  align-items: center;
  gap: 100px;
`;

const MenuItem = styled(ScrollLink)`
  text-decoration: none;
  margin: 0 15px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  font-weight: 500;
  font-size: 16px;
  font-family: Montserrat, sans-serif;
  line-height: 20px;
  text-align: left;

  &:hover {
    background-color: rgba(82, 34, 208, 0.1); /* Изменение цвета фона при наведении */
    color: rgba(82, 34, 208, 1); /* Изменение цвета текста при наведении */
    border-radius: 20%;
  }
`;

const ContactItem = styled(ScrollLink)`
  padding: 12px 20px;
  background: rgba(82, 34, 208, 12);
  color: white;
  text-decoration: none;
  border-radius: 6px;
  margin: 0 15px;
  cursor: pointer;
  font-weight: 500;
  font-size: 16px;
  line-height: 19.5px;
  align-items: center;

  &:hover {
    background-color: rgb(121, 84, 211);
  }
`;

