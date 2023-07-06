import React, { Component } from 'react';
import Car from './Cars';

class Mycars extends Component {
    render() {
        return (
            <div>
                <h1>Catalogue voiture</h1>
                <Car color="red">Ford</Car>
                <Car>Mercedes</Car>
                <Car color="green"></Car>               
            </div>
            
        )
    }
}

export default Mycars;