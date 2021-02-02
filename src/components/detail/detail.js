import React from 'react';
import './detail.css'

class Detail extends React.Component {
    render() {
        return (
            <section id='detail_container'>
                <p>Current city</p>
                <p>Medellin</p>
                <div>
                    <img alt='icon'/>
                    <p>28.6 C</p>
                </div>
                <p>285.93 Temp.min</p>
                <p>289.15 Temp.max</p>
                <p>288.38 Feels like</p>
                <p>100 Humidity</p>
            </section>
        );
    }
}

export default Detail;