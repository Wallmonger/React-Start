import React from 'react';

// With destructuring, we can access data inside an object without the need of a variable name
const Car = ({children, color}) => {

    

    return (
        <div style={{backgroundColor : 'pink', width : '400px', padding: '10px', margin:'5px auto'}}>
            <p>Marque: { children }</p>
            <p>Couleur : { color }</p>
        </div>
        
    )
}

export default Car;