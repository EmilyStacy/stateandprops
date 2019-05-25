import React from 'react';
import Split from './composition/Split';
import './App.css';
import Tooltip from './composition/Tooltip';
/*import Box from './composition/Box';*/
import TheDate from './state/TheDate';
import Counter from './counter/counter';
import HelloWorld from './state-drills/HelloWorld';
import Bomb from './state-drills/bomb';

const firstTooltip = (
  <Tooltip color="hotpink" message = 'tooltip message'>ipsum</Tooltip>
)


const secondTooltip = (
  <Tooltip color='#126BCC' message = 'another tooptip message'>officiis</Tooltip>
)

function App() {
  return (
    <main className='App'>
      <Split className= 'left' flexBasis={2}>
        This is the left div.Lorem {firstTooltip} dolor sit amet consectetur, adipisicing elit. Incidunt ex velit suscipit facere officia?
      </Split>
      <Tooltip message="one more tooltip message">
      Necessitatibus?
      </Tooltip>
      <Split className = 'right'>
        This is the right div. Aliquid quo possimus id soluta {secondTooltip} aspernatur.
      </Split>
      <TheDate/> 
      <Counter step={4}></Counter>
    </main>
  )
}

export default App;