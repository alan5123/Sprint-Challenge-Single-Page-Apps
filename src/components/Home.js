import React from 'react';
import styled from "styled-components";
import image from "../imgs/background.png"

const H2 = styled.h2 `
color:#7FFF00;
text-align:center;
`

const MainDiv = styled.div `
min-height: 70rem;
background-image: url(${image});
`

const Home = (props) => {
return (
  <MainDiv>
    
    <H2>Sup this is Ricks homepage</H2>
    </MainDiv>
)
}



export default Home