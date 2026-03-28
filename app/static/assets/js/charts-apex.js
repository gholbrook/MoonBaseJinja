/**
 * Apex Charts
 */

'use strict';

(function () {
  let cardColor, headingColor, axisColor, shadeColor, borderColor;

  cardColor = config.colors.white;
  headingColor = config.colors.headingColor;
  axisColor = config.colors.axisColor;
  borderColor = config.colors.borderColor;

  // Line Area Chart
  // --------------------------------------------------------------------
  const lineAreaChartEl = document.querySelector('#lineAreaChart'),
    lineAreaChartConfig = {
      series: [
        {
          name: 'Visits',
          data: [100, 120, 90, 170, 130, 160, 140, 240, 220, 180, 270, 280, 375]
        },
        {
          name: 'Clicks',
          data: [60, 80, 70, 110, 80, 100, 90, 180, 160, 140, 200, 220, 275]
        },
        {
          name: 'Sales',
          data: [20, 40, 30, 70, 40, 60, 50, 140, 120, 100, 140, 180, 220]
        }
      ],
      chart: {
        height: 400,
        type: 'area',
        toolbar: {
          show: false
        }
      },
      colors: ['#29dac7', '#60f2ca', '#a5f8cd'],
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 0.6,
          opacityFrom: 0.5,
          opacityTo: 0.25,
          stops: [0, 95, 100]
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 2,
        curve: 'smooth'
      },
      legend: {
        show: true,
        position: 'top',
        horizontalAlign: 'left',
        labels: {
          colors: axisColor
        },
        markers: {
          height: 8,
          width: 8,
          radius: 12,
          offsetX: -3
        },
        itemMargin: {
          horizontal: 10
        }
      },
      grid: {
        borderColor: borderColor,
        padding: {
          top: 0,
          bottom: -8,
          left: 10,
          right: 8
        }
      },
      xaxis: {
        categories: ['7/12', '8/12', '9/12', '10/12', '11/12', '12/12', '13/12', '14/12', '15/12', '16/12', '17/12', '18/12', '20/12'],
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          style: {
            fontSize: '13px',
            colors: axisColor
          }
        }
      },
      yaxis: {
        labels: {
          style: {
            fontSize: '13px',
            colors: axisColor
          }
        }
      },
      tooltip: {
        shared: true
      }
    };
  if (typeof lineAreaChartEl !== undefined && lineAreaChartEl !== null) {
    const lineAreaChart = new ApexCharts(lineAreaChartEl, lineAreaChartConfig);
    lineAreaChart.render();
  }

  // Stacked Bar Chart
  // --------------------------------------------------------------------
  const stackedBarChartEl = document.querySelector('#stackedBarChart'),
    stackedBarChartConfig = {
      series: [
        {
          name: 'Apple',
          data: [95, 177, 84, 56, 126, 93, 71, 127, 140, 63]
        },
        {
          name: 'Samsung',
          data: [80, 112, 72, 44, 65, 56, 47, 108, 95, 48]
        }
      ],
      chart: {
        height: 400,
        type: 'bar',
        stacked: true,
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '40%',
          borderRadius: 8,
          startingShape: 'rounded',
          endingShape: 'rounded'
        }
      },
      colors: ['#826af9', '#d2b0ff'],
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth',
        width: 6,
        lineCap: 'round',
        colors: [cardColor]
      },
      legend: {
        show: true,
        horizontalAlign: 'left',
        position: 'top',
        markers: {
          height: 8,
          width: 8,
          radius: 12,
          offsetX: -3
        },
        labels: {
          colors: axisColor
        },
        itemMargin: {
          horizontal: 10
        }
      },
      grid: {
        borderColor: borderColor,
        padding: {
          top: 0,
          bottom: -8,
          left: 20,
          right: 20
        }
      },
      xaxis: {
        categories: ['7/12', '8/12', '9/12', '10/12', '11/12', '12/12', '13/12', '14/12', '15/12', '16/12'],
        labels: {
          style: {
            fontSize: '13px',
            colors: axisColor
          }
        },
        axisTicks: {
          show: false
        },
        axisBorder: {
          show: false
        }
      },
      yaxis: {
        labels: {
          style: {
            fontSize: '13px',
            colors: axisColor
          }
        }
      },
      states: {
        hover: {
          filter: {
            type: 'none'
          }
        },
        active: {
          filter: {
            type: 'none'
          }
        }
      }
    };
  if (typeof stackedBarChartEl !== undefined && stackedBarChartEl !== null) {
    const stackedBarChart = new ApexCharts(stackedBarChartEl, stackedBarChartConfig);
    stackedBarChart.render();
  }

  // Scatter Chart
  // --------------------------------------------------------------------
  const scatterChartEl = document.querySelector('#scatterChart'),
    scatterChartConfig = {
      series: [
        {
          name: 'Angular',
          data: [
            [5.4, 170], [5.4, 100], [6.3, 170], [5.7, 140], [5.9, 130],
            [7.0, 150], [8.0, 120], [9.0, 170], [10.0, 190], [11.0, 220],
            [12.0, 170], [13.0, 230]
          ]
        },
        {
          name: 'Vue',
          data: [
            [14.0, 220], [15.0, 280], [16.0, 230], [18.0, 320], [17.5, 280],
            [19.0, 250], [20.0, 350], [20.5, 320], [20.0, 320], [19.0, 280],
            [17.0, 280], [22.0, 300], [18.0, 270]
          ]
        },
        {
          name: 'React',
          data: [
            [14.0, 290], [13.0, 190], [20.0, 220], [21.0, 350], [21.5, 290],
            [22.0, 220], [23.0, 140], [19.0, 400], [20.0, 200], [22.0, 90],
            [20.0, 120]
          ]
        }
      ],
      chart: {
        height: 400,
        type: 'scatter',
        zoom: {
          enabled: true,
          type: 'xy'
        },
        toolbar: {
          show: false
        }
      },
      colors: [config.colors.warning, config.colors.primary, config.colors.success],
      legend: {
        show: true,
        position: 'top',
        horizontalAlign: 'left',
        labels: {
          colors: axisColor
        },
        markers: {
          height: 8,
          width: 8,
          radius: 12,
          offsetX: -3
        },
        itemMargin: {
          horizontal: 10
        }
      },
      grid: {
        borderColor: borderColor,
        xaxis: {
          lines: {
            show: true
          }
        }
      },
      xaxis: {
        tickAmount: 10,
        labels: {
          formatter: function (val) {
            return parseFloat(val).toFixed(1);
          },
          style: {
            fontSize: '13px',
            colors: axisColor
          }
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      },
      yaxis: {
        labels: {
          style: {
            fontSize: '13px',
            colors: axisColor
          }
        }
      }
    };
  if (typeof scatterChartEl !== undefined && scatterChartEl !== null) {
    const scatterChart = new ApexCharts(scatterChartEl, scatterChartConfig);
    scatterChart.render();
  }

  // Balance Line Chart
  // --------------------------------------------------------------------
  const balanceLineChartEl = document.querySelector('#balanceLineChart'),
    balanceLineChartConfig = {
      series: [
        {
          data: [137, 210, 160, 275, 205, 135, 168, 185, 210, 135, 165, 190, 255, 200, 180]
        }
      ],
      chart: {
        height: 400,
        type: 'line',
        toolbar: {
          show: false
        },
        dropShadow: {
          enabled: true,
          top: 10,
          left: 5,
          blur: 3,
          color: config.colors.warning,
          opacity: 0.15
        }
      },
      colors: [config.colors.warning],
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 5,
        curve: 'smooth'
      },
      markers: {
        size: 6,
        colors: 'transparent',
        strokeColors: 'transparent',
        strokeWidth: 4,
        discrete: [
          {
            fillColor: config.colors.white,
            seriesIndex: 0,
            dataPointIndex: 7,
            strokeColor: config.colors.warning,
            strokeWidth: 2,
            size: 6,
            radius: 8
          }
        ],
        hover: {
          size: 7
        }
      },
      grid: {
        borderColor: borderColor,
        padding: {
          top: 0,
          bottom: -8,
          left: 10,
          right: 8
        }
      },
      xaxis: {
        categories: ['7/12', '8/12', '9/12', '10/12', '11/12', '12/12', '13/12', '14/12', '15/12', '16/12', '17/12', '18/12', '19/12', '20/12', '21/12'],
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          style: {
            fontSize: '13px',
            colors: axisColor
          }
        }
      },
      yaxis: {
        labels: {
          style: {
            fontSize: '13px',
            colors: axisColor
          },
          formatter: function (val) {
            return val + '%';
          }
        }
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val + '%';
          }
        }
      }
    };
  if (typeof balanceLineChartEl !== undefined && balanceLineChartEl !== null) {
    const balanceLineChart = new ApexCharts(balanceLineChartEl, balanceLineChartConfig);
    balanceLineChart.render();
  }

  // Horizontal Bar Chart
  // --------------------------------------------------------------------
  const horizontalBarChartEl = document.querySelector('#horizontalBarChart'),
    horizontalBarChartConfig = {
      series: [
        {
          data: [400, 430, 448, 470, 540, 580, 690]
        }
      ],
      chart: {
        height: 400,
        type: 'bar',
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: '30%',
          borderRadius: 7,
          startingShape: 'rounded',
          endingShape: 'rounded'
        }
      },
      colors: [config.colors.info],
      dataLabels: {
        enabled: false
      },
      grid: {
        borderColor: borderColor,
        xaxis: {
          lines: {
            show: false
          }
        },
        padding: {
          top: -10,
          bottom: -12,
          left: 20,
          right: 20
        }
      },
      xaxis: {
        categories: ['MON 11', 'THU 14', 'FRI 15', 'MON 18', 'WED 20', 'FRI 22', 'MON 23'],
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          style: {
            fontSize: '13px',
            colors: axisColor
          }
        }
      },
      yaxis: {
        labels: {
          style: {
            fontSize: '13px',
            colors: axisColor
          }
        }
      }
    };
  if (typeof horizontalBarChartEl !== undefined && horizontalBarChartEl !== null) {
    const horizontalBarChart = new ApexCharts(horizontalBarChartEl, horizontalBarChartConfig);
    horizontalBarChart.render();
  }

  // Candlestick Chart
  // --------------------------------------------------------------------
  const candleStickChartEl = document.querySelector('#candleStickChart'),
    candleStickChartConfig = {
      series: [
        {
          data: [
            { x: new Date(2016, 1, 1), y: [51.98, 56.29, 51.59, 53.85] },
            { x: new Date(2016, 2, 1), y: [53.66, 54.99, 51.35, 52.95] },
            { x: new Date(2016, 3, 1), y: [52.76, 57.35, 52.15, 57.03] },
            { x: new Date(2016, 4, 1), y: [57.04, 58.15, 48.88, 56.19] },
            { x: new Date(2016, 5, 1), y: [56.09, 58.85, 55.48, 58.79] },
            { x: new Date(2016, 6, 1), y: [58.50, 60.50, 56.50, 59.96] },
            { x: new Date(2016, 7, 1), y: [60.24, 61.20, 55.98, 58.40] },
            { x: new Date(2016, 8, 1), y: [58.10, 59.40, 55.20, 56.15] },
            { x: new Date(2016, 9, 1), y: [56.60, 58.80, 54.30, 57.65] },
            { x: new Date(2016, 10, 1), y: [57.48, 60.00, 55.76, 59.40] },
            { x: new Date(2016, 11, 1), y: [59.80, 62.00, 58.50, 61.30] },
            { x: new Date(2017, 0, 1), y: [61.10, 64.50, 60.20, 63.10] },
            { x: new Date(2017, 1, 1), y: [63.00, 65.80, 61.80, 64.50] },
            { x: new Date(2017, 2, 1), y: [64.30, 67.00, 63.00, 66.80] }
          ]
        }
      ],
      chart: {
        height: 400,
        type: 'candlestick',
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        candlestick: {
          colors: {
            upward: config.colors.success,
            downward: config.colors.danger
          }
        }
      },
      grid: {
        borderColor: borderColor,
        padding: {
          top: -10,
          bottom: -12,
          left: 10,
          right: 8
        }
      },
      xaxis: {
        type: 'datetime',
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          style: {
            fontSize: '13px',
            colors: axisColor
          }
        }
      },
      yaxis: {
        tooltip: {
          enabled: true
        },
        labels: {
          style: {
            fontSize: '13px',
            colors: axisColor
          },
          formatter: function (val) {
            return '$' + val.toFixed(0);
          }
        }
      }
    };
  if (typeof candleStickChartEl !== undefined && candleStickChartEl !== null) {
    const candleStickChart = new ApexCharts(candleStickChartEl, candleStickChartConfig);
    candleStickChart.render();
  }

  // Heatmap Chart
  // --------------------------------------------------------------------
  function generateHeatmapData(count, range) {
    let i = 0;
    let series = [];
    while (i < count) {
      let x = (i + 1).toString();
      let y = Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
      series.push({ x: x, y: y });
      i++;
    }
    return series;
  }

  const heatMapChartEl = document.querySelector('#heatMapChart'),
    heatMapChartConfig = {
      series: [
        { name: 'SUN', data: generateHeatmapData(24, { min: 0, max: 60 }) },
        { name: 'MON', data: generateHeatmapData(24, { min: 0, max: 60 }) },
        { name: 'TUE', data: generateHeatmapData(24, { min: 0, max: 60 }) },
        { name: 'WED', data: generateHeatmapData(24, { min: 0, max: 60 }) },
        { name: 'THU', data: generateHeatmapData(24, { min: 0, max: 60 }) },
        { name: 'FRI', data: generateHeatmapData(24, { min: 0, max: 60 }) },
        { name: 'SAT', data: generateHeatmapData(24, { min: 0, max: 60 }) }
      ],
      chart: {
        height: 350,
        type: 'heatmap',
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        heatmap: {
          enableShades: false,
          colorScale: {
            ranges: [
              { from: 0, to: 10, name: '0-10', color: '#90B3F3' },
              { from: 11, to: 20, name: '10-20', color: '#7BA0EA' },
              { from: 21, to: 30, name: '20-30', color: '#6690E2' },
              { from: 31, to: 40, name: '30-40', color: '#5080DA' },
              { from: 41, to: 50, name: '40-50', color: '#4272D2' },
              { from: 51, to: 60, name: '50-60', color: '#3474EA' }
            ]
          }
        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: true,
        position: 'bottom',
        labels: {
          colors: axisColor
        },
        markers: {
          height: 10,
          width: 10,
          radius: 3,
          offsetX: -3
        },
        itemMargin: {
          horizontal: 8
        }
      },
      grid: {
        borderColor: borderColor
      },
      xaxis: {
        labels: {
          show: false
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      },
      yaxis: {
        labels: {
          style: {
            fontSize: '13px',
            colors: axisColor
          }
        }
      },
      stroke: {
        width: 4,
        colors: [cardColor]
      }
    };
  if (typeof heatMapChartEl !== undefined && heatMapChartEl !== null) {
    const heatMapChart = new ApexCharts(heatMapChartEl, heatMapChartConfig);
    heatMapChart.render();
  }

  // Radial Bar Chart
  // --------------------------------------------------------------------
  const radialBarChartEl = document.querySelector('#radialBarChart'),
    radialBarChartConfig = {
      series: [80, 50, 35],
      labels: ['Comments', 'Replies', 'Shares'],
      chart: {
        height: 380,
        type: 'radialBar'
      },
      plotOptions: {
        radialBar: {
          offsetY: 0,
          startAngle: 0,
          endAngle: 270,
          hollow: {
            margin: 5,
            size: '30%',
            background: 'transparent'
          },
          dataLabels: {
            name: {
              show: true,
              fontSize: '15px',
              fontFamily: 'Public Sans',
              color: headingColor
            },
            value: {
              show: true,
              fontSize: '22px',
              fontFamily: 'Public Sans',
              color: headingColor,
              formatter: function (val) {
                return val + '%';
              }
            },
            total: {
              show: true,
              label: 'Comments',
              color: axisColor,
              fontSize: '13px',
              formatter: function (w) {
                return '80%';
              }
            }
          },
          barLabels: {
            enabled: false
          },
          track: {
            background: borderColor,
            strokeWidth: '100%'
          }
        }
      },
      colors: [config.colors.warning, config.colors.info, config.colors.primary],
      stroke: {
        lineCap: 'round'
      },
      legend: {
        show: true,
        position: 'bottom',
        labels: {
          colors: axisColor
        },
        markers: {
          height: 8,
          width: 8,
          radius: 12,
          offsetX: -3
        },
        itemMargin: {
          horizontal: 10
        }
      },
      grid: {
        padding: {
          top: -15,
          bottom: -10
        }
      }
    };
  if (typeof radialBarChartEl !== undefined && radialBarChartEl !== null) {
    const radialBarChart = new ApexCharts(radialBarChartEl, radialBarChartConfig);
    radialBarChart.render();
  }

  // Radar Chart
  // --------------------------------------------------------------------
  const radarChartEl = document.querySelector('#radarChart'),
    radarChartConfig = {
      series: [
        {
          name: 'iPhone 12',
          data: [41, 64, 81, 60, 42, 42, 33, 23]
        },
        {
          name: 'Samsung s20',
          data: [65, 46, 42, 25, 58, 63, 76, 48]
        }
      ],
      chart: {
        height: 350,
        type: 'radar',
        toolbar: {
          show: false
        },
        dropShadow: {
          enabled: false
        }
      },
      colors: [config.colors.warning, config.colors.primary],
      fill: {
        opacity: 0.5
      },
      stroke: {
        show: true,
        width: 0
      },
      markers: {
        size: 0
      },
      legend: {
        show: true,
        position: 'bottom',
        labels: {
          colors: axisColor
        },
        markers: {
          height: 8,
          width: 8,
          radius: 12,
          offsetX: -3
        },
        itemMargin: {
          horizontal: 10
        }
      },
      grid: {
        padding: {
          top: -15,
          bottom: -15
        }
      },
      xaxis: {
        categories: ['Battery', 'Brand', 'Camera', 'Memory', 'Storage', 'Display', 'OS', 'Price'],
        labels: {
          style: {
            colors: [axisColor, axisColor, axisColor, axisColor, axisColor, axisColor, axisColor, axisColor],
            fontSize: '13px',
            fontFamily: 'Public Sans'
          }
        }
      },
      yaxis: {
        show: false
      }
    };
  if (typeof radarChartEl !== undefined && radarChartEl !== null) {
    const radarChart = new ApexCharts(radarChartEl, radarChartConfig);
    radarChart.render();
  }

  // Donut Chart
  // --------------------------------------------------------------------
  const donutChartEl = document.querySelector('#donutChart'),
    donutChartConfig = {
      series: [42, 7, 25, 25],
      labels: ['Operational', 'Networking', 'Hiring', 'R&D'],
      chart: {
        height: 380,
        type: 'donut'
      },
      colors: [config.colors.warning, config.colors.primary, config.colors.info, '#d2b0ff'],
      stroke: {
        width: 5,
        colors: cardColor
      },
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return parseInt(val) + '%';
        }
      },
      legend: {
        show: true,
        position: 'bottom',
        labels: {
          colors: axisColor
        },
        markers: {
          height: 8,
          width: 8,
          radius: 12,
          offsetX: -3
        },
        itemMargin: {
          horizontal: 10
        }
      },
      plotOptions: {
        pie: {
          donut: {
            size: '65%',
            labels: {
              show: true,
              value: {
                fontSize: '1.5rem',
                fontFamily: 'Public Sans',
                color: headingColor,
                offsetY: -15,
                formatter: function (val) {
                  return parseInt(val) + '%';
                }
              },
              name: {
                offsetY: 20,
                fontFamily: 'Public Sans'
              },
              total: {
                show: true,
                fontSize: '0.9rem',
                color: axisColor,
                label: 'Operational',
                formatter: function (w) {
                  return '42%';
                }
              }
            }
          }
        }
      },
      responsive: [
        {
          breakpoint: 992,
          options: {
            chart: {
              height: 300
            }
          }
        }
      ]
    };
  if (typeof donutChartEl !== undefined && donutChartEl !== null) {
    const donutChart = new ApexCharts(donutChartEl, donutChartConfig);
    donutChart.render();
  }
})();
