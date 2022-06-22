import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
//   import App31 from './AppTODO-WEEK3';  //ComposeTweet js
// import App from './App4--MiniTwitter';
// import App3 from './App3';  // ProductList  clothes store
// import App from './App';
import App2 from './App2' ;   //TODOMVC ----task WEB MODULE

// root.render(
// {/* <React.StrictMode> */}
// )

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <App2 /> 
 
);

{/* <App3 />    //   clothes store HOMEWORK WEEK2 */}
{/* <App /> */}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
