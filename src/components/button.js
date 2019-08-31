import React, { PureComponent } from 'react';


class Button extends PureComponent {
    render(){
        return(
            <button onClick={this.props.action(this.props.symbol)}>{this.props.symbol}</button>
        )
    }
}

export default Button;