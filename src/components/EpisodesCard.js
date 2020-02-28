import React from "react";
import styled from "styled-components"

import {
  
 
  
  
  CardBody,
 
  
  Col
} from "reactstrap";

const CardStyle = styled.div `
margin:5%;
background:black;
border-radius:20px;
display:flex;
justify-content:center;
align-items:center;
margin:5%;
flex-direction:row-reverse;
`


const Name = styled.p `
color:#32CD32;

font-weight:bold;
font-size:2rem;
m
`

const Info = styled.p `
color:#32CD32;
font-size:2rem;


`

const Div = styled.div `
margin:0 3%;
`



const EpisodeCard = ({ characters }) => {
 
  return (
    <Col xs="6" md="4" xl="3">
      <CardStyle >
        <Div>
        <Name>Name: {characters.name}</Name>
  <Info>Air-date: {characters.air_date}</Info>
          
          <Info>Episode: {characters.episode} </Info>
          </Div>

          <Div>
          <Info> <img src = {characters.image}/> </Info>
          </Div>
       
       
      </CardStyle>
    </Col>
  );
};
export default EpisodeCard;
