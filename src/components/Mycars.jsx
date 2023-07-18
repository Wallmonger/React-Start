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


    noCopy = () => {
        alert('merci de ne pas copier le texte');
    }

    addStyle = (e) => {
        console.log(e);
    }

    render() {

        const {color} = this.props;

        return (
            <div>
                <h1 onMouseOver={this.addStyle}>{this.props.title}</h1>
                <Wrapper>
                    <MyHeader MyStyle={color}>
                        {this.props.title}
                    </MyHeader>
                </Wrapper>
                <p onCopy={this.noCopy}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est.</p>
            

                {this.state.cars.map((element, index) => (
                    <Car color="red">{element}</Car>
                ))}
            </div>
            
        )
    }
}

export default Mycars;