import styled from "styled-components";

type ContainerType = {
    background?: string;
    borderRadius?: string;
};
export const Container = styled.div<ContainerType>`
  max-width: 1170px;
  width: 100%;
  min-height: 100%;
  padding: 0 15px;
  margin: 0 auto;
  outline: 1px solid red;
  background: ${props => props.background || "black"};
  border-radius: ${props => props.borderRadius || "0px"} ;
`
