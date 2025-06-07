var humidity = 0;
var Humidity_dataPoints = Array.from({length: 60}, (_, i) => {
var date = new Date();
  date.setSeconds(date.getSeconds() - (60 - i));
  return { x: date, y: humidity };
  });

var Humidity_chart = new CanvasJS.Chart("HumidityChart",
  {
    title: {
      text: "Humidity"
    },
    // 線段圖的x軸
    axisX: {
      interval: 1,
      intervalType: "minute",
      valueFormatString: "hh:mm"
    },
    axisY:{
        suffix:"%"
    },
    data: [
      {
        //是線段的圖表種類
        type: "line",
        //x軸的種類是dateTime
        xValueType: "dateTime",
        dataPoints: Humidity_dataPoints//這裡直接將陣列丟進去！！！
      }
    
    ]
  });
Humidity_chart.render();