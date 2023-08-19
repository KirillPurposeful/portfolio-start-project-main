import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {menuItemsDto} from "./menuItemsData";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {HeaderMenu} from "./headerMenu/HeaderMenu";


export const Header = () => {
    return (
        <StyledHeader>
            <Container background={"linear-gradient(0deg, rgb(23, 144, 208), rgb(135, 55, 234), rgb(102, 40, 136))"} borderRadius={"10px"}>
                <FlexWrapper justify={"center"} align={"center"} >
                    <Logo/>
                    <HeaderMenu menuItems={menuItemsDto}/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  display: flex;
  background: linear-gradient(0deg, rgba(14, 86, 124, 0.55), rgba(40, 3, 79, 0.47), rgba(7, 4, 4, 0.45));
  backdrop-filter: blur(10px);
  padding: 20px 0;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;

  z-index: 99999;
`
