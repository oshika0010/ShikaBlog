import React from "react"
import styled from "styled-components"
import MenuBar from "./common/MenuBar"

const Layout = (props: { children: React.ReactNode }) => {

    return (
        <BlogStyleWrapper>
            <MenuBar/>
            <ContentBody>
                {props.children}
            </ContentBody>
        </BlogStyleWrapper>
    )
}

export default Layout

const BlogStyleWrapper = styled.div`
    width: 100%;
    height: 800px;
    display: flex;
    flex-direction: row;
`

const ContentBody = styled.div`
    position: relative;
    margin-left: 200px;
    top: 0;
`
