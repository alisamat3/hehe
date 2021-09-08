import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

ReactDOM.render(
  <div className="blocks">
    <div className="first block">
      <div className="small-block" />
      <div className="small-block" />
      <div className="small-block" />
      <div className="small-block" />
    </div>, 
    <div className="second block">
      <div className="small-block" />
      <div className="small-block" />
      <div className="small-block" />
      <div className="small-block" />
    </div>,
    <div className="third block">
      <div className="small-block" />
      <div className="small-block" />
      <div className="small-block" />
      <div className="small-block" />
    </div>, 
  </div>,
  document.getElementById('root')
);