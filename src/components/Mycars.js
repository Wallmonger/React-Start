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
                <Car 
                    name={this.state.voitures[0].name} 
                    color={this.state.voitures[0].color} 
                    year={this.state.voitures[0].year} 
                />
                <Car 
                    name={this.state.voitures[1].name} 
                    color={this.state.voitures[1].color} 
                    year={this.state.voitures[1].year} 
                />
                <Car 
                    name={this.state.voitures[2].name} 
                    color={this.state.voitures[2].color} 
                    year={this.state.voitures[2].year} 
                />


                {
                    /*
                    this.state.voitures.map((element, index) => (
                    <div key={element.name + '-' + index}>
                        <Car name={element.name} color = {element.color} year = {year - element.year + ' ans'} />
                    </div>
                    ))
                    */
                }
                
            </div>
           
        )
    }
}

export default Mycars