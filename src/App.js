import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import * as S from './Styles/globalStyle'
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';


function App() {
  return (
    <section>
      <S.GlobalStyle/>
      <div>
        <Header />
      </div>
      <div>
        <Main />
      </div>
      <div>
        <Footer />
      </div>
    </section>
  );
}

export default App;
