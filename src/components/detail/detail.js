import React from 'react';
import './detail.css'

class Detail extends React.Component {
    state = {
        current_city: '',
        icon:'',
        description:'',
        main:{}
    }

    componentDidMount() {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=Medellin&lang=es&units=metric&APPID=838d87a9b63e966e5b3753b305b76dfa')
        .then((res) => res.json())
        .then( data => {
            this.setState({current_city: data})
            this.setState({icon: this.state.current_city.weather[0].icon})
            this.setState({main: this.state.current_city.main})
            this.setState({description: this.state.current_city.weather[0].description})
            //console.log(data)
            //console.log(this.state.current_city.weather[0].icon)
            console.log(this.state.current_city.weather[0].description)
        })
    }

    render() {
        return (
            <section id='detail_container'>
                <p className='text_detail'>Current city</p>
                <p id='city'>{this.state.current_city.name}</p>
                <div className='weather'>
                    <img src={'http://openweathermap.org/img/wn/'+this.state.icon+'@2x.png'}alt='icon'/>
                    <div>
                        <p className='temp_detail'>{this.state.main.temp} ºC</p>
                        <p className='main_detail'>{this.state.description}</p>
                    </div>
                </div>
                <p className='text_detail'>{this.state.main.temp_min} ºC <span>Temp.minimun</span></p>
                <p className='text_detail'>{this.state.main.temp_max} ºC <span>Temp.maximun</span></p>
                <p className='text_detail'>{this.state.main.feels_like} ºC <span>Feels like</span></p>
                <p className='text_detail'>{this.state.main.humidity} ºC <span>Humidity</span></p>
            </section>
        );
    }
}

export default Detail;