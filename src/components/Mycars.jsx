import React, { Component } from 'react';
import Car from './Cars';

class Mycars extends Component {
    render() {

        // Destructuring ver
        // const {title} = this.props;

        return (
            <div>
                {/* Destructuring ver */}
                {/* <h1>{title}</h1> */}

                <h1>{this.props.title}</h1>
                <Car color="red">Ford</Car>
                <Car>Mercedes</Car>
                <Car color="green"></Car>               
            </div>
            
        )
    }
}

export default Mycars;