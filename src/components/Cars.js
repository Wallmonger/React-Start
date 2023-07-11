import React from 'react';

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
            <div style={{backgroundColor : 'pink', width : '400px', padding: '10px', margin:'5px auto'}}>
                <p>Marque: { children }</p>
                {/* { color ? <p>Couleur : {color} </p> : <p>Couleur : néant </p>} */}
                {/* <p>{color ? color : "Néant" }</p> */}
                <p>Couleur : {colorInfo}</p>


            </div>     
        )
    } else {
        return (
            <div style={{backgroundColor : 'pink', width : '400px', padding: '10px', margin:'5px auto'}}>
                <p>Non renseigné</p>
            </div>     
        )
    }



    // On peut également retourner de cette façon : 
    // return children ? (mon jsx) : (mon jsx indiquant qu'il n'y a aucune information)
    
}

export default Car;