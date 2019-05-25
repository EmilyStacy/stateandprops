import React from 'react';
import './TheDate.css'

const milliseconds = 1000;
class TheDate extends React.Component{
    constructor(props) {
        super(props)
        this.state = {datetime: new Date()};
        console.log('constructor')
}
componentDidMount(){

    this.Interval = setInterval( () => {
        this.setState({datetime:new Date()})}, milliseconds)
}
componentWillUnmount() {
    clearInterval(this.interval)
}
render (){
    console.log('render')
   return (<div className='top'>{this.state.datetime.toLocaleString()}</div>)
   }
    }


export default TheDate