import './App.css';
import React from 'react';
import Graphics from './Graphics';

async function checkweatherincity(cityName) {
  const key = '7f3acbb06dc37fbe907967270e2dabc9';
  const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityName+ '&appid=' + key)
  if( response.ok === false )
  {
    const data = {
      main: {
        humidity: 404,
        temp: 404
      },
      weather: [ { main: 'City doesn\'t exist' } ]
    }
    return data;
  }
  else {
    const data = await response.json();
    return data;
  }
}

async function checkweatherincoords( lon, lat ) {
  const key = '7f3acbb06dc37fbe907967270e2dabc9';
  const response = await fetch( 'https://api.openweathermap.org/geo/1.0/reverse?lat=' + lat + '&lon=' + lon + '&limit=1&appid=' + key )
  if( response.ok === false )
  {
    const data = {
      main: {
        humidity: 404,
        temp: 404
      },
      weather: [ { main: 'City doesn\'t exist' } ]
    }
    return data;
  }
  else {
    const city = await response.json();
    const data = await checkweatherincity( city[0].name );
    console.log(city,data)
    return data;
  }
}

function Day(props) {

  if( props.humidity === 404 ) {
    return(
      <div id="weather">
        <div id="innerweather">
          <p id="temperature">This city<br/>doesn't exist</p>
        </div>
      </div>
    );
  }

  if( props.tempunit === "Celsius" )
    var temp = Math.round(props.temp-273.15).toString()+"°C";
  if( props.tempunit === "Fahrenheit" )
    temp = Math.round((props.temp-273.15)*9/5+32).toString()+"°F";
  if( props.tempunit === "Kelvin" )
    temp = Math.round(props.temp).toString()+"°K";
  return(
    <div id="weather">
      <div id="innerweather">
        <p id="temperature"> {temp} </p>
        <p> humidity {props.humidity}% <br/> {props.weather} </p>
      </div>
    </div>
  );
}

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 'London',
      humidity: 0,
      temp: 0,
      tempunit: "Celsius",
      weather: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.onChangeValue = this.onChangeValue.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.weatherCurrentLocation = this.weatherCurrentLocation.bind(this);
  }

  componentDidMount() {
    this.weatherCurrentLocation()
  }
  
  weatherCurrentLocation() {
    
    if( navigator.geolocation )
    {
      navigator.geolocation.getCurrentPosition( positon => {
        checkweatherincoords( positon.coords.longitude, positon.coords.latitude ).then( data => { 
          this.setState({value: data.name, temp: data.main.temp, humidity: data.main.humidity, weather: data.weather[0].main});
          Graphics( this.state.weather )
        } );
      } );
    }
    else
    {
      checkweatherincity(this.state.value).then( data => { 
        this.setState({temp: data.main.temp, humidity: data.main.humidity, weather: data.weather[0].main});
        Graphics( this.state.weather )
      } );
    }
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  onChangeValue(event) {
    this.setState({tempunit: event.target.value});
  }

  handleSubmit(event) {
    if( this.state.value !== "" ) {
      checkweatherincity(this.state.value).then( data => {
        this.setState({temp: data.main.temp, humidity: data.main.humidity, weather: data.weather[0].main});
        Graphics( this.state.weather )
      } );
    }
    event.preventDefault();
  }
  
  render() {
  return (
      <div className="App" id="App">

        <div id="nav">
          <button disabled = { ( navigator.geolocation === true ) ? true : false } onClick={this.weatherCurrentLocation}>  </button>
          <form id="input" onSubmit={this.handleSubmit}>
            <input type="text" id="textinput" placeholder="City Name" value={this.state.value} onChange={this.handleChange} />
            <select id="tempform" name="tempunit" onChange={this.onChangeValue} >
              <option value="Celsius">°C</option>
              <option value="Fahrenheit">°F</option>
              <option value="Kelvin">°K</option>
            </select>
          </form>
        </div>

        <div id = 'bottombackground' />
        <Day temp={this.state.temp} humidity={this.state.humidity} weather={this.state.weather} tempunit={this.state.tempunit} />

      </div>
    );
  }
}

export default App;
