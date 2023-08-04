import { Component, Fragment } from 'react'
import Car from './Cars'
import Welcome from './Welcome'
class Mycars extends Component {

    state = {
        voitures: [
            {name : 'ford', color: 'red', year : 2023},
            {name : 'Mercedes', color: 'black', year : 2022},
            {name : 'Peugeot', color: 'green', year : 2019},
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

    getAge = year => {
        const now = new Date().getFullYear();
        const age = now - year;

        let frenchYearStr;
        if (age === 1) {
            frenchYearStr = "an";
        } else if (age > 1) {
            frenchYearStr = "ans";
        } else {
            frenchYearStr = "";
        }
        return `${age} ${frenchYearStr}`
        
    }

    render() {
        // Destructuring de notre state pour une écriture simplifiée
        // L'array parcoure tous les éléments de "voitures" afin de les assigner aux variables ford, mercedes et peugeot
        const [ford, mercedes, peugeot] = this.state.voitures; 
        console.log(ford, mercedes, peugeot);

        return (
            <Fragment>
                <Welcome></Welcome>
                <h1>{this.state.titre}</h1>
                <button onClick={this.addTenYears}> + 10 ans</button>
                


                {
                    this.state.voitures.map(({name, color, year}, index) => (
                    <div key={name + '-' + index}>
                        <Car    
                            color = {color} 
                            year = {this.getAge(year)} 
                        >
                            {name}
                        </Car>
                    </div>
                    ))
                }
                
            </Fragment>
           
        )
    }
}

export default Mycars