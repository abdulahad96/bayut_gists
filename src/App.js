
import styled from 'styled-components'
import Header from "./components/Header";
import GlobalStyles from "./GlobalStyle";
import GistList from './screens/GistList';
import { GistContextProvider } from './context';
const App = () => {
  return (
    <GistContextProvider>
      <Wrapper className="App" data-testid="app">
        <Header />
        <GistList />
        <GlobalStyles />
      </Wrapper>
    </GistContextProvider>
  );
}

const Wrapper = styled.div`
  font-size: 14px;
  line-height: 1.5;
`;

export default App;
