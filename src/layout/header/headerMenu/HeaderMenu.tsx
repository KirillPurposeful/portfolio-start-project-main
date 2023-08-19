import React from 'react';
import styled from "styled-components";
import {IMenuItems} from "../../../components/menu/menuTypes";
import {theme} from "../../../styles/Theme";


export const HeaderMenu = (props: { menuItems: IMenuItems[] }) => {
    return (
        <StyledHeaderMenu>
            <ul>
                {props.menuItems.map((menuItem) => {

                    return <ListItem key={menuItem.id}>

                        <Link href="">{menuItem.item}
                            <Mask>
                                    <span>
                                        {menuItem.item}
                                    </span>
                            </Mask>
                            <Mask>
                                      <span>
                                        {menuItem.item}
                                    </span>
                            </Mask>
                        </Link>

                    </ListItem>
                })}
            </ul>
        </StyledHeaderMenu>
    );
};
const StyledHeaderMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
  }
`
const Link = styled.a`
  font-family: 'Josefin Sans', 'sans-serif';
  font-weight: 400;
  font-size: 25px;
  color: transparent;
`
const Mask = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  height: 50%;
  overflow: hidden;
  color: white;

  & + & {
    top: 50%;

    span {
      display: inline-block;
      transform: translateY(-50%);
    }
  }

`
const ListItem = styled.li`
  position: relative;
  &:before {
    content: "";
    display: inline-block;
    height: 3px;
    background-color: ${theme.colors.accent};
    
    position: absolute;
    top: 50%;
    left: -10px;
    right: -10px;
    z-index: 1;
    
    transform: scale(0);
  }
  &:hover {
    &::before{
      transform: scale(1);
    }
    ${Mask} {
      transform: skew(12deg) translateX(5px);
      color: ${theme.colors.font};

      & + ${Mask} {
        transform: skew(12deg) translateX(-5px);
      }

    }


  }
`

