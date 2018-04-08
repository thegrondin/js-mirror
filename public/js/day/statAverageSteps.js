document.addEventListener("DOMContentLoaded", function() {

    var ctx = document.getElementById("stat-average-steps").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["mar.", "mer.", "jeu.", "ven.", "sam.", "dim.", "lun."],
            datasets: [{
                data: [11023, 12938, 5697, 10827, 7007, 8978, 3223],
                backgroundColor: [
                    'rgba(0, 255, 122, 0.7)',
                    'rgba(0, 255, 122, 0.7)',
                    'rgba(243, 53, 53, 0.7)',
                    'rgba(0, 255, 122, 0.7)',
                    'rgba(243, 53, 53, 0.7)',
                    'rgba(243, 53, 53, 0.7)',
                    'rgba(255, 255, 255, 0.2)'
                ],
                borderColor: [
                    'rgba(0, 255, 122, 1)',
                    'rgba(0, 255, 122, 1)',
                    'rgba(243, 53, 53, 1)',
                    'rgba(0, 255, 122, 1)',
                    'rgba(243, 53, 53, 1)',
                    'rgba(243, 53, 53, 1)',
                    'rgba(255, 255, 255, 0.8)'
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
                    scaleLabel: {
                        display: true,
                        labelString: 'Nombre de pas',
                        fontColor: "#fff",
                        fontSize: 20
                    },
                    ticks: {
                        fontSize: 17,
                        fontColor: "#fff",
                        beginAtZero: true
                    }
                }]
            }
        }
    });
});


