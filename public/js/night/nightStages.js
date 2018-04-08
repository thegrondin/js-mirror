var data = [-1, -1, 0, 0, 0, 1, 2, 2, 3, 3, 2, 3, 3]
var labels=  ["21h", "22h", "23h", "24h", "0h", "1h", "2h", "3h", "4h", "5h", "6h", "7h", "8h"]

document.addEventListener("DOMContentLoaded", function() {

    var ctx = document.getElementById("night-stages-canvas").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ["Éveil", "Léger", "Profond", "Paradoxal"],
            datasets: [{
                data: [4, 22, 56, 18],
                backgroundColor: [
                    'rgba(255, 48, 48, 0.7)',
                    'rgba(48, 196, 255, 0.7)',
                    'rgba(17, 132, 255, 0.7)',
                    'rgba(204, 0, 255, 0.7)'
                ],
                borderColor: [
                    'rgba(255, 48, 48, 1)',
                    'rgba(48, 196, 255, 1)',
                    'rgba(17, 132, 255, 1)',
                    'rgba(204, 0, 255, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            legend: {
                labels: {
                    fontColor: "#fff",
                    fontSize: 20
                }
            },
            pieceLabel: {
                render: 'percentage',
                fontColor: ['green', 'white', 'red'],
                precision: 2
              }
          
        }
    });
});


