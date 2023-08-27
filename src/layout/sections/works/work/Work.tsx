import React from 'react';
import styled from "styled-components";

type WorkPropsType = {
    title: string;
    text: string;
    src: string;
    alt: string
}
export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <Image src={props.src} alt={props.alt}/>
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
            <Link href={'#'}>demo</Link>
            <Link href={'#'}>code</Link>
        </StyledWork>
    );
};
const StyledWork = styled.div`
  background-color: chartreuse;
  width: 100%;
  max-width: 540px;

`
const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`

const Link = styled.a`

`

const Title = styled.h3`

`

const Text = styled.p`

`