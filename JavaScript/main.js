var lineChartData = {
    labels: ["6 JUN", "7 JUN", "8 JUN", "9 JUN", "10 JUN", "11 JUN", "12 JUN", "13 JUN"], //顯示區間名稱
    datasets: [{
        label: 'TOTAL REVENUE', // tootip 出現的名稱
        lineTension: 0, // 曲線的彎度，設0 表示直線
        backgroundColor: "#7ED321",
        borderColor: "#7ED321",
        borderWidth: 2,
        data: [7200, 7000, 5500, 7200, 5800, 6200, 7500, 7200], // 資料
        fill: false, // 是否填滿色彩
    }, {
        label: 'TOTAL COST',
        lineTension: 0,
        fill: false,
        backgroundColor: "#D0021B",
        borderColor: "#D0021B",
        borderWidth: 2,
        data: [500, 500, 2500, 3000, 2500, 500, 900, 2000],
    }, {
        label: 'NET INCOME',
        lineTension: 0,
        fill: false,
        backgroundColor: "#4A90E2",
        borderColor: "#4A90E2",
        borderWidth: 2,
        data: [6100, 5700, 2000, 4000, 3800, 5700, 6500, 5000],
    },]
};

function drawLineCanvas(ctx,data) {
    window.myLine = new Chart(ctx, {  //先建立一個 chart
        type: 'line', // 型態
        data: data,
        options: {
                responsive: true,
                legend: { //是否要顯示圖示
                    display: false,
                },
                tooltips: { //是否要顯示 tooltip
                    enabled: true,
                },
                scales: {  //是否要顯示 x、y 軸
                    xAxes: [{
                        display: true,
                    }],
                    yAxes: [{
                        display: true,
                    }]
                },
            }
    });
};

window.onload = function () {
    var ctx = document.getElementById("canvas").getContext("2d");
    drawLineCanvas(ctx,lineChartData);
};