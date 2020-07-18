import React from 'react'
import Chart from 'react-apexcharts'

const teams = ['','Chelsea','Manchester United','Sprus','Arsenal','Barcelona','']

const GlobalRanking = () => {

const series = [{
    type: 'area',
    name: 'Sales',
    data: [0,79,42,60,40,100,0]
  }]

const options = {

        chart: {
            id: "fx-chart",
            height: 230,
            toolbar: {
                show: false,
            }
        },
        colors: ['#FF9D42'],
        fill: {
            type: "gradient",
            gradient: {
              shadeIntensity: 0,
              opacityFrom: 0.7,
              opacityTo: 0.9,
              stops: [0, 50, 100]
            }
          },
        xaxis: {
            categories: teams,
            labels:{
                show: false,
            },
            tooltip: {
                enabled: false
            },
        },
        markers: {
            size: 5,
        },
        dataLabels: {
            enabled: true,
            offsetY: -10,
            style: {
                colors: ['#000']
            },
            discrete: [{
                seriesIndex: 0,
            }],
            formatter: function (val, opt) {
                return teams[opt.dataPointIndex]
            },
        },
        
        yaxis: {
            tickAmount: 5,
            max: 100,
            labels: {
                formatter: (value) => value.toFixed(0) +'%',
            },
        },
        stroke: {
            width: 0,
            curve: 'smooth',
        },
        grid: {
            xaxis: {
                lines: {
                    show: false,
                }
            },
            yaxis: {
                lines: {
                    show: true,
                }
            }
        },
}


    return (
        <div className = 'area-chart'>
            <div className='header' >
                <div className='title' > Global Ranking (brand value YTD) </div> 
                <select>
                    <option>Weekly</option>
                </select>
            </div>
            <Chart 
                className='chart'
                options = {options}
                series = {series}
                height = '80%'
                width = '100%'
            />
        </div>
    )
}


export default GlobalRanking
