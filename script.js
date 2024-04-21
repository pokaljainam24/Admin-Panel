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
});

// $("#form").on("click", function(){
//   $("#form").toggle(show);
//   $("#form").toggle();
// })


// DASHBOARD CHARTS -----------------------------------------------------------------------------

var options = {
  series: [{
  name: 'Inflation',
  data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
}],
  chart: {
  height: 350,
  type: 'bar',
},
plotOptions: {
  bar: {
    borderRadius: 10,
    dataLabels: {
      position: 'top', // top, center, bottom
    },
  }
},
dataLabels: {
  enabled: true,
  formatter: function (val) {
    return val + "%";
  },
  offsetY: -20,
  style: {
    fontSize: '12px',
    colors: ["#304758"]
  }
},

xaxis: {
  categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  position: 'top',
  axisBorder: {
    show: false
  },
  axisTicks: {
    show: false
  },
  crosshairs: {
    fill: {
      type: 'gradient',
      gradient: {
        colorFrom: '#D8E3F0',
        colorTo: '#BED1E6',
        stops: [0, 100],
        opacityFrom: 0.4,
        opacityTo: 0.5,
      }
    }
  },
  tooltip: {
    enabled: true,
  }
},
yaxis: {
  axisBorder: {
    show: false
  },
  axisTicks: {
    show: false,
  },
  labels: {
    show: false,
    formatter: function (val) {
      return val + "%";
    }
  }

},
title: {
  text: 'Monthly Inflation in Argentina, 2002',
  floating: true,
  offsetY: 330,
  align: 'center',
  style: {
    color: '#444'
  }
}
};

var chart = new ApexCharts(document.querySelector("#chart1"), options);
chart.render();

//   CHART-2  //

var options = {
  series: [{
  data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
}],
  chart: {
  type: 'bar',
  height: 350
},
plotOptions: {
  bar: {
    borderRadius: 4,
    horizontal: true,
  }
},
dataLabels: {
  enabled: false
},
xaxis: {
  categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
    'United States', 'China', 'Germany'
  ],
}
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



// CHART SECTION --------------------------------------------------------------------------------

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
  height: 700,
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

// CHART-4 //

var options = {
  series: [{
  name: 'Series 1',
  data: [80, 50, 30, 40, 100, 20],
}, {
  name: 'Series 2',
  data: [20, 30, 40, 80, 20, 80],
}, {
  name: 'Series 3',
  data: [44, 76, 78, 13, 43, 10],
}],
  chart: {
  height:500,
  type: 'radar',
  dropShadow: {
    enabled: true,
    blur: 1,
    left: 1,
    top: 1
  }
},
title: {
  text: 'Radar Chart - Multi Series'
},
stroke: {
  width: 2
},
fill: {
  opacity: 0.1
},
markers: {
  size: 0
},
xaxis: {
  categories: ['2011', '2012', '2013', '2014', '2015', '2016']
}
};

var chart = new ApexCharts(document.querySelector("#chart4"), options);
chart.render();

//  CHART-5 //

var options = {
  series: [{
  name: 'TEAM A',
  type: 'column',
  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
}, {
  name: 'TEAM B',
  type: 'area',
  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
}, {
  name: 'TEAM C',
  type: 'line',
  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
}],
  chart: {
  height: 700,
  type: 'line',
  stacked: false,
},
stroke: {
  width: [0, 2, 5],
  curve: 'smooth'
},
plotOptions: {
  bar: {
    columnWidth: '50%'
  }
},

fill: {
  opacity: [0.85, 0.25, 1],
  gradient: {
    inverseColors: false,
    shade: 'light',
    type: "vertical",
    opacityFrom: 0.85,
    opacityTo: 0.55,
    stops: [0, 100, 100, 100]
  }
},
labels: ['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', '05/01/2003', '06/01/2003', '07/01/2003',
  '08/01/2003', '09/01/2003', '10/01/2003', '11/01/2003'
],
markers: {
  size: 0
},
xaxis: {
  type: 'datetime'
},
yaxis: {
  title: {
    text: 'Points',
  },
  min: 0
},
tooltip: {
  shared: true,
  intersect: false,
  y: {
    formatter: function (y) {
      if (typeof y !== "undefined") {
        return y.toFixed(0) + " points";
      }
      return y;

    }
  }
}
};

var chart = new ApexCharts(document.querySelector("#chart5"), options);
chart.render();

// CHART-6 //


var options = {
  series: [{
  name: 'Inflation',
  data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
}],
  chart: {
  height: 700,
  type: 'bar',
},
plotOptions: {
  bar: {
    borderRadius: 10,
    dataLabels: {
      position: 'top', // top, center, bottom
    },
  }
},
dataLabels: {
  enabled: true,
  formatter: function (val) {
    return val + "%";
  },
  offsetY: -20,
  style: {
    fontSize: '12px',
    colors: ["#304758"]
  }
},

xaxis: {
  categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  position: 'top',
  axisBorder: {
    show: false
  },
  axisTicks: {
    show: false
  },
  crosshairs: {
    fill: {
      type: 'gradient',
      gradient: {
        colorFrom: '#D8E3F0',
        colorTo: '#BED1E6',
        stops: [0, 100],
        opacityFrom: 0.4,
        opacityTo: 0.5,
      }
    }
  },
  tooltip: {
    enabled: true,
  }
},
yaxis: {
  axisBorder: {
    show: false
  },
  axisTicks: {
    show: false,
  },
  labels: {
    show: false,
    formatter: function (val) {
      return val + "%";
    }
  }

},
title: {
  text: 'Monthly Inflation in Argentina, 2002',
  floating: true,
  offsetY: 330,
  align: 'center',
  style: {
    color: '#444'
  }
}
};

var chart = new ApexCharts(document.querySelector("#chart6"), options);
chart.render();

// CHART-7 //

var options = {
  series: [
  {
    name: "",
    data: [200, 330, 548, 740, 880, 990, 1100, 1380],
  },
],
  chart: {
  type: 'bar',
  height: 700,
},
plotOptions: {
  bar: {
    borderRadius: 0,
    horizontal: true,
    distributed: true,
    barHeight: '80%',
    isFunnel: true,
  },
},
colors: [
  '#F44F5E',
  '#E55A89',
  '#D863B1',
  '#CA6CD8',
  '#B57BED',
  '#8D95EB',
  '#62ACEA',
  '#4BC3E6',
],
dataLabels: {
  enabled: true,
  formatter: function (val, opt) {
    return opt.w.globals.labels[opt.dataPointIndex] 
  },
  dropShadow: {
    enabled: true,
  },
},
title: {
  text: 'Pyramid Chart',
  align: 'middle',
},
xaxis: {
  categories: ['Sweets', 'Processed Foods', 'Healthy Fats', 'Meat', 'Beans & Legumes', 'Dairy', 'Fruits & Vegetables', 'Grains'],
},
legend: {
  show: false,
},
};

var chart = new ApexCharts(document.querySelector("#chart7"), options);
chart.render();


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