import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper";

export const Slider = () => {
    return (
        <StyledSlider>
            <FlexWrapper>
                <Slide>
                    <Text>testetetjheqwlehqwkehqwkqweqwheqwkheqwkehqwkewqqwehqwejkeqwh</Text>
                    <Name>Shrek</Name>
                </Slide>
            </FlexWrapper>
                <Pagination>
                    <span></span>
                    <span></span>
                    <span></span>
                </Pagination>

        </StyledSlider>
    );
};

const StyledSlider = styled.div`
  border: 1px solid greenyellow;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Slide = styled.div`
  text-align: center;
`
const Text = styled.p`

`
const Name = styled.span`

`
const Pagination = styled.span`
  span {
    display: inline-block;
    width: 20px;
    height: 20px;
    margin: 5px;
    background-color: deeppink;
  }
`