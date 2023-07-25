import { Component } from 'react'
import Car from './Cars'

class Mycars extends Component {

    state = {
        voitures: [
            {name : 'ford', color: 'red', year : '2000'},
            {name : 'Mercedes', color: 'black', year : '2010'},
            {name : 'Peugeot', color: 'green', year : '2018'},
        ],
        titre: 'Mon catalogue voitures 2' 
    }

    addTenYears = () => {

        const updatedState = this.state.voitures.map((param) => {
            return param.year -= 10;
        })

        this.setState({
            updatedState
        })
    }

    render() {
        // Destructuring de notre state pour une écriture simplifiée
        // L'array parcoure tous les éléments de "voitures" afin de les assigner aux variables ford, mercedes et peugeot
        const [ford, mercedes, peugeot] = this.state.voitures; 
        console.log(ford, mercedes, peugeot);

        return (
            <div>
                <h1>{this.state.titre}</h1>
                <button onClick={this.addTenYears}> + 10 ans</button>
                


                {
                    this.state.voitures.map(({name, color, year}, index) => (
                    <div key={name + '-' + index}>
                        <Car name={name} color = {color} year = {year} />
                    </div>
                    ))
                }
                
            </div>
           
        )
    }
}

export default Mycars