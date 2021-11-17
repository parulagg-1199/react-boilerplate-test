import React from "react";
import ReactHighcharts from "react-highcharts";

import "./dist/style.css";

// Functional component used 
function PieChart() {
  const config = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: "pie",
      marginTop: 0,
      spacingLeft: 0,
      spacingRight: 0,
      spacingTop: 0
    },
    title: {
      text: "Pie Chart",
      align: "center",
      verticalAlign: "middle",
      y: -30,
      style: {
        fontWeight: 200
      }
    },
    subtitle: {
      text: "subtitle",
      align: "center",
      verticalAlign: "middle",
      y: 0
    },
    tooltip: {
      enabled: false
    },
    plotOptions: {
      series: {
        states: {
          hover: {
            enabled: false
          }
        }
      },
      pie: {
        allowPointSelect: false,
        cursor: "pointer",
        dataLabels: {
          enabled: false
        },
        point: {
          events: {
            legendItemClick: () => false
          }
        },
        showInLegend: true,
        borderWidth: 0,
        colors: ["#a5c559", "#edf3de"]
      }
    },
    series: [
      {
        innerSize: "67%",
        data: [
          {
            name: "Listed",
            y: 1
          },
          {
            name: "Not Listed",
            y: 1
          }
        ]
      }
    ],
    credits: {
      enabled: false
    },
    legend: {
      itemStyle: {
        color: "#787878"
      },
      symbolRadius: 0
    }
  };

  return (
    <div className="App">
      <ReactHighcharts config={config} />
    </div>
  );
}

export default PieChart;
