import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <HeaderWrapper>
            <Title>
                <h2>KANJI</h2>
                <span>STUDY</span>
            </Title>
            <div>
                <MenuWrapper>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>About Me</a></li>
                    <li><a href='https://kanjiapi.dev/' target='blank'>The API</a></li>
                </MenuWrapper>
            </div>
        </HeaderWrapper>
    )
}

export default Header

const HeaderWrapper = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    height: 70px;
    filter: blur(1);
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Title = styled.div`
    margin-left: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
        font-size: 12px;
        letter-spacing: 6px;
    }
`

const MenuWrapper = styled.ul`
    list-style: none;
    display: flex;
    
    li {
        margin-right: 50px;
        font-size: 1.2em;

        a {
            color: black;
            text-decoration: none;
        }
    }
`