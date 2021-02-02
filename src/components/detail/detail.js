import React from 'react';
import './detail.css'

class Detail extends React.Component {
    render() {
        return (
            <section id='detail_container'>
                <p className='text'>Current city</p>
                <p>Medellin</p>
                <div className='weather'>
                    <img alt='icon'/>
                    <p className='temp'>28.6 C</p>
                    <p className='main'>Sunny</p>
                </div>
                <p className='text'>285.93 Temp.min</p>
                <p className='text'>289.15 Temp.max</p>
                <p className='text'>288.38 Feels like</p>
                <p className='text'>100 Humidity</p>
            </section>
        );
    }
}

export default Detail;