import React from 'react';
import sprite from "../../assets/skills/sprite.svg";
type IconPropsType={
    iconId:string,
    width?:string,
    height?:string,
    viewBox?:string
}


export const Icon = ({width,iconId,height,viewBox}:IconPropsType) => {
    return (
        <svg width={width} height={height} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
        <use xlinkHref={`${sprite}#${iconId}`}></use>
    </svg>

    );
};
