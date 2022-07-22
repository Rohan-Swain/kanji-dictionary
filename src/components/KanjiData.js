import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search'
import Home from './Home'
import Loading from 'react-loading'
import DataWrapper from './DataWrapper'
import Fade from 'react-reveal/Fade'

class KanjiData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
            url: '',
            data: [],
            isLoading: false,
            result: false,
            isAtHome: true,
            isSuccess: false
        }
        this.fetchData = this.fetchData.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.setUrl = this.setUrl.bind(this);
    }

    fetchData() {
        this.setState({ isAtHome: false, isLoading: true, result: false })
        fetch(this.state.url)
            .then(response => {
                if (response.ok) {
                    this.setState({
                        isSuccess: true
                    })
                } else {
                    this.setState({ isSuccess: false })
                }
                return response.json();
            })
            .then(data => this.setState({ result: true, isLoading: false, data: data }))
            .catch(err => console.log(err))
    }

    handleInput(e) {
        this.setState({
            searchTerm: e.target.value
        })

        setTimeout(() => this.setUrl(this.state.searchTerm), 100);
    }

    setUrl(value) {
        this.setState({
            url: `https://kanjiapi.dev/v1/kanji/${value}`
        })
    }

    render() {
        return (
            <DivWrapper>
                <SearchBoxWrapper>
                    <InputBox onChange={this.handleInput} type='search' placeholder='Search for Kanji...'></InputBox>
                    <SearchIconWrap title='Search'>
                        <SearchIcon fontSize='large' style={{ color: "white" }} onClick={this.fetchData} />
                    </SearchIconWrap>
                </SearchBoxWrapper>
                {this.state.isAtHome && <Home />}
                {this.state.isLoading && <Loading type='bars' color='black' height={100} width={50} />}
                {(this.state.result && this.state.isSuccess) && <DataWrapper data={this.state.data} />}
                {(this.state.result && !this.state.isSuccess) && <Fade bottom ><ErrorWrapper>No Such Kanji<span>...</span></ErrorWrapper></Fade>}
            </DivWrapper>
        );
    }
}

export default KanjiData;

const DivWrapper = styled.div`
    width: 100vw;
    flex-grow: 1;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const SearchBoxWrapper = styled.div`
    z-index: 1;
    background-color: white;
    width: 60%;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    border-radius: 30px;
    padding-left: 20px;
    margin-top: 130px;

    @media(max-width: 700px) {
        width: 80%;
    }
`

const InputBox = styled.input`
    width: 100%;
    height: 3em;
    font-size: 18px;
    padding: 0px 20px;
    border: none;
    caret-color: red;
    &:focus {
        outline: none;
    }
`

const ErrorWrapper = styled.h1`
    margin-top: 100px;

    span {
        font-size: 1.2em;
        color: red;
    }

    @media(max-width: 700px) {
        font-size: 1.5em;
    }
`

const SearchIconWrap = styled.div`
    background-color: red;
    height: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 5em;
    border: 6px double white;
    border-radius: 30px;
    margin-right: 0.2em;
    cursor: pointer;
`