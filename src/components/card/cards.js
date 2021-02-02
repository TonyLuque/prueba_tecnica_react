import React from 'react';
import './card.css'

class Card extends React.Component {
    render(){
        return (
            <section className='card'>
                <p>Cali, CO</p>
                <div>
                    <img alt='icon'></img>
                    <article>
                        <p className='time'>sunny</p>
                        <p className='temp'>28.5 ºC</p>
                    </article>
                </div>
            </section>
        );
    }
}

export default Card;