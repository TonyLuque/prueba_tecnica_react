import React from 'react';
import './cards.css'

import Card from './card';

class Cards extends React.Component {

    state = {
        cities: []
    }

    componentDidMount() {
        fetch('https://api.openweathermap.org/data/2.5/find?lat=6.230833&lon=-75.590553&cnt=10&units=metric&lang=es&APPID=838d87a9b63e966e5b3753b305b76dfa')
        .then((res) => res.json())
        .then( data => {
            this.setState({cities: data.list})
            console.log(data.list)
        })
    }

    render(){
        return (
            <section id='cards'>
                {
                    this.state.cities.map((city, index) => {
                        return (
                        <Card 
                            key={index} 
                            city={city.name}
                            icon={city.weather[0].icon}
                            time={city.weather[0].description}
                            temp={city.main.temp}
                        />)
                    })    
                }
            </section>
        );
    }
}

export default Cards;