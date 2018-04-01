var data = [-1, -1, 0, 0, 0, 1, 2, 2, 3, 3, 2, 3, 3]
var labels=  ["21h", "22h", "23h", "24h", "0h", "1h", "2h", "3h", "4h", "5h", "6h", "7h", "8h"]

document.addEventListener("DOMContentLoaded", function() {

    var ctx = document.getElementById("week-chart").getContext('2d');
    Chart.defaults.global.defaultFontColor = '#fff';
    Chart.defaults.global.defaultColor = 'rgba(0,0,0,0.1)';
    var heartBeatGraph = new Chart(ctx, {
        type: 'line',
        data: {
           labels: labels, 
            datasets: [{
                data: data,
                backgroundColor: [
                                'rgba(255, 56, 56, 0.2)',
                            ],
                            borderColor: [
                                'rgba(255, 56, 56,1)',
                            ],
                borderWidth: 1
            }]
        },
        options: {
            legend: {
                display: false
            },
            tooltips: {
                callbacks: {
                   label: function(tooltipItem) {
                          return tooltipItem.yLabel;
                   }
                }
            },
            responsive: true,
            maintainAspectRatio: false,
            title: {
                text: "Prédiction de la journée",
                display: true
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        color: "rgba(45, 45, 45, 1)",
                    }   
                  }],
                yAxes: [{
                    ticks: {
                        min: -1,
                        max: 4,
                        callback: function(label, index, labels) {
                            return label + "°C"
                        }
                    }

                }]
            }
        }
    });
    //ctx.defaults.global.defaultFontColor = "#fff";

});


