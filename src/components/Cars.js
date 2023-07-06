import React from 'react';

// With destructuring, we can access data inside an object without the need of a variable name
const Car = ({children, color}) => {

    // If color is defined, then <p> will display the color. Else, <p> display default value
    const colorInfo = color ? (<p>Couleur : { color }</p>) : (<p>Couleur : Inconnue</p>);

    if (children) {
        return (
            <div style={{backgroundColor : 'pink', width : '400px', padding: '10px', margin:'5px auto'}}>
                <p>Marque: { children }</p>
                { colorInfo }
    
                {/* We also can insert our condition here, in the jsx himself : {color ? <p>Couleur: {color}</p> : <p> Couleur : inconnue </p> } */ }
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