import React, {Component, useState, useEffect, Fragment} from 'react';
import Lindo from "./Lindo";


const City = () => {
    const [city, setCity] = useState("Recife");

    const [num, setNum] = useState(100);
    const [countries, setCountries] = useState([]);
    
    useEffect(() => {
        setCountries(countries);
    }, [])

    const handleCity = (event) => setCity(event.target.value); 

    return (
        <Fragment>
        <div style={{border: `1px solid ${city === 'Recife' ? 'pink': 'black'}`}}>
            Cidade: {city}<br/>
            <input type="text" onChange={handleCity} />
            Habitantes: {num}
            <input type="number" onChange={(event) => setNum(event.target.value)} />
        </div>
        <div>
            OI
        </div>
        </Fragment>
    )
}


class App extends Component {
    constructor() {
        super();
        this.state = { 
            displayBio: false,
            country: 'Brasil',
        };

    }

    async componentDidMount() {
    }

    handleCountry = (event) => {
        const country = event.target.value;
        this.setState({
            country,
        });
    };


    render() {
        return (
            <div>
                <h1>Hello! {this.state.country}</h1>
                <City />
                <Lindo name="Rafa" age={20} />
                <Lindo name="Murilo" />
                Pais: <input type="text" onChange={this.handleCountry} />
                <p>My name is Rafa. I'm a React engineer.</p>
                <p>I'm always looking forward to working on meaningful projects.</p>
                {
                    this.state.displayBio ? (
                        <div>
                            <p>I live in Recife, and I code every day.</p>
                            <p>My favorite language is C#, and I think React is awesome</p>
                            <p>Besides coding, I also love music and pizza!</p>
                        </div>
                    ) : null
                }
            </div>
        )
    }

}

export default App;