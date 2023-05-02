import React, {useState} from 'react'
import '../App.css';

const Climate = () => {
    const [city, setCity] = useState('kalwa');

    /* const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`;
    const form = document.querySelector("form")
const search = document.querySelector("#search")
const weather = document.querySelector("#weather") */
  return (
    
      <div className='main-view-climate'>
      <div className='climate-page'>
        <h2>{city}</h2>
        <h3>Temprature : 32 °C</h3>
        <h3>Visbility : 1000</h3>
        <h3>Contry Code: IN</h3>
      </div>

      <div className='icon-page'></div>
    </div>
    
  )
}

export default Climate
