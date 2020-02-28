import React from "react";
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom"; 
import Home from "./Home";
import Characters from './Characters'
import styled from 'styled-components'
import Portal from '../imgs/portal.png'
import LocationList from "./LocationsList";
import EpisodesList from  './EpisodesList'

const Img = styled.img `
height:100px;
`
const Li = styled.li `
list-style:none;
text-align:center
font-size:1.5rem;
margin:0 1rem;

`

const Div = styled.div `
display:flex;
justify-content:center;
align-items:flex-end;
`


function AppRouter() {
    return(
    <Router>
      
<div>
    <nav>
        <ul>
            <Div>
            <Li><Link to = "/"><Img src = {Portal} alt = 'portal'/> </Link></Li>
            <Li><Link to = "characters">View Characters</Link></Li>
            <Li><Link to = "locations">View Locations</Link></Li>
            <Li><Link to = "episodes">View Episodes</Link></Li>
            </Div>
        </ul>
    </nav>
    <Switch>
     
          <Route exact path="/" component={Home} />
          <Route path="/characters" component={Characters}/>
          <Route path = "/locations" component = {LocationList}/>
          <Route path = "/episodes" component = {EpisodesList}/>
 
        </Switch>
</div>

    </Router>
    )
}


export default AppRouter;