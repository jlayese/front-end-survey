'use strict';

window.chartColors = {
  red: 'rgb(255, 99, 132)',
  orange: 'rgb(255, 159, 64)',
  yellow: 'rgb(255, 205, 86)',
  green: 'rgb(75, 192, 192)',
  blue: 'rgb(54, 162, 235)',
  purple: 'rgb(153, 102, 255)',
  grey: 'rgb(201, 203, 207)'
};

(function (global) {
  var MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  var COLORS = [
    '#4dc9f6',
    '#f67019',
    '#f53794',
    '#537bc4',
    '#acc236',
    '#166a8f',
    '#00a950',
    '#58595b',
    '#8549ba'
  ];
  var Samples = global.Samples || (global.Samples = {});
  var Color = global.Color;
  Samples.Samples = {
    // Adapted from http://indiegamr.com/generate-repeatable-random-numbers-in-js/
    srand: function (seed) {
      this._seed = seed;
    },

    rand: function (min, max) {
      var seed = this._seed;
      min = min === undefined ? 0 : min;
      max = max === undefined ? 1 : max;
      this._seed = (seed * 9301 + 49297) % 233280;
      return min + (this._seed / 233280) * (max - min);
    },
    numbers: function (config) {
      var cfg = config || {};
      var min = cfg.min || 0;
      var max = cfg.max || 1;
      var from = cfg.from || [];
      var count = cfg.count || 8;
      var decimals = cfg.decimals || 8;
      var continuity = cfg.continuity || 1;
      var dfactor = Math.pow(10, decimals) || 0;
      var data = [];
      var i, value;

      for (i = 0; i < count; ++i) {
        value = (from[i] || 0) + this.rand(min, max);
        if (this.rand() <= continuity) {
          data.push(Math.round(dfactor * value) / dfactor);
        } else {
          data.push(null);
        }
      }

      return data;
    },
    labels: function (config) {
      var cfg = config || {};
      var min = cfg.min || 0;
      var max = cfg.max || 100;
      var count = cfg.count || 8;
      var step = (max - min) / count;
      var decimals = cfg.decimals || 8;
      var dfactor = Math.pow(10, decimals) || 0;
      var prefix = cfg.prefix || '';
      var values = [];
      var i;

      for (i = min; i < max; i += step) {
        values.push(prefix + Math.round(dfactor * i) / dfactor);
      }

      return values;
    },
    months: function (config) {
      var cfg = config || {};
      var count = cfg.count || 12;
      var section = cfg.section;
      var values = [];
      var i, value;

      for (i = 0; i < count; ++i) {
        value = MONTHS[Math.ceil(i) % 12];
        values.push(value.substring(0, section));
      }

      return values;
    },
    color: function (index) {
      return COLORS[index % COLORS.length];
    },

    //transparentize: function(color, opacity) {
    //  var alpha = opacity === undefined ? 0.5 : 1 - opacity;
    //  return ColorO(color).alpha(alpha).rgbString();
    //}
    transparentize: function (r, g, b, alpha) {
      const a = (1 - alpha) * 255;
      const calc = x => Math.round((x - a) / alpha);

      return `rgba(${calc(r)}, ${calc(g)}, ${calc(b)}, ${alpha})`;
    },
    CHART_COLORS: {
      red: 'rgb(255, 99, 132)',
      orange: 'rgb(255, 159, 64)',
      yellow: 'rgb(255, 205, 86)',
      green: 'rgb(75, 192, 192)',
      blue: 'rgb(54, 162, 235)',
      purple: 'rgb(153, 102, 255)',
      grey: 'rgb(201, 203, 207)'
    }


  };
  // DEPRECATED
  window.randomScalingFactor = function () {
    return Math.round(Samples.Samples.rand(-100, 100));
  };
  // INITIALIZATION
  Samples.Samples.srand(Date.now());

}(this));


// const ctx = document.getElementById('myChart');

//   const DATA_COUNT = 7;
//   const NUMBER_CFG = { count: DATA_COUNT, min: -100, max: 100 };

//   const labels = Samples.Samples.months({ count: 7 });
//   const ddt = {
//     labels: labels,
//     datasets: [
//       {
//         label: 'Fully Rounded',
//         data: Samples.Samples.numbers(NUMBER_CFG),
//         borderColor: Samples.Samples.CHART_COLORS.red,
//         backgroundColor: Samples.Samples.transparentize(Samples.Samples.CHART_COLORS.red, 0.5),
//         borderWidth: 2,
//         borderRadius: Number.MAX_VALUE,
//         borderSkipped: false,
//       },
//       {
//         label: 'Small Radius',
//         data: Samples.Samples.numbers(NUMBER_CFG),
//         borderColor: Samples.Samples.CHART_COLORS.blue,
//         backgroundColor: Samples.Samples.transparentize(Samples.Samples.CHART_COLORS.blue, 0.5),
//         borderWidth: 2,
//         borderRadius: 5,
//         borderSkipped: false,
//       }
//     ]
//   };

//   new Chart(ctx, {
//     type: 'bar',
//     // data: {
//     //   labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//     //   datasets: [{
//     //     label: '# of Votes',
//     //     data: [12, 19, 3, 5, 2, 3],
//     //     borderWidth: 1
//     //   }]
//     // },

//     // options: {
//     //   scales: {
//     //     y: {
//     //       beginAtZero: true
//     //     }
//     //   }
//     // }

//     data: ddt,
//     options: {
//       responsive: true,
//       plugins: {
//         legend: {
//           position: 'top',
//         },
//         title: {
//           display: true,
//           text: 'Samples.Samples.js Bar Chart'
//         }
//       }
//     },
//   });


// backgroundColor: [
//   'rgba(255, 99, 132, 0.2)',
//   'rgba(54, 162, 235, 0.2)',
//   'rgba(255, 206, 86, 0.2)',
//   'rgba(75, 192, 192, 0.2)',
//   'rgba(153, 102, 255, 0.2)',
//   'rgba(255, 159, 64, 0.2)',
//   'rgba(201, 203, 207, 0.2)'
// ],
// borderColor: [
//   'rgba(255,99,132,1)',
//   'rgba(54, 162, 235, 1)',
//   'rgba(255, 206, 86, 1)',
//   'rgba(75, 192, 192, 1)',
//   'rgba(153, 102, 255, 1)',
//   'rgba(255, 159, 64, 1)',
//   'rgba(201, 203, 207, 1)'
// ],