import React from 'react'
import Chart from 'react-apexcharts'

const valueFomatter = (value) => {
    if (value < 1e3) return value;
    if (value >= 1e3 && value < 1e6) return +(value / 1e3).toFixed(1) + "K";
    if (value >= 1e6 && value < 1e9) return +(value / 1e6).toFixed(1) + "M";
    if (value >= 1e9 && value < 1e12) return +(value / 1e9).toFixed(1) + "B";
}

const VAI = () => {
    const options = {
        chart: {
            type: 'bar',
            height: 430,
            toolbar: {
                show: false,
            },
            selection: {
                enabled: true,
            },
        },
        tooltip: {
            enabled: false
        },
        colors: ['#ff0000', '#0000ff'],
        plotOptions: {
            bar: {
            horizontal: true,
            dataLabels: {
                position: 'top',
                },
            },   
        },
        
        dataLabels: {
            enabled: true,
            offsetX: 50,
            style: {
                cssClass: 'brands-data-label',
                colors: ['#000'],
            },
            formatter: value => valueFomatter(value),
        },

        xaxis: {
            type: 'category',
            categories: [
                ['Yokohama Tyres', valueFomatter(414000)], 
                ['Mercedes-Benz', valueFomatter(341000)], 
                ['Procter & Gamble', valueFomatter(486000)], 
                ['Unilever', valueFomatter(118000)],
                ['Estée Lauder Companies', valueFomatter(798000)]
            ],
            labels: {
                formatter:  value => valueFomatter(value),
            },
        },
        yaxis: {
            labels: {
                formatter: value => [value[0], `$${value[1]}`],
                style: {
                    cssClass: 'brands-yaxis-label',
                },
                minWidth: 200,
                maxWidth: 500,
            },  
        },
        grid: {
            xaxis: {
                lines: {
                    show: true,
                }
            },
            yaxis: {
                lines: {
                    show: false,
                }
            }
        },
        legend: {
            position: 'top',
          }
     
      }

    const series = [{
        name: 'Investment',
        data: [128000,365000,150000,335000,295000]
      }, {
        name: 'Value Delivered',
        data: [395000,435000,655000,410000,500000]
      }]
    

    return(
        <div className='bar-chart'>
            <div className='header' >
                <div className='title' > Value Above Investment (VAI) </div> 
                <select>
                    <option>Weekly</option>
                </select>
            </div>
            <Chart
            options = {options}
            series = {series}
            height = '80%'
            width = '98%'
            type = 'bar'
            />
        </div>
    )
}

export default VAI