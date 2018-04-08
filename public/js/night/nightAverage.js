document.addEventListener("DOMContentLoaded", function() {

    var ctx = document.getElementById("night-average-canvas").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["mar.", "mer.", "jeu.", "ven.", "sam.", "dim.", "lun."],
            datasets: [{
                data: [9, 7, 7.30, 6.45, 6.32, 8.46, 0],
                backgroundColor: [
                    'rgba(48, 196, 255, 0.7)',
                    'rgba(204, 0, 255, 0.7)',
                    'rgba(48, 196, 255, 0.7)',
                    'rgba(204, 0, 255, 0.7)',
                    'rgba(204, 0, 255, 0.7)',
                    'rgba(48, 196, 255, 0.7)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgba(48, 196, 255, 1)',
                    'rgba(204, 0, 255, 1)',
                    'rgba(48, 196, 255, 1)',
                    'rgba(204, 0, 255, 1)',
                    'rgba(204, 0, 255, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            legend: {
                display: false    
            },
            scales: {
                xAxes: [{
                    ticks: {
                        fontSize: 17,
                        fontColor: "#fff"
                    }
                }],
                yAxes: [{
                    ticks: {
                        fontSize: 17,
                        fontColor: "#fff",
                        // Include a dollar sign in the ticks
                        callback: function(value, index, values) {
                            return value + "h"
                        }
                    }
                }]
            }
        }
    });
});


