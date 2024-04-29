import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter/AppRouter';
import Header from './components/header/header';
import WebFont from 'webfontloader';

function App() {
  document.body.style.backgroundColor = "#F4BF96";
  document.body.style.color = "#FCF5ED";
  document.body.style.fontFamily = "Oswald"
  document.body.style.padding = 0;
  document.body.style.margin = 0;

  useEffect(()=>{
    WebFont.load({
      google: {
        families: ['Oswald']
      }
    })
  },[])

  return (
    <BrowserRouter>
      <Header/>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;