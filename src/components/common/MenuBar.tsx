import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"


export default class MenuBar extends React.Component{

    public render() {
        return(
            <ComponentWrapper>
                <MenuBarItem to="/">TOP</MenuBarItem>
                <MenuBarItem to="/author">Author</MenuBarItem>
            </ComponentWrapper>
        )
    }
}

const ComponentWrapper = styled.div`
    border: medium solid black;
    width: 200px;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: fixed;
`

const MenuBarItem = styled(Link)`
     width: 100%;
     height: 50px;
     font-size: 14px;
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     border-bottom: medium solid black;
`
