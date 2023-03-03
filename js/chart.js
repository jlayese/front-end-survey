const initChart = (result) => {

  const temp = result.map(o => o.score);
  const confidence = temp.slice(-1)[0];
  const dataA = [...temp.slice(0, 6), confidence.confidence];
  const dataB = [0, 0, 0, 0, 0, 0, confidence.actual_confidence];

  /** Chart */
  var ctx = document.getElementById("myChart");
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: [
        "Entrepreneurial Hardiness",
        "Internal Locus of Control",
        "Emotional Intelligence",
        "Entrepreneurial Self-Efficacy",
        "Entrepreneurial Fear of Failure",
        "Entrepreneurial Personality Potential",
        "Overconfidence",
      ],
      datasets: [{
        label: 'Overconfidence',
        data: dataA,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(255,99,132,1)',
          'rgba(255,99,132,1)',
          'rgba(255,99,132,1)',
          'rgba(255,99,132,1)',
          'rgba(255,99,132,1)',
          'rgba(255,99,132,1)',
        ],
        borderWidth: 1
      },
      {
        label: 'Underconfidence',
        data: dataB,
        backgroundColor: [
          'rgba(54, 162, 235, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(54, 162, 235, 0.2)',
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1
      }
      ]
    },
    // options: {
    //   scales: {
    //     yAxes: [{
    //       ticks: {
    //         beginAtZero: true
    //       }
    //     }]
    //   }
    // }

    // options: {
    //   responsive: true,
    //   plugins: {
    //     legend: {
    //       position: 'top',
    //     },
    //     title: {
    //       display: true,
    //       text: 'Chart.js Bar Chart'
    //     }
    //   }
    // },

    options: {
      plugins: {
        title: {
          display: true,
          text: 'Chart.js Bar Chart - Stacked'
        },
      },
      responsive: true,
      // scales: {
      //   x: {
      //     stacked: true,
      //   },
      //   y: {
      //     stacked: true
      //   }
      // }
      scales: {
        y: {
          max: 100,
          min: -100,
          stacked: true,
        },
        x: {
          stacked: true,
        },
      }
    }
  });
}