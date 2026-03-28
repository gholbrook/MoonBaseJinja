/**
 * Chart.js Charts
 */

'use strict';

(function () {
  const primaryColor = config.colors.primary;
  const successColor = config.colors.success;
  const warningColor = config.colors.warning;
  const infoColor = config.colors.info;
  const dangerColor = config.colors.danger;
  const axisColor = config.colors.axisColor;
  const borderColor = config.colors.borderColor;

  // Bar Chart
  // --------------------------------------------------------------------
  const barChartEl = document.getElementById('cjsBarChart');
  if (barChartEl) {
    barChartEl.height = barChartEl.dataset.height;
    new Chart(barChartEl, {
      type: 'bar',
      data: {
        labels: ['7/12', '8/12', '9/12', '10/12', '11/12', '12/12', '13/12'],
        datasets: [
          {
            label: '2021',
            data: [275, 90, 190, 205, 125, 85, 55],
            backgroundColor: primaryColor,
            borderColor: primaryColor,
            borderWidth: 1,
            borderRadius: 6,
            maxBarThickness: 25
          },
          {
            label: '2020',
            data: [175, 60, 130, 155, 90, 55, 35],
            backgroundColor: infoColor,
            borderColor: infoColor,
            borderWidth: 1,
            borderRadius: 6,
            maxBarThickness: 25
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: { duration: 500 },
        plugins: {
          legend: {
            display: true,
            position: 'top',
            align: 'start',
            labels: {
              usePointStyle: true,
              padding: 20,
              boxWidth: 8,
              boxHeight: 8,
              color: axisColor
            }
          },
          tooltip: {
            backgroundColor: config.colors.dark,
            titleColor: '#fff',
            bodyColor: '#fff'
          }
        },
        scales: {
          x: {
            grid: { display: false },
            ticks: { color: axisColor },
            border: { display: false }
          },
          y: {
            grid: { color: borderColor, drawBorder: false },
            ticks: { color: axisColor, stepSize: 50 },
            border: { display: false },
            beginAtZero: true
          }
        }
      }
    });
  }

  // Horizontal Bar Chart
  // --------------------------------------------------------------------
  const hBarChartEl = document.getElementById('cjsHorizontalBarChart');
  if (hBarChartEl) {
    hBarChartEl.height = hBarChartEl.dataset.height;
    new Chart(hBarChartEl, {
      type: 'bar',
      data: {
        labels: ['MON 11', 'THU 14', 'FRI 15', 'MON 18', 'WED 20', 'FRI 22', 'MON 23'],
        datasets: [
          {
            label: 'Balance',
            data: [710, 350, 580, 460, 120, 250, 390],
            backgroundColor: infoColor,
            borderColor: infoColor,
            borderWidth: 1,
            borderRadius: 6,
            maxBarThickness: 18
          }
        ]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        animation: { duration: 500 },
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: config.colors.dark,
            titleColor: '#fff',
            bodyColor: '#fff'
          }
        },
        scales: {
          x: {
            grid: { color: borderColor, drawBorder: false },
            ticks: { color: axisColor },
            border: { display: false }
          },
          y: {
            grid: { display: false },
            ticks: { color: axisColor },
            border: { display: false }
          }
        }
      }
    });
  }

  // Line Chart
  // --------------------------------------------------------------------
  const lineChartEl = document.getElementById('cjsLineChart');
  if (lineChartEl) {
    lineChartEl.height = lineChartEl.dataset.height;
    new Chart(lineChartEl, {
      type: 'line',
      data: {
        labels: ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', ''],
        datasets: [
          {
            label: 'Europe',
            data: [0, 20, 60, 20, 65, 25, 70, 30, 36, 50, 75, 90, 70, 0],
            borderColor: primaryColor,
            backgroundColor: 'transparent',
            pointBackgroundColor: primaryColor,
            tension: 0.4,
            pointRadius: 3,
            pointHoverRadius: 5,
            borderWidth: 3
          },
          {
            label: 'Asia',
            data: [0, 40, 20, 50, 30, 70, 35, 80, 50, 75, 40, 65, 50, 0],
            borderColor: warningColor,
            backgroundColor: 'transparent',
            pointBackgroundColor: warningColor,
            tension: 0.4,
            pointRadius: 3,
            pointHoverRadius: 5,
            borderWidth: 3
          },
          {
            label: 'Africa',
            data: [0, 30, 45, 35, 55, 40, 60, 45, 65, 35, 55, 45, 60, 0],
            borderColor: successColor,
            backgroundColor: 'transparent',
            pointBackgroundColor: successColor,
            tension: 0.4,
            pointRadius: 3,
            pointHoverRadius: 5,
            borderWidth: 3
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: { duration: 500 },
        plugins: {
          legend: {
            display: true,
            position: 'top',
            align: 'start',
            labels: {
              usePointStyle: true,
              padding: 20,
              boxWidth: 8,
              boxHeight: 8,
              color: axisColor
            }
          },
          tooltip: {
            backgroundColor: config.colors.dark,
            titleColor: '#fff',
            bodyColor: '#fff'
          }
        },
        scales: {
          x: {
            grid: { display: false },
            ticks: { color: axisColor },
            border: { display: false }
          },
          y: {
            grid: { color: borderColor, drawBorder: false },
            ticks: { color: axisColor, stepSize: 20 },
            border: { display: false },
            min: 0,
            max: 100
          }
        }
      }
    });
  }

  // Radar Chart
  // --------------------------------------------------------------------
  const radarChartEl = document.getElementById('cjsRadarChart');
  if (radarChartEl) {
    radarChartEl.height = radarChartEl.dataset.height;
    new Chart(radarChartEl, {
      type: 'radar',
      data: {
        labels: ['STA', 'STR', 'AGI', 'VIT', 'CHA', 'INT'],
        datasets: [
          {
            label: 'Donateur',
            data: [25, 59, 90, 81, 60, 82],
            borderColor: primaryColor,
            backgroundColor: primaryColor + '33',
            pointBackgroundColor: primaryColor,
            pointBorderColor: '#fff',
            pointRadius: 3
          },
          {
            label: 'Admin',
            data: [40, 100, 40, 90, 40, 90],
            borderColor: dangerColor,
            backgroundColor: dangerColor + '33',
            pointBackgroundColor: dangerColor,
            pointBorderColor: '#fff',
            pointRadius: 3
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: { duration: 500 },
        plugins: {
          legend: {
            display: true,
            position: 'top',
            align: 'start',
            labels: {
              usePointStyle: true,
              padding: 20,
              boxWidth: 8,
              boxHeight: 8,
              color: axisColor
            }
          }
        },
        scales: {
          r: {
            grid: { color: borderColor },
            angleLines: { color: borderColor },
            pointLabels: {
              color: axisColor,
              font: { size: 13 }
            },
            ticks: {
              display: false,
              stepSize: 20
            }
          }
        }
      }
    });
  }

  // Polar Area Chart
  // --------------------------------------------------------------------
  const polarChartEl = document.getElementById('cjsPolarChart');
  if (polarChartEl) {
    polarChartEl.height = polarChartEl.dataset.height;
    new Chart(polarChartEl, {
      type: 'polarArea',
      data: {
        labels: ['Africa', 'Asia', 'Europe', 'America', 'Antarctica'],
        datasets: [
          {
            data: [19, 17.5, 15, 13.5, 11],
            backgroundColor: [
              warningColor + 'cc',
              dangerColor + 'cc',
              primaryColor + 'cc',
              successColor + 'cc',
              infoColor + 'cc'
            ],
            borderColor: config.colors.white,
            borderWidth: 3
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: { duration: 500 },
        plugins: {
          legend: {
            display: true,
            position: 'right',
            labels: {
              usePointStyle: true,
              padding: 15,
              boxWidth: 8,
              boxHeight: 8,
              color: axisColor
            }
          },
          tooltip: {
            backgroundColor: config.colors.dark,
            titleColor: '#fff',
            bodyColor: '#fff'
          }
        },
        scales: {
          r: {
            grid: { color: borderColor },
            ticks: { display: false }
          }
        }
      }
    });
  }

  // Bubble Chart
  // --------------------------------------------------------------------
  const bubbleChartEl = document.getElementById('cjsBubbleChart');
  if (bubbleChartEl) {
    bubbleChartEl.height = bubbleChartEl.dataset.height;
    new Chart(bubbleChartEl, {
      type: 'bubble',
      data: {
        datasets: [
          {
            label: 'Dataset 1',
            data: [
              { x: 20, y: 74, r: 10 },
              { x: 10, y: 110, r: 5 },
              { x: 30, y: 165, r: 7 },
              { x: 40, y: 200, r: 20 },
              { x: 90, y: 185, r: 7 },
              { x: 50, y: 240, r: 7 },
              { x: 60, y: 275, r: 10 },
              { x: 70, y: 305, r: 5 },
              { x: 80, y: 325, r: 4 },
              { x: 100, y: 310, r: 5 },
              { x: 110, y: 240, r: 5 },
              { x: 120, y: 270, r: 7 }
            ],
            backgroundColor: primaryColor + 'cc',
            borderColor: primaryColor,
            borderWidth: 1
          },
          {
            label: 'Dataset 2',
            data: [
              { x: 30, y: 225, r: 10 },
              { x: 40, y: 290, r: 12 },
              { x: 55, y: 310, r: 5 },
              { x: 60, y: 330, r: 7 },
              { x: 70, y: 350, r: 6 },
              { x: 80, y: 345, r: 12 },
              { x: 90, y: 375, r: 5 },
              { x: 100, y: 400, r: 8 },
              { x: 120, y: 385, r: 4 },
              { x: 130, y: 410, r: 7 },
              { x: 140, y: 380, r: 9 },
              { x: 150, y: 360, r: 6 }
            ],
            backgroundColor: warningColor + 'cc',
            borderColor: warningColor,
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: { duration: 500 },
        plugins: {
          legend: {
            display: true,
            position: 'top',
            align: 'start',
            labels: {
              usePointStyle: true,
              padding: 20,
              boxWidth: 8,
              boxHeight: 8,
              color: axisColor
            }
          },
          tooltip: {
            backgroundColor: config.colors.dark,
            titleColor: '#fff',
            bodyColor: '#fff'
          }
        },
        scales: {
          x: {
            grid: { color: borderColor, drawBorder: false },
            ticks: { color: axisColor },
            border: { display: false }
          },
          y: {
            grid: { color: borderColor, drawBorder: false },
            ticks: { color: axisColor },
            border: { display: false }
          }
        }
      }
    });
  }

  // Line Area Chart
  // --------------------------------------------------------------------
  const lineAreaChartEl = document.getElementById('cjsLineAreaChart');
  if (lineAreaChartEl) {
    lineAreaChartEl.height = lineAreaChartEl.dataset.height;

    function createGradient(ctx, color) {
      const gradient = ctx.createLinearGradient(0, 0, 0, 450);
      gradient.addColorStop(0, color + '88');
      gradient.addColorStop(1, color + '00');
      return gradient;
    }

    const ctx = lineAreaChartEl.getContext('2d');

    new Chart(lineAreaChartEl, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: 'Africa',
            data: [40, 55, 45, 70, 60, 80, 65, 90, 75, 95, 85, 100],
            borderColor: successColor,
            backgroundColor: createGradient(ctx, successColor),
            tension: 0.4,
            pointRadius: 0,
            borderWidth: 2,
            fill: true
          },
          {
            label: 'Asia',
            data: [20, 35, 30, 45, 40, 55, 45, 65, 55, 70, 60, 75],
            borderColor: warningColor,
            backgroundColor: createGradient(ctx, warningColor),
            tension: 0.4,
            pointRadius: 0,
            borderWidth: 2,
            fill: true
          },
          {
            label: 'Europe',
            data: [5, 15, 10, 25, 20, 35, 25, 40, 30, 45, 35, 50],
            borderColor: primaryColor,
            backgroundColor: createGradient(ctx, primaryColor),
            tension: 0.4,
            pointRadius: 0,
            borderWidth: 2,
            fill: true
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: { duration: 500 },
        plugins: {
          legend: {
            display: true,
            position: 'top',
            align: 'start',
            labels: {
              usePointStyle: true,
              padding: 20,
              boxWidth: 8,
              boxHeight: 8,
              color: axisColor
            }
          },
          tooltip: {
            backgroundColor: config.colors.dark,
            titleColor: '#fff',
            bodyColor: '#fff'
          }
        },
        scales: {
          x: {
            grid: { display: false },
            ticks: { color: axisColor },
            border: { display: false }
          },
          y: {
            grid: { color: borderColor, drawBorder: false },
            ticks: { color: axisColor, stepSize: 20 },
            border: { display: false },
            beginAtZero: true
          }
        }
      }
    });
  }

  // Scatter Chart
  // --------------------------------------------------------------------
  const scatterChartEl = document.getElementById('cjsScatterChart');
  if (scatterChartEl) {
    scatterChartEl.height = scatterChartEl.dataset.height;
    new Chart(scatterChartEl, {
      type: 'scatter',
      data: {
        datasets: [
          {
            label: 'iPhone',
            data: [
              { x: 72, y: 225 }, { x: 81, y: 270 }, { x: 90, y: 230 },
              { x: 103, y: 305 }, { x: 103, y: 245 }, { x: 108, y: 275 },
              { x: 110, y: 290 }, { x: 111, y: 315 }, { x: 109, y: 340 },
              { x: 116, y: 280 }, { x: 113, y: 260 }, { x: 117, y: 295 }
            ],
            backgroundColor: primaryColor + 'cc',
            borderColor: primaryColor,
            pointRadius: 5,
            pointHoverRadius: 7
          },
          {
            label: 'Samsung',
            data: [
              { x: 72, y: 335 }, { x: 81, y: 375 }, { x: 85, y: 355 },
              { x: 93, y: 400 }, { x: 99, y: 370 }, { x: 103, y: 345 },
              { x: 108, y: 385 }, { x: 113, y: 410 }, { x: 115, y: 430 },
              { x: 117, y: 395 }, { x: 120, y: 365 }, { x: 122, y: 420 }
            ],
            backgroundColor: warningColor + 'cc',
            borderColor: warningColor,
            pointRadius: 5,
            pointHoverRadius: 7
          },
          {
            label: 'Huawei',
            data: [
              { x: 70, y: 145 }, { x: 78, y: 170 }, { x: 85, y: 155 },
              { x: 90, y: 195 }, { x: 95, y: 175 }, { x: 100, y: 210 },
              { x: 105, y: 190 }, { x: 110, y: 225 }, { x: 115, y: 205 },
              { x: 118, y: 240 }, { x: 120, y: 215 }, { x: 122, y: 185 }
            ],
            backgroundColor: dangerColor + 'cc',
            borderColor: dangerColor,
            pointRadius: 5,
            pointHoverRadius: 7
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: { duration: 500 },
        plugins: {
          legend: {
            display: true,
            position: 'top',
            align: 'start',
            labels: {
              usePointStyle: true,
              padding: 20,
              boxWidth: 8,
              boxHeight: 8,
              color: axisColor
            }
          },
          tooltip: {
            backgroundColor: config.colors.dark,
            titleColor: '#fff',
            bodyColor: '#fff'
          }
        },
        scales: {
          x: {
            grid: { color: borderColor, drawBorder: false },
            ticks: { color: axisColor },
            border: { display: false }
          },
          y: {
            grid: { color: borderColor, drawBorder: false },
            ticks: { color: axisColor },
            border: { display: false }
          }
        }
      }
    });
  }

  // Doughnut Chart
  // --------------------------------------------------------------------
  const doughnutChartEl = document.getElementById('cjsDoughnutChart');
  if (doughnutChartEl) {
    doughnutChartEl.height = doughnutChartEl.dataset.height;
    new Chart(doughnutChartEl, {
      type: 'doughnut',
      data: {
        labels: ['Desktop', 'Tablet', 'Mobile'],
        datasets: [
          {
            data: [80, 10, 10],
            backgroundColor: [
              'rgb(102, 110, 232)',
              'rgb(40, 208, 148)',
              'rgb(253, 172, 52)'
            ],
            borderColor: config.colors.white,
            borderWidth: 5,
            hoverOffset: 10
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: { duration: 500 },
        cutout: '68%',
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: config.colors.dark,
            titleColor: '#fff',
            bodyColor: '#fff',
            callbacks: {
              label: function (context) {
                return context.label + ': ' + context.parsed + '%';
              }
            }
          }
        }
      }
    });
  }
})();
