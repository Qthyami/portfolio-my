import React from 'react';
import sprite from "../../assets/skills/sprite.svg";
import styled from "styled-components";

type IconPropsType = {
    iconId: string,
    width?: string,
    height?: string,
    viewBox?: string
    descript?: string
}


export const Icon = ({width, iconId, height, viewBox, descript}: IconPropsType) => {
    return (
        <>
            <svg width={width} height={height} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
                <use xlinkHref={`${sprite}#${iconId}`}></use>

            </svg>
            <StyledDescript>{descript}</StyledDescript></>


    );
};
const StyledDescript = styled.div`
  color: black;
  font-size: 12px;
  display: flex;
  flex-direction: column;
`