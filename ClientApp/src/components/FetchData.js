import React, { Component } from 'react';

export class FetchData extends Component {
    static displayName = FetchData.name;

    constructor(props) {
        super(props);
        this.state = { forecasts: [], loading: true };
    }

    componentDidMount() {
        this.populateWeatherData();
    }

    static renderForecastsTable(forecasts) {
        return (
            <div>
                <table className='table table-striped' aria-labelledby="tabelLabel">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Temp. (C)</th>
                            <th>Temp. (F)</th>
                            <th>Summary</th>
                        </tr>
                    </thead>
                    <tbody>
                        {forecasts.map(forecast =>
                            <tr key={forecast.date}>
                                <td>{forecast.date}</td>
                                <td>{forecast.temperatureC}</td>
                                <td>{forecast.temperatureF}</td>
                                <td>{forecast.summary}</td>
                            </tr>
                        )}
                    </tbody>
                </table>

            </div>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : FetchData.renderForecastsTable(this.state.forecasts);

        return (
            <div>
                <h1 id="tabelLabel" >Weather forecast</h1>
                <p>This component demonstrates fetching data from the server.</p>
                {contents}
                <button onClick={this.alertUser}>Add Random Weather</button>
            </div>
        );
    }


    async alertUser() {

        alert('Method Called')
        /*alert("Adding Weather");*/

        const data = await fetch(
            'weatherforecast', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                TemperatureC: 20
            })
        }).then((data) => data.json());

        /*this.setState({ forecasts: data, loading: false });*/
    };


    //async populateWeatherData() {
    //    const response = await fetch('weatherforecast');

    //    const data = await response.json();
    //    console.log(data);
    //    this.setState({ forecasts: data, loading: false });
    //}

    async populateWeatherData() {
        const data = await fetch(
            'weatherforecast'
        ).then((data) => data.json());

        this.setState({ forecasts: data, loading: false });
    }


}
