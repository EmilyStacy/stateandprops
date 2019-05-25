import React from 'react';
class Bomb extends React.Component{

    state = {
        count:0,
    };

    componentDidMount(){
        this.interval = setInterval(()=> {
            this.setState({count:this.state.count + 1})}, 1000)
        }
        //why we needs clearnInterval twice?
    componentWillUnmount() {
        clearInterval(this.interval)
    }

    callBack(){
        //why does it need to be an object
        const {count} = this.state
        if(count >=8){
            clearInterval(this.interval)
            return 'Boom!'
        }
        else if(count % 2 === 0){
            return 'tick'
        } else {return 'tock'}
    }

    /*constructor(props){
        
    super(props)
    this.state = {count:0}
    this.interval = setInterval (this.callBack.bind(this), 1000)
}
    

    callBack(){
        const counting = this.state.count +1
        //counting <= 8 
        if (counting % 2 === 0 && counting < 8){
           return  <p>tick</p>;
        }
        else if(counting % 2 !== 0 && counting < 8) {
            return <p>tock</p>
        }
        else  {
            return <p>Boom!</p>
            clearInterval(this.interval);
        }

    }*/
    render(){
        return(
            <div className='CountdownBomb'>
                {this.callBack()}
            </div>
        )
    }


}

export default Bomb;