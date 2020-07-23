import React, { Component } from "react";
import i from "../icons/i.svg";
import path from "../icons/path.svg";
import ReactApexChart from "react-apexcharts";
import { Popup } from "semantic-ui-react";
import '../css/ParnerStyle.css';

export default class PartnerCard extends Component {
  state = {
    series: [93, 61, 76, 96],
    options: {
      stroke: {
        show: true,
        lineCap: "round",
        width: 2,
      },
      track: {
        show: true,
        margin: 5,
      },
      chart: {
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          offsetY: 0,
          startAngle: 0,
          endAngle: 360,
          hollow: {
            margin: 5,
            size: "40%",
            background: "transparent",
            image: undefined,
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              show: false,
            },
          },
        },
      },

      // Apexcharts custom tooltip
      tooltip: {
        // set true to exnable
        enabled: false,
        custom: function({series, seriesIndex, w}) {
          return ('<div class="apexcharts-tool-tip">' +
            '<div>' + w.globals.labels[seriesIndex] + '</div>' + 
            '<div>' + series[seriesIndex] + '<span>' + "%" +'</span>' + '</div>' +
            '</div>')
        },
        followCursor: false,
      },

      colors: ["#2F69CC", "#F99A02", "#129219", "#DA3812"],
      labels: ["ROI", "VAI", "Total Investment", "Total Value"],

      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              show: false,
            },
          },
        },
      ],
    },
  };

  render() {
    return (
      <div className="part-wrap">
        <div className="vHead">
          <div className="vTitle">
            <p className="vTone">Partnership Value</p>
            <Popup
              size="large"
              wide={true}
              trigger={<img src={i} alt="sjl" className = 'vPopUp'/>}
              content="  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in
              cursus lorem. Nulla ac odio sit amet sem condimentum"
              position="right center"
            />
          </div>
          <div className="vWeek">
            <select className="vWone">
              <option>Week</option>
            </select>
          </div>
        </div>
        {/* partner chart */}
        <div className="ch-par">
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="radialBar"
            height = {300}
          />
          <div className = 'tool-tip' >
            <div className = 'tool-tip-one' >
              <div className = 'tool-tip-one-text'> Total Value <br/> 96% </div>
            </div>
            <div className = 'tool-tip-two' >
              <div className = 'tool-tip-two-text'> Total Investment <br/> 76% </div>
            </div>
            <div className = 'tool-tip-three' >
              <div className = 'tool-tip-three-text'> VAI <br/> 61% </div>
            </div>
            <div className = 'tool-tip-four' >
              <div className = 'tool-tip-four-text'> ROI <br/> 93% </div>
            </div>
          </div>
        </div>
        {/* container for the labels */}
        <div className="part-det-cont">
          <div className="part-main">
            <div className="part-me">
              <span className="part-circ"></span>
              <p className="part-text">ROI ( Return on Investment)</p>
            </div>
            <p className="p-percent">93%</p>
          </div>
          <div className="part-main">
            <div className="part-me">
              <span className="part-circ2"></span>
              <p className="part-text">VAI (Value Above Investment)</p>
            </div>
            <p className="p-percent">61%</p>
          </div>
          <div className="part-main">
            <div className="part-me">
              <span className="part-circ3"></span>
              <p className="part-text">Total Investment</p>
            </div>
            <p className="p-percent">76%</p>
          </div>
          <div className="part-main">
            <div className="part-me">
              <span className="part-circ4"></span>
              <p className="part-text">Total Value</p>
            </div>
            <p className="p-percent">96%</p>
          </div>
        </div>
        {/* end of container */}
        {/* view insights */}
        <section className="nine5">
          <img src={path} alt="jc" className="path5" />
          <p className="vie5">view more insights</p>
        </section>
        {/* end */}
      </div>
    );
  }
}
