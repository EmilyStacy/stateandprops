import React from 'react';
class Accordion2 extends React.Component {
    static defaultProps = {sections:[]}
    state = {openSectionIndex:null}
    handleButtonClick(index){
        this.setState({openSectionIndex : index})

    }
    renderButton(section,index){
        return <button key={index} onClick={()=>{this.handleButtonClick(index)}}>{section.title}</button>
    }

    render(){
        const currentTab = this.state.openSectionIndex;
        return(
            <ul>
                {this.props.sections.map((section,index)=>(
                <li className="Accordion_item" key={index}>
                {this.renderButton(section,index)}
                {(currentTab === index)&& <p>{section.content}</p>}  
                </li>))}
            </ul>
        )
                }
            }
export default Accordion2
//Question: how can I turn the state back to null when the same button was clicked twice? I learned toggle from javascript, but I am not sure how to use it here