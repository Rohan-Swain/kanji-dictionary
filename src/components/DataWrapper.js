import React from 'react'
import styled from 'styled-components'

function DataWrapper(props) {
    const info = props.data;
    return (
        <MainWrapper>
            <h1>Results:</h1>
            <ShowDiv>
                <div id='basic_info'>
                    <div id='info'>
                        <h3>Grade: {info.grade === null ? 'null' : info.grade}</h3>
                        <h3>Stroke Count: {info.stroke_count}</h3>
                        <h3>Unicode: {info.unicode}</h3>
                        <h3>JLPT level: {info.jlpt === null ? 'null' : info.jlpt}</h3>
                    </div>
                    <div id='char'>{info.kanji}</div>
                </div>
                <hr />
                {(info.meanings && info.meanings.length !== 0) &&
                    <div id='meanings'>
                        <h2>Meanings:</h2>
                        <ul>
                            {info.meanings && info.meanings.map(item => <li key={info.meanings.indexOf(item)}>{item}<Red>,</Red></li>)}
                        </ul>
                    </div>
                }
                {(info.kun_readings && info.kun_readings.length !== 0) &&
                    <div id='kun_readings'>
                        <h2>Kun Readings:</h2>
                        <ul>
                            {info.kun_readings.map(item => <li key={info.kun_readings.indexOf(item)}>{item}<Red>,</Red></li>)}
                        </ul>
                    </div>
                }
                {(info.on_readings && info.on_readings.length !== 0) &&
                    <div id='on_readings'>
                        <h2>On Readings:</h2>
                        <ul>
                            {info.on_readings && info.on_readings.map(item => <li key={info.on_readings.indexOf(item)}>{item}<Red>,</Red></li>)}
                        </ul>
                    </div>
                }
            </ShowDiv>
        </MainWrapper>
    )
}

export default DataWrapper

const MainWrapper = styled.div`
    z-index: 1;
    width: 80%;
    max-width: 50em;
    padding: 20px;
    height: fit-content;
    margin-top: 80px;

    @media(max-width: 700px) {
        margin-top: 40px;
        width: 90%;
    }
`

const ShowDiv = styled.div`
    #basic_info {
        margin-top: 30px;
        height: fit-content;
        display: flex;
    
        #info {
            display: flex;
            flex-direction: column;
            justify-content: center;
            line-height: 2.5;
            width: 50%;
        }
    
        #char {
            font-family: 'Noto Sans JP', sans-serif;
            height: fit-content;
            width: 50%;
            max-width: 1.8em;
            text-align: center;
            font-size: 10em;
            border: 8px double white;
            border-radius: 100px 0px;
            background-color: #FF5C5C
        }
    }
    
    hr {
        margin-top: 30px;
    }
    
    #meanings, #kun_readings, #on_readings {
        padding-top: 10px;
        display: flex;
        align-items: center;
    
        ul {
            margin-top: 10px;
            list-style: none;
            display: flex;
            font-size: 1.2em;
            font-weight: 600;
                
            li {
                margin: 0px 0px 8px 20px;
            }
        }
    }

    @media(max-width: 700px) {
        #basic_info {
            margin-top: 20px;

            #info {
                line-height: 1.6;
            }

            #char {
                font-size: 7em;
                border-radius: 60px 0px;
            }
        }
        
        #meanings, #kun_readings, #on_readings {
            flex-direction: column;

            h2 {
                font-size: 1.2em;
                border-bottom: 1px solid red;
            }

            ul {
                max-width: 100%;
                overflow: scroll;

                li {
                    display: block;
                }
            }
        }
    }
`

const Red = styled.span`
    font-size: 1.2em;
    color: red;
`