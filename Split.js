import React from 'react'
import './Split.css'
function Split(props){
    const combinedclassName = `Split ${props.className}`;
    const newStyles = {flex:props.flexBasis}
    return (
        <div className={combinedclassName} style={newStyles}> 
        {props.children}
        </div>
    );
}
export default Split;