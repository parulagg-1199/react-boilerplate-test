"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
test('helper functions return object', function () {
    expect(index_1.createBarChart()).toBeDefined();
    expect(index_1.createLineChart()).toBeDefined();
    expect(index_1.createPieChart()).toBeDefined();
    expect(index_1.createDonutChart()).toBeDefined();
});
test('pie chart parameters work', function () {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    var x = index_1.createPieChart({
        title: { text: 'test' },
        subtitle: { align: 'left' },
        tooltip: { borderColor: 'red' },
        plotOptions: { series: { states: { hover: { halo: { size: 20 } } } } },
        series: [{ name: 'Test', type: 'pie' }],
        legend: { enabled: false },
    });
    expect((_a = x.title) === null || _a === void 0 ? void 0 : _a.text).toEqual('test');
    expect((_b = x.subtitle) === null || _b === void 0 ? void 0 : _b.align).toEqual('left');
    expect((_c = x.tooltip) === null || _c === void 0 ? void 0 : _c.borderColor).toEqual('red');
    expect((_h = (_g = (_f = (_e = (_d = x.plotOptions) === null || _d === void 0 ? void 0 : _d.series) === null || _e === void 0 ? void 0 : _e.states) === null || _f === void 0 ? void 0 : _f.hover) === null || _g === void 0 ? void 0 : _g.halo) === null || _h === void 0 ? void 0 : _h.size).toEqual(20);
    expect(x.series).toEqual([{ name: 'Test', type: 'pie' }]);
    expect((_j = x.series) === null || _j === void 0 ? void 0 : _j.length).toEqual(1);
    expect((_k = x.legend) === null || _k === void 0 ? void 0 : _k.enabled).toEqual(false);
});
test('line chart parameters work', function () {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    var x = index_1.createLineChart({
        title: { text: 'test' },
        subtitle: { align: 'left' },
        tooltip: { borderColor: 'red' },
        plotOptions: { series: { states: { hover: { enabled: false } } } },
        series: [{ name: 'Test', type: 'line' }],
        legend: { enabled: false },
        colors: ['red', 'blue'],
        xAxis: { title: { text: 'test' } },
        yAxis: { labels: { format: '{value}' } },
    });
    var _xAxis = x.xAxis;
    var _yAxis = x.yAxis;
    expect(x.colors).toEqual(['red', 'blue']);
    expect((_a = x.title) === null || _a === void 0 ? void 0 : _a.text).toEqual('test');
    expect((_b = x.subtitle) === null || _b === void 0 ? void 0 : _b.align).toEqual('left');
    expect((_c = x.tooltip) === null || _c === void 0 ? void 0 : _c.borderColor).toEqual('red');
    expect((_g = (_f = (_e = (_d = x.plotOptions) === null || _d === void 0 ? void 0 : _d.series) === null || _e === void 0 ? void 0 : _e.states) === null || _f === void 0 ? void 0 : _f.hover) === null || _g === void 0 ? void 0 : _g.enabled).toEqual(false);
    expect(x.series).toEqual([{ name: 'Test', type: 'line' }]);
    expect((_h = x.series) === null || _h === void 0 ? void 0 : _h.length).toEqual(1);
    expect((_j = x.legend) === null || _j === void 0 ? void 0 : _j.enabled).toEqual(false);
    expect((_k = _xAxis.title) === null || _k === void 0 ? void 0 : _k.text).toEqual('test');
    expect((_l = _yAxis.labels) === null || _l === void 0 ? void 0 : _l.format).toEqual('{value}');
});
test('bar chart parameters work', function () {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    var x = index_1.createBarChart({
        title: { text: 'test' },
        subtitle: { align: 'left' },
        tooltip: { borderColor: 'red' },
        plotOptions: { series: { states: { hover: { enabled: false } } } },
        series: [{ name: 'Test', type: 'column' }],
        legend: { enabled: false },
        colors: ['red', 'blue'],
        xAxis: { title: { text: 'test' } },
        yAxis: { labels: { format: '{value} unit' } },
    });
    var _xAxis = x.xAxis;
    var _yAxis = x.yAxis;
    expect(x.colors).toEqual(['red', 'blue']);
    expect((_a = x.title) === null || _a === void 0 ? void 0 : _a.text).toEqual('test');
    expect((_b = x.subtitle) === null || _b === void 0 ? void 0 : _b.align).toEqual('left');
    expect((_c = x.tooltip) === null || _c === void 0 ? void 0 : _c.borderColor).toEqual('red');
    expect((_g = (_f = (_e = (_d = x.plotOptions) === null || _d === void 0 ? void 0 : _d.series) === null || _e === void 0 ? void 0 : _e.states) === null || _f === void 0 ? void 0 : _f.hover) === null || _g === void 0 ? void 0 : _g.enabled).toEqual(false);
    expect(x.series).toEqual([{ name: 'Test', type: 'column' }]);
    expect((_h = x.series) === null || _h === void 0 ? void 0 : _h.length).toEqual(1);
    expect((_j = x.legend) === null || _j === void 0 ? void 0 : _j.enabled).toEqual(false);
    expect((_k = _xAxis.title) === null || _k === void 0 ? void 0 : _k.text).toEqual('test');
    expect((_l = _yAxis.labels) === null || _l === void 0 ? void 0 : _l.format).toEqual('{value} unit');
});
test('donut chart parameters work', function () {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    var x = index_1.createDonutChart({
        title: { text: 'test' },
        subtitle: { align: 'left' },
        tooltip: { borderColor: 'red' },
        plotOptions: { series: { states: { hover: { enabled: false } } } },
        series: [{ name: 'Test', type: 'pie' }],
        legend: { enabled: false },
    });
    expect((_a = x.title) === null || _a === void 0 ? void 0 : _a.text).toEqual('test');
    expect((_b = x.subtitle) === null || _b === void 0 ? void 0 : _b.align).toEqual('left');
    expect((_c = x.tooltip) === null || _c === void 0 ? void 0 : _c.borderColor).toEqual('red');
    expect((_g = (_f = (_e = (_d = x.plotOptions) === null || _d === void 0 ? void 0 : _d.series) === null || _e === void 0 ? void 0 : _e.states) === null || _f === void 0 ? void 0 : _f.hover) === null || _g === void 0 ? void 0 : _g.enabled).toEqual(false);
    expect(x.series).toEqual([{ name: 'Test', type: 'pie' }]);
    expect((_h = x.series) === null || _h === void 0 ? void 0 : _h.length).toEqual(1);
    expect((_j = x.legend) === null || _j === void 0 ? void 0 : _j.enabled).toEqual(false);
});
