import React from 'react';
import styled from "styled-components";
import {IMenuItems} from "./menuTypes";




export const Menu = (props: { menuItems: IMenuItems[] }) => {
    return (
        <StyledMenu>
        <ul>
            {props.menuItems.map((menuItem)=>{
              return  <li key ={menuItem.id}>
                <a href="" >{menuItem.item}</a>
                 </li>
                })}
        </ul>
        </StyledMenu>
    );
};
const StyledMenu = styled.nav`
    ul {
      display: flex;
      gap: 30px;
    }
`