import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import HelloWorld from './state-drills/HelloWorld';
import Bomb from './state-drills/bomb';
 import Roulettegun from './state-drills/roulettegun';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<HelloWorld />, document.getElementById('root'));
ReactDOM.render(<Bomb />, document.getElementById('root'));
ReactDOM.render(<Roulettegun />, document.getElementById('root'));