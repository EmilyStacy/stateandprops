import React from 'react';
import Tabs from './Tabs';
const tabsProp = [
    {
        name: 'First tab',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.'

    },

    {
        name:'Second tab',
        content:'Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.'

    },
    {
        name:'Third tab',
        content:'Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.'
    }
]

class App2 extends React.Component {
    render() {
        return <div>
            <Tabs tabs = {tabsProp} /> 
        </div>
    }
}

export default App2;