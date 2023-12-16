import React from 'react';
import styled from "styled-components";

export const MenuWorks = (props:{items:string[]}) => {
    return (
        <StyledMenuWorks>
            <ul >
                {props.items.map((el,inx)=>{
                   return( <li key={inx}>{el}</li>)
                })}
            </ul>
        </StyledMenuWorks>
    );
};

const StyledMenuWorks=styled.div`

flex-direction: row;
`