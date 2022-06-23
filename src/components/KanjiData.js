import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import Home from './Home'
import Loading from 'react-loading'
import DataWrapper from './DataWrapper';

class KanjiData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
            url: '',
            data: [],
            isLoading: false,
            result: false
        }
        this.fetchData = this.fetchData.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.setUrl = this.setUrl.bind(this);
    }

    fetchData() {
        this.setState({ isLoading: true, result: true })
        fetch(this.state.url)
            .then(response => response.json())
            .then(data => this.setState({ isLoading: false, data: data }))
            .catch(err => console.log(err))
    }

    handleInput(e) {
        this.setState({
            searchTerm: e.target.value
        })

        setTimeout(() => this.setUrl(this.state.searchTerm), 1000);
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
                    <SearchIcon onClick={this.fetchData} />
                    <InputBox onChange={this.handleInput} type='search' placeholder='Search for Kanji...'></InputBox>
                </SearchBoxWrapper>
                {!this.state.result && <Home />}
                {this.state.isLoading && <Loading type='bars' color='black' height={100} width={50} />}
                {this.state.result && <DataWrapper data={this.state.data} />}
            </DivWrapper>
        );
    }
}

export default KanjiData;

const DivWrapper = styled.div`
    width: 100vw;
    height: 100vw;
    display: flex;
    flex-direction: column;
    margin-top: 130px;
    align-items: center;
`

const SearchBoxWrapper = styled.div`
    width: 60%;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    border-radius: 30px;
    padding: 0px 20px;
`

const InputBox = styled.input`
    width: 100%;
    height: 3em;
    font-size: 18px;
    padding: 0px 20px;
    border: none;
    &:focus {
        outline: none;
    }
`