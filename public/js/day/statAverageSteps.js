var data = [-1, -1, 0, 0, 0, 1, 2, 2, 3, 3, 2, 3, 3]
var labels=  ["21h", "22h", "23h", "24h", "0h", "1h", "2h", "3h", "4h", "5h", "6h", "7h", "8h"]

document.addEventListener("DOMContentLoaded", function() {

    var ctx = document.getElementById("stat-average-steps").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
            datasets: [{
                data: [9301, 1123, 9827, 2837, 6730, 10029, 9364],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(255,99,132,1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(255,99,132,1)',
                    'rgba(255,99,132,1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });
});


