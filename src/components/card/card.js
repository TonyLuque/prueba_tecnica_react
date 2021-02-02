import React from 'react';
import './card.css'

class Card extends React.Component {
    render() {
        return (
        <section className='card'>
            <p id='city_card' className='text_card'>{this.props.city}, {this.props.country}</p>
            <article>
                <img alt='icon' src={'http://openweathermap.org/img/wn/'+this.props.icon+'@2x.png'}/>
                <div>
                    <p id='time' className='text_card'>{this.props.time}</p>
                    <p id='temp' className='text_card'>{this.props.temp}ºC</p>
                </div>
            </article>

        </section>
        )
    }
}

export default Card;