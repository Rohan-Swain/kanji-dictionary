import React from 'react'
import styled from 'styled-components'
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
    return (
        <FooterWrapper>
            <div id='text'>
                <span>Made with &#128150;</span>
            </div>
            <div id='icon'>
                <a href='https://github.com/Rohan-Swain' title='GitHub' target='blank'><GitHubIcon /></a>
            </div>
        </FooterWrapper>
    )
}

export default Footer

const FooterWrapper = styled.div`
    height: 5vh;
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;

    #text {
        display: flex;
        width: 100%;
        justify-content: center;
    }

    #icon {
        position: absolute;
        right: 0;
        margin-right: 1.5em;

        a {
            color: red;
            text-decoration: none;
        }
    }

    span {
        font-weight: 400;
    }
`