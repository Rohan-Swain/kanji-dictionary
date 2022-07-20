import Header from './components/Header';
import KanjiData from './components/KanjiData';
import Footer from './components/Footer';
import styled from 'styled-components';

function App() {
  return (
    <AppWrapper>
      <Header />
      <KanjiData />
      <Footer />
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`