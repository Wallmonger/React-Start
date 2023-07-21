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

        const year = new Date().getFullYear();

        return (
            <div>
                <h1>{this.state.titre}</h1>
                <button onClick={this.addTenYears}> + 10 ans</button>

                {
                    this.state.voitures.map((element, index) => (
                    <div key={element.name + '-' + index}>
                        <Car name={element.name} color = {element.color} year = {year - element.year + ' ans'} />
                    </div>
                    ))
                }
                
            </div>
           
        )
    }
}

export default Mycars