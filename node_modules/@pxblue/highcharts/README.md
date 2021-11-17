# Highcharts Configurations
[![](https://img.shields.io/npm/v/@pxblue/highcharts.svg?label=@pxblue/highcharts&style=flat)](https://www.npmjs.com/package/@pxblue/highcharts)
[![](https://img.shields.io/circleci/project/github/pxblue/highcharts/master.svg?style=flat)](https://circleci.com/gh/pxblue/highcharts/tree/master)

This package contains basic support for basic HighCharts line, pie, bar, and donut graphs for use with PX Blue. 

## Installation
Install with npm:
```
npm install --save @pxblue/highcharts
```
or yarn
```
yarn add @pxblue/highcharts
```

## Basic Usage
To use this library, import the chart generator functions from the package:

```
import { 
    createLineGraph, 
    createPieGraph, 
    createDonutGraph, 
    createBarGraph 
} from '@pxblue/highcharts'; 
```

and then use them as placeholders in your application.

For Angular:
```
import { Chart } from 'angular-highcharts';
...
let lineChart = new Chart(createLineGraph());
```

For React:
```
import ReactHighcharts from 'react-highcharts';
...
<ReactHighcharts config={createLineGraph()}/>
```
This will use the default sample data to render a chart in your application. Read the following section for instructions on specifying your own configuration/data.

## Advanced Usage
When you are ready to customize charts of your own, you can pass a configuration object into the chart generator functions. 

```
import { createPieChart } from '@pxblue/highcharts';
...
let myPieConfig = {
    series: [{
        name: 'Browsers',
        data:[
            {name: 'Chrome', y: 61.41},
            { name: 'Internet Explorer', y: 11.84 }, 
            { name: 'Firefox', y: 10.85 }
        ]
    }],
    colors: ['red', 'orange', 'yellow']
};
let myChart = createPieChart(myPieConfig);
```
This configuration object will accept any property than can be supplied to a standard Highcharts config object ([API Reference](https://api.highcharts.com/highcharts/)). Additionally, you may supply a ```colors``` property which is an array of colors to be used in the chart.


## Additional Utilities
This package also includes several utility functions and style variables to make it easier for users to customize certain parts of the chart configuration. Specific documentation for these functions/variables can be found in the source files.

```
import {
    OpenSans,       
    pxblueColors,
    sizes
} from '@pxblue/highcharts/styles';

import {
    getRandomData,       
    sharedTooltipFormatter,
    sharedTimeTooltipFormatter,
    simpleTooltipFormatter
} from '@pxblue/highcharts/utilities';
```

### Translations

Several functions are provided that will translate the language and format of chart labels. These functions can be imported from the i18n file and accept a language locale string as their argument.

```tsx
import { getChartsLanguage, getChartsAxisDateTimeLabelFormats, getChartsTooltipDateTimeLabelFormats } from '@pxblue/highcharts';
...
const langOptions = getChartsLanguage('fr');
const axisFormats = getChartsAxisDateTimeLabelFormats('fr');
const tooltipFormats = getChartsTooltipDateTimeLabelFormats('fr');
```

-   **getChartsLanguage**: _`(i18nLanguage: string) => Highcharts.LangOptions | undefined)`_
-   **getChartsAxisDateTimeLabelFormats**: _`(i18nLanguage: string) => Highcharts.AxisDateTimeLabelFormatsOptions | undefined)`_
-   **getChartsTooltipDateTimeLabelFormats**: _`(i18nLanguage: string) => FormatStrings | undefined)`_

#### FormatStrings
-   **day**: _`string`_
-   **hour**: _`string`_
-   **millisecond**: _`string`_
-   **second**: _`string`_
-   **minute**: _`string`_
-   **month**: _`string`_
-   **year**: _`string`_
-   **week**: _`string`_

## Demos
| Framework | Live Examples                                                                                    |
|-----------|--------------------------------------------------------------------------------------------------|
| Angular   | [View on Stackblitz](https://stackblitz.com/github/pxblue/highcharts/tree/master/angular-demo)   |
| React     | [View on Code Sandbox](https://codesandbox.io/s/github/pxblue/highcharts/tree/master/react-demo) |