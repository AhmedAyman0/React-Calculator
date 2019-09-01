import React, { PureComponent } from 'react';
import '../css/style.css'

class Button extends PureComponent {
    render(){
        return(
            <div className={`col-${this.props.col}`}>
            <button  className="calc-button" onClick={()=>this.props.action(this.props.symbol)}>{this.props.symbol}</button>
            </div>
        )
    }
}

export default Button;