import React, { Component } from 'react';
import Chart from 'chart.js';

class GermanALevel extends Component {
    chartRef = React.createRef();

    componentDidMount() {
        new Chart(this.chartRef.current, {
            type: 'line',
            data: {
                labels: ["2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019"],
                datasets: [
                    { 
                        label: "German language exam entries at A level in England",
                        data: [4866, 4478, 3999, 3953, 3791, 3617, 3422, 2859, 2864],
                    }
                ]
            },
            options: {

            }
        });
    
    }

    render() {
        return (
            <div className="german">
              <canvas id="graph1" ref={this.chartRef}></canvas>
            </div>
        )
    }
}

export default GermanALevel;