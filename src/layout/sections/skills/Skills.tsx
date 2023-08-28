import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";
import {SkillsDto} from "./skillsData";
import {Container} from "../../../components/Container";

export const Skills = () => {
    return (
        <StyledSkills>
            <Container background={"purple"}>
                <SectionTitle>My Shrek Skills in Web</SectionTitle>
                <FlexWrapper wrap={"wrap"} justify={"space-between"}>

                    {SkillsDto.map((SkillsDto) => (
                        <Skill
                            iconId={SkillsDto.iconId}
                            title={SkillsDto.title}
                            description={SkillsDto.description}
                        />
                    ))}

                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
  min-height: 100vh;
`