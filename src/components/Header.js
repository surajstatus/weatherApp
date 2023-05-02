import React, { useEffect, useState } from 'react'
import app from '../App.css'


const Header = () => {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState('pune');


    /* fetch function ...... */


    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=fa74d479b3d73333e8e84db040f4f214`;
            const response = await fetch(url);
            const resJson = await response.json();
            setCity(resJson);
        };
        fetchApi();
    }, [search])


    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Climate Updates</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Reports</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About US</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" id='search-city' type="search" placeholder="Please Search Here" aria-label="Search" maxLength={'25'} onBlur = {(event) => { setSearch(event.target.value) }} />
                            </form>
                    </div>
                </div>
            </nav>



            {/* city - heading part */}





            <div className='city-bg'>
                <h1 align="center" className="city-name">
                    {search}

                </h1>
            </div>




            {/* climate part...... */}

            {!city ? (
                <h2>No Data Found</h2>
            ) : (
                <>
                    <div className='main-view-climate'>
                        <div className='climate-page'>
                            <h2>{search}</h2>
                            <h3>Temprature : {city.main.temp} °C</h3>
                            <h3>weather : {city.weather[0].description}</h3>
                            <h3>Contry Code: {city.sys.country}</h3>
                        </div>

                    </div>
                    <div className='icon-page'></div>

                </>
            )}

        </>
    )
}

export default Header
