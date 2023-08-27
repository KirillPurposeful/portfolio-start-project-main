import React from 'react';
import styled from "styled-components";
import shrekPhoto from '../../../assets/images/shrek.webp'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";

export const Main = () => {
    return (

        <StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-around"}>
                    <div>
                        <IntroText>Hi folks!</IntroText>
                        <Name>I am <span>SHREK</span></Name>
                        <MainTitle>Software engineer</MainTitle>
                    </div>
                    <PhotoWrapper>
                        <Photo src={shrekPhoto} alt=""/>
                    </PhotoWrapper>
                </FlexWrapper>
            </Container>
        </StyledMain>


    );
};

const StyledMain = styled.div`
  min-height: 100vh;
  background-color: #1d3d21;
  color: white;
  display: flex;
`

const PhotoWrapper = styled.div`
  position: relative;
  z-index: 0;

  &::before {
    content: "";
    width: 360px;
    height: 470px;
    border: 5px solid ${theme.colors.accent};

    position: absolute;
    top: -24px;
    left: 24px;
    z-index: -1;
  }

`
const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;

`
const MainTitle = styled.h1`
  font-weight: 400;
  font-size: 27px;

`
const Name = styled.h2`
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 700;
  font-size: 50px;
  letter-spacing: 0.05em;
  margin: 10px 0;


  span {

    position: relative;
    z-index: 0;

    &::before {
      content: "";
      display: inline-block;
      width: 100%;
      height: 20px;
      background-color: ${theme.colors.accent};


      position: absolute;
      bottom: 0;
      z-index: -1;

    }
  }
`
const IntroText = styled.span`
  font-family: 'Poppins';
  font-size: 14px;
`