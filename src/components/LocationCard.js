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



const LocationCard = ({ location }) => {
 
  return (
    <Col xs="6" md="4" xl="3">
      <CardStyle >
        <Div>
        <Name>Name: {location.name}</Name>
          <Info>Type: {location.type}</Info>
          
          <Info>Dimension: {location.dimension} </Info>
          </Div>

      
       
       
      </CardStyle>
    </Col>
  );
};
export default LocationCard;
