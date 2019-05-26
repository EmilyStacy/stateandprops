import React from 'react';
import Accordion2 from './Accordion2';
import './Accordion2.css'
const sections = [
    {
      title: 'Section 1',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      title: 'Section 2',
      content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
    },
    {
      title: 'Section 3',
      content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
    },
  ]

  class App3 extends React.Component {
      render(){
          return(
              <Accordion2 sections = {sections} />
          )
      }
  }

  export default App3;