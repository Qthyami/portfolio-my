import React from 'react';
import { Link as ScrollLink } from 'react-scroll/modules';
import styled from 'styled-components';

export const Menu = () => {
    return (
        <>
            <StyledMenu>
                <MenuItem to="about" smooth={true} duration={500} offset={-76}>
                    About
                </MenuItem>
                <MenuItem to="skills" smooth={true} duration={500} offset={-76}>
                    Tech Stack
                </MenuItem>
                <MenuItem to="projects" smooth={true} duration={500} offset={-76}>
                    Projects
                </MenuItem>
                <ContactItem to="contact" smooth={true} duration={500} offset={-76}>
                    Contact
                </ContactItem>
            </StyledMenu>
        </>
    );
};

const StyledMenu = styled.nav`
  display: flex;
  align-items: center;
  gap: 100px;
  
`;
const MenuItem = styled(ScrollLink)`
  text-decoration: none;
   /* цвет текста */
  margin: 0 15px;
  cursor: pointer;
  transition: color 0.1s ease; /* плавное изменение цвета текста при hover */
  color: rgba(31, 38, 38, 1);
  font-weight: 500;
  font-size: 16px;


  &:hover {
    color:  rgba(82, 34, 208, 1);
  ; /* изменение цвета текста при наведении */
  }

  &.active {
    /* стили для активной ссылки (если используете react-scroll) */
    font-weight: bold;
  }
`;

const ContactItem = styled(ScrollLink)

    ` //Width:  Hug (105px);
//    Height:    Hug (45px);
      padding: 12px 20px ;
      background: rgba(82, 34, 208, 12);
      color: white;
      text-decoration: none;
      border-radius: 6px;

      /* цвет текста */
      margin: 0 15px;
      cursor: pointer;


      font-weight: 500;
      font-size: 16px;
      line-height:19.5px;
      align-items:center;


      &:hover {
        background-color: rgb(121, 84, 211);; /* изменение цвета текста при наведении */
      }

      &.active {
        /* стили для активной ссылки (если используете react-scroll) */
        font-weight: bold;
      }
    `;

