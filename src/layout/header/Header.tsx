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
            <Container>
                <FlexWrapper justify={"spase-between"} align={"center"}>
                    <Logo/>
                    <HeaderMenu menuItems={menuItemsDto}/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  background-color: #1be51b;
  display: flex;
  background: rgba(0, 0, 220, 0.9);
  padding: 20px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  z-index: 99999;
`
