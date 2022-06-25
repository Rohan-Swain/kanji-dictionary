import React from 'react'
import styled from 'styled-components'
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
    return (
        <FooterWrapper>
            <div id='text'>
                <h4>Made with &#128150;</h4>
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
    justify-content: space-between;

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

    h4 {
        font-weight: 400;
    }
`