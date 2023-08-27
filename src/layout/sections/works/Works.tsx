import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import styled from "styled-components";
import {Menu} from "../../../components/menu/Menu";
import {worksItemsDto} from "./worksItemsData";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import socialImg from "./../../../assets/images/proj-1.webp";
import timerImg from "./../../../assets/images/proj-2.webp";
import {Container} from "../../../components/Container";
export const  Works = () => {
    return (
        <StyledWorks>
            <Container>
            <SectionTitle>My Works</SectionTitle>
            <Menu menuItems={worksItemsDto}/>
            <FlexWrapper justify={"space-around"}>
              <Work title={"Social network"} text={"qeqweqweqw"} alt={"Social image"} src={socialImg}/>
                <Work title={"Timer"} text={"qweqweqweqweq"} alt={"Timer image"} src={timerImg}/>
            </FlexWrapper>
            </Container>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
  min-height: 100vh;
  background-color: #687716;
`