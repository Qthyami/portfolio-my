import React from 'react';
import styled from "styled-components";

export const MenuWorks = (props:{items:string[]}) => {
    return (
        <StyledMenuWorks>

            {props.items.map((item, index) => (
                <StyledMenuItem key={index}>{item}</StyledMenuItem>
            ))}

        </StyledMenuWorks>
    );
};


const StyledMenuWorks = styled.ul`
  display: flex;
  gap:30px;
  justify-content: center; 
  list-style-type: none; /* Убираем маркеры у списка */
 
`;
const StyledMenuItem = styled.li`
  margin-right: 10px; /* Расстояние между элементами списка */
  text-decoration: underline; /* Подчеркиваем текст элемента */
  cursor: pointer; /* Делаем курсор указателем при наведении */
`;