var temperature = 0;
var Temperature_dataPoints = Array.from({ length: 60 }, (_, i) => {
  var date = new Date();
  date.setSeconds(date.getSeconds() - (60 - i));
  return { x: date, y: temperature };
});
var Temperature_chart = new CanvasJS.Chart("TemperatureChart",
  {
    title: {
      text: "Temperature"
    },
    axisX: {
      interval: 1,
      intervalType: "minute",
      valueFormatString: "hh:mm"
    },
    axisY:{
        suffix:"℃"
    },
    data: [
      {
        type: "line",
        xValueType: "dateTime",
        dataPoints: Temperature_dataPoints
      }
    ]
  });
Temperature_chart.render();

setInterval(function () {
  var currentDate = new Date();
  temperature = Math.floor(Math.random()*100);
  Temperature_dataPoints.push({ x: currentDate, y: temperature });
  if (Temperature_dataPoints.length > 62) {
    Temperature_dataPoints.shift();
  }
  Temperature_chart.render();
}, 1000);
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
setInterval(function () {
    var currentDate = new Date();
    humidity = Math.floor(Math.random()*100);
    Humidity_dataPoints.push({ x: currentDate, y: humidity });
    if (Humidity_dataPoints.length > 62) {
      Humidity_dataPoints.shift();
    }
    Humidity_chart.render();
  }, 1000);