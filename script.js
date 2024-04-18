// ---------------------------------- SIDEBAR HIDE&SHOW EFFECT ------------------------------------------------------------- //


$("#content>div").hide();
$("#dashboard").show();


$("#sidebar>button").on("click", function () {
  $("#content>div").hide();
  $($(this).attr("for")).show();
  $("#sidebar").toggle(10, function () {
    $("#content").css("width", "100%")
  })
});


$(".fa-solid").on("click", function () {
  $("#sidebar").toggle(10, function () {
    $("#content").css("width", "100%")
  })
});

//////////////////////// navbar links mouseover-leave color effect////////////////////////////////////////////////////

$("#span1,#span2").on("mouseenter", function () {
  $(this).css("color", "white");
});
$("#span1,#span2").on("mouseleave", function () {
  $(this).css("color", "#B2EBF2");
});



// LOGIN FORM POPUP--------------------------------------------------------------------------

$("#form").hide();
$(".fa-pen-nib").on("click", function () {
  $("#form").toggle();
})



// CHARTS CONTENT-----------------------------------------------------------------------------

var options = {
  series: [{
    name: "Desktops",
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
  }],
  chart: {
    height: 500,
    width: 700,
    type: 'line',
    zoom: {
      enabled: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'straight'
  },
  title: {
    text: 'Product Trends by Month',
    align: 'left'
  },
  grid: {
    row: {
      colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5
    },
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
  }
};

//   CHART-2  //

var chart = new ApexCharts(document.querySelector("#chart1"), options);
chart.render();

var options = {
  series: [44, 55, 13, 43, 22],
  chart: {
    width: 700,
    type: 'pie',
  },
  labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
};

var chart = new ApexCharts(document.querySelector("#chart2"), options);
chart.render();



// COUNTER IN DASHBOARD CARD CONTENT ---------------------------------------------------------

$("#counter").counter({
  autoStart: true,
  duration: 1000,
  countFrom: 10,
  countTo: 6267,
  runOnce: false,
  placeholder: "6,267",

  easing: "easeOutCubic",


});

$("#counter2").counter({
  autoStart: true,
  duration: 1000,
  countFrom: 100,
  countTo: 180900,
  runOnce: false,
  placeholder: "$180,900",

  easing: "easeOutCubic",

  onStart: function () { },
  onComplete: function () { },
  numberFormatter:
    function (number) {
      return "$ " + ~~number;
    }
});


$("#counter3").counter({
  autoStart: true,
  duration: 1000,
  countFrom: 100,
  countTo: 28210,
  runOnce: false,
  placeholder: "28,210",

  easing: "easeOutCubic",


});

$("#counter4").counter({
  autoStart: true,
  duration: 1000,
  countFrom: 100,
  countTo: 23210,
  runOnce: false,
  placeholder: "2,210",

  easing: "easeOutCubic",


});

// calander -------------------------------------------------------------------------------------

var calendarInstance1 = new calendarJs("calendar", {
  manualEditingEnabled: true
  // All your options can be set here
});

// OR
var calendarElement = document.getElementById("calendar");
var calendarInstance2 = new calendarJs(calendarElement, {
  manualEditingEnabled: true
  // All your options can be set here
}); 


// CHART-3 //

var options = {
  series: [
  {
    name: 'box',
    type: 'boxPlot',
    data: [
      {
        x: new Date('2017-01-01').getTime(),
        y: [54, 66, 69, 75, 88]
      },
      {
        x: new Date('2018-01-01').getTime(),
        y: [43, 65, 69, 76, 81]
      },
      {
        x: new Date('2019-01-01').getTime(),
        y: [31, 39, 45, 51, 59]
      },
      {
        x: new Date('2020-01-01').getTime(),
        y: [39, 46, 55, 65, 71]
      },
      {
        x: new Date('2021-01-01').getTime(),
        y: [29, 31, 35, 39, 44]
      }
    ]
  },
  {
    name: 'outliers',
    type: 'scatter',
    data: [
      {
        x: new Date('2017-01-01').getTime(),
        y: 32
      },
      {
        x: new Date('2018-01-01').getTime(),
        y: 25
      },
      {
        x: new Date('2019-01-01').getTime(),
        y: 64
      },
      {
        x: new Date('2020-01-01').getTime(),
        y: 27
      },
      {
        x: new Date('2020-01-01').getTime(),
        y: 78
      },
      {
        x: new Date('2021-01-01').getTime(),
        y: 15
      }
    ]
  }
],
  chart: {
  type: 'boxPlot',
  height: 700
},
colors: ['#008FFB', '#FEB019'],
title: {
  text: 'BoxPlot - Scatter Chart',
  align: 'left'
},
xaxis: {
  type: 'datetime',
  tooltip: {
    formatter: function(val) {
      return new Date(val).getFullYear()
    }
  }
},
tooltip: {
  shared: false,
  intersect: true
}
};

var chart = new ApexCharts(document.querySelector("#chart3"), options);
chart.render();