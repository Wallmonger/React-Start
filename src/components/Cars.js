import React from 'react';
import Wrapper from './Wrapper'
// With destructuring, we can access data inside an object without the need of a variable name
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
                {/* { color ? <p>Couleur : {color} </p> : <p>Couleur : néant </p>} */}
                {/* <p>{color ? color : "Néant" }</p> */}
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



    // On peut également retourner de cette façon : 
    // return children ? (mon jsx) : (mon jsx indiquant qu'il n'y a aucune information)
    
}

export default Car;