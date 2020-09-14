import React from 'react';
import './App.css';
import Header from './Components/Header/index';
import Escopo from './Components/Body/Escopo/index'
import Resolucao from './Components/Body/Resolução/index'
import Footer from './Components/Footer/index'

// Arquivo para colocar os componentes de renderização

const App = () => (
  <div className="App">
    <Header />
    <Escopo />
    <Resolucao />
    <Footer />
  </div>
)

export default App;
