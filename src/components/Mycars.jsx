import React, { Component } from 'react';
// import Car from './Cars';
import Wrapper from './Wrapper';
import MyHeader from './MyHeader';

const Car = ({children, color}) => {

    let colorInfo = "";

    if (color) {
        colorInfo = color;
    } else {
        colorInfo = "Néant";
    }

    if (children) {
        return (
            <Wrapper>
                <p>Marque: { children }</p>
                <p>Couleur : {colorInfo}</p>  
            </Wrapper> 
        )
    } else {
        return (
            <Wrapper>
                <p>Non renseigné</p>   
            </Wrapper>
        )
    }
}


class Mycars extends Component {

    state = {
        cars : ["Ford", "Mercedes", "Peugeot"]
    }

    render() {

        // Destructuring ver
        // const {title} = this.props;
        const {color} = this.props;

        return (
            <div>
                {/* Destructuring ver */}
                {/* <h1>{title}</h1> */}
                <Wrapper>
                    <MyHeader MyStyle={color}>
                        {this.props.title}
                    </MyHeader>
                </Wrapper>
                
                {/* <Car color="red">{this.state.cars[0]}</Car>
                <Car>{this.state.cars[1]}</Car>
                <Car color="green">{this.state.cars[2]}</Car>                */}

                {this.state.cars.map((element, index) => (
                    <Car color="red">{element}</Car>
                ))}
            </div>
            
        )
    }
}

export default Mycars;