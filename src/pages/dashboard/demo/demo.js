import React from 'react';
// @ts-ignore
import ReactHighcharts from 'react-highcharts';

// @ts-ignore
import { createLineChart, createBarChart, createDonutChart } from '@pxblue/highcharts';
import * as PXBColors from '@pxblue/colors';
import PieChart from '../../../component/charts/pieChart/pieChart';

const mainConfig = {
    colors: [PXBColors.blue[900], PXBColors.blue[500], PXBColors.blue[200]],
};

const lineConfig = {
    colors: [PXBColors.blue[500], PXBColors.blue[200], PXBColors.blue[200]],
};

const graphStyles = {
    domProps: {
        style: {
            height: '100%',
        },
    },
};

const Demo = () => (
    <div>
        <h1 style={{ textAlign: 'center', padding: '10px' }}><strong>React HighChart</strong></h1>
        <p>Highcharts is a pure JavaScript based charting library meant to enhance web applications by adding interactive charting capability.</p>
        <div style={{ height: '300px', padding: '50px' }}>
            <h4>Donut Chart</h4>
            <ReactHighcharts config={createDonutChart(mainConfig)} {...graphStyles} />
        </div>
        <div style={{ height: '400px', padding: '50px' }}>
        <h4>Line Chart</h4>
            <ReactHighcharts config={createLineChart(lineConfig)} {...graphStyles} />
        </div>
        <div style={{ height: '400px', padding: '50px' }}>
        <h4>Bar Chart</h4>
            <ReactHighcharts config={createBarChart(mainConfig)} {...graphStyles} />
        </div>

        {/* Reusable component which can be called anywhere */}
        <div style={{ height: '400px', padding: '50px' }}>
        <h4>Pie Chart</h4>
            <PieChart />
        </div>
    </div>
);

export default Demo;