import React from 'react';
import './card.css'

class Card extends React.Component {
    render() {
        return (
        <section className='card'>
            <p>Current</p>
            <h1>{this.props.city}</h1>
            <h1>{this.props.temp}ºC</h1>
            <h1>{this.props.time}</h1>
            <article>
                <img src={'http://openweathermap.org/img/wn/'+this.props.icon+'@2x.png'}/>
            </article>

        </section>
        )
    }
}

export default Card;