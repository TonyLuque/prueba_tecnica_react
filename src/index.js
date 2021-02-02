import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Search from './components/search/search';
import Cards from './components/card/cards';
import Detail from './components/detail/detail';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Detail/>
    <section id='main'>
      <Search/>
      <Cards/>
    </section>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
