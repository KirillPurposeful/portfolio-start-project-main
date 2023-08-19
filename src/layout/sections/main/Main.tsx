import React from 'react';
import styled from "styled-components";
import shrekPhoto from '../../../assets/images/shrek.webp'
import {FlexWrapper} from "../../../components/FlexWrapper";
export const Main = () => {
    return (

            <StyledMain>
                <FlexWrapper align={"center"} justify={"space-around"}>
                    <div>
                <span>Hi folks!</span>
                    <h2>I am SHREK</h2>
                <h1>Software engineer</h1>
                    </div>
                <Photo src={shrekPhoto} alt=""/>
                </FlexWrapper>
            </StyledMain>


    );
};

const StyledMain = styled.div`
  min-height: 10vh;
  background-color: #1d3d21;
  color: white;
`

const Photo = styled.img`
  width: 430px;
  height: 500px;
  object-fit: cover;
`