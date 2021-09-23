import React from "react"
import GlobalStyle from './theme/globalStyles'
import Header from './components/Header'
import List from './components/ListContainer'

function App() {
  return (
    <>
      <GlobalStyle/>
      <Header/>
      <List/>
    </>
  );
}

export default App;
