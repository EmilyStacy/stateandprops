import React from 'react';

class Roulettegun extends React.Component{
    static defaultProps = {
        bulletInChamber:8
    };

    state = {
        chamber:null,
        spinningtheChamber:false,
    };
    //whytwice
    componentWillUnmount(){
        clearTimeout(this.Timeout)
    }

    spinChamber() {
        this.setState({spinningtheChamber:true});
        this.TimeOut = setTimeout(() => {
            const randomChamber = Math.ceil(Math.random() * 8)
            this.setState({chamber:randomChamber, spinningtheChamber:false,}, 2000)
        })
    }

    triggerChamber (){
        //don't get this line
        const {chamber,spinningtheChamber} = this.state
        const {bulletInChamber} = this.props
        if (spinningtheChamber){
            return 'pinning the chamber and pulling the trigger!'
        }else if (chamber === bulletInChamber){
            return 'BANG!'
        } else {return 'You are safe!' }
    }
    /*constructor(props){
    super(props)
    this.state = {chamber:null, spinningtheChamber:false, count:0}
}

    triggerChamber(){
        let bulletInChamber= 8;
        this.bulletInChamber = Math.ceil(Math.random() * 8);
        if(this.Count === this.bulletInChamber){
            return
            this.message = "BANG!!!";
            clearTimeout(this.Timeout);   
        }
        else {
            return
            this.message= "You are safe!";
            clearTimeout(this.Timeout)
        }

    }

    spinChamber(){
        this.setState({spinningtheChamber:true});
        this.TimeOut = setTimeout (this.triggerChamber.bind(this), 2000)
        this.message="Spinning the chamber and pulling the trigger!";
            
    }
    */
   //why don't we need triggerChamber()
        render(){
            return(
            <div className= 'Roulettegun'>
                <button onClick={this.spinChamber}>Pull the trigger</button>
                <p>{this.triggerChamber}</p>
            </div>
        )
    }
}

export default Roulettegun;