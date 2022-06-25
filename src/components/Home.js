import React from 'react'
import styled from 'styled-components'

function Home() {
    return (
        <HomeWrapper>
            <h1>Welcome</h1>
            <p>This is a Simple Kanji Dictionary.<br /> You can Start by Searching for the Kanji Characters.</p>
        </HomeWrapper>
    )
}

export default Home

const HomeWrapper = styled.div`
    z-index: 1;
    margin-top: 60px;
    text-align: center;

    h1 {
        font-size: 80px;
    }

    p {
        margin-top: 30px;
        text-align: center;
        font-size: 1.2em;
    }

    @media(max-width: 700px) {
        h1 {
            font-size: 4em;
        }

        p {
            padding: 0px 30px;
        }
    }
`