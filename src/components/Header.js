import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <HeaderWrapper>
                <Circle />
                <Title>
                    <h2>KANJI</h2>
                    <span>DICTIONARY</span>
                </Title>
                <div>
                    <MenuWrapper>
                        <li><a title='Home' onClick={() => window.location.reload(false)}>Home</a></li>
                        <li><a href='#' title='About Me'>About Me</a></li>
                        <li><a href='https://kanjiapi.dev/' target='blank' title='The API'>The API</a></li>
                    </MenuWrapper>
                    <MenuIconWrapper />
                </div>
            </HeaderWrapper>
        )
    }
}

export default Header

const HeaderWrapper = styled.div`
    position: absolute;
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
    user-select: none;
    margin-left: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        letter-spacing: 9px;
    }

    span {
        font-size: 0.8em;
        font-weight: 600;
        color: black;
        letter-spacing: 3px;
    }

    @media(max-width: 700px) {
        margin-left: 30px;

        h2 {
            letter-spacing: 5px;
        }

        span {
            letter-spacing: 2px;
        }
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
            transition: .2s ease all;
            cursor: pointer;

            &:hover {
                font-weight: 600;
                border-bottom: 4px solid red;
        }
    }

    @media(max-width: 700px) {
        display: none;
    }
`

const Circle = styled.div`
    width: 30em;
    height: 30em;
    position: absolute;
    top: 0;
    left: 0;
    border-bottom: 20px double white;
    border-radius: 0em 0em 30em 0em; 
    background-color: red;
    z-index: -1;

    @media(max-width: 700px) {
        width: 15em;
        height: 15em;
        border-radius: 0em 0em 15em 0em;
    }
`

const MenuIconWrapper = styled(MenuIcon)`
    display: none !important;
    @media(max-width: 700px) {
        display: block !important;
        margin-right: 30px;
        cursor: pointer;
    }
`