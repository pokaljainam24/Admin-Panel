// $("#dashboard,#forms,#tables,#charts,#icons,#uielements,#authentication,#pages,#user,#Settings").css("display", "none");
// // 1
// $("#dashboardBtn").on("click", function () {
//   $("#forms,#tables,#charts,#icons,#uielements,#authentication,#pages,#users,#settings").css("display", "none");
//   $("#dashboard").css("display", "block");
// });
// // 2
// $("#formsBtn").on("click", function () {
//   $("#dashboard,#tables,#charts,#icons,#uielements,#authentication,#pages,#users,#settings").css("display", "none");
//   $("#forms").css("display", "block");
// });

// // 3
// $("#tablesBtn").on("click", function () {
//   $("#dashboard,#forms,#charts,#icons,#uielements,#authentication,#pages,#users,#settings").css("display", "none");
//   $("#tables").css("display", "block");
// });

// // 4
// $("#chartsBtn").on("click", function () {
//     $("#dashboard,#forms,#tables,#icons,#uielements,#authentication,#pages,#users,#settings").css("display", "none");
//     $("#charts").css("display", "block");
//   });
// // 5
// $("#iconsBtn").on("click", function () {
//     $("#dashboard,#forms,#tables,#charts,#uielements,#authentication,#pages,#users,#settings").css("display", "none");
//     $("#icons").css("display", "block");
//   });
// // 6
// $("#uielementsBtn").on("click", function () {
//     $("#dashboard,#forms,#tables,#charts,#icons,#authentication,#pages,#users,#settings").css("display", "none");
//     $("#uielements").css("display", "block");
//   });
// // 7
// $("#authenticationBtn").on("click", function () {
//     $("#dashboard,#forms,#tables,#charts,#icons,#uielements,#pages,#users,#settings").css("display", "none");
//     $("#authentication").css("display", "block");
//   });
// // 8
// $("#pagesBtn").on("click", function () {
//     $("#dashboard,#forms,#tables,#charts,#icons,#uielements,#authentication,#users,#settings").css("display", "none");
//     $("#pages").css("display", "block");
//   });
// // 9
// $("#userBtn").on("click", function () {
//     $("#dashboard,#forms,#tables,#charts,#icons,#uielements,#authentication,#pages,#settings").css("display", "none");
//     $("#user").css("display", "block");
//   });
// // 10
// $("#SettingsBtn").on("click", function () {
//     $("#dashboard,#forms,#tables,#charts,#icons,#uielements,#authentication,#pages,#user").css("display", "none");
//     $("#Settings").css("display", "block");
//   });


// ---------------------------------- SIDEBAR HIDE&SHOW EFFECT ---------------------------------------------------------------- //


$("#content>div").hide();
$("#charts").show();
$("#dashboard").show();


$("#sidebar>button").on("click", function () {
  $("#content>div").hide();
  $($(this).attr("for")).show();
  $("#sidebar").toggle(700, function () {
    $("#content").css("width", "100%")
  })
});


$(".fa-solid").on("click", function () {
  $("#sidebar").toggle(700, function () {
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

//////////////////////// navbar links mouseover-leave color effect////////////////////////////////////////////////////


////////////////////////// LOGIN FORM POPUP ////////////////////////////////////////////////////////////

$(".container,.modelbg").hide();
$(".fa-pen-nib").on("click", function () {
  $(".container,.modelbg").toggle();
});

///////////////////////// LOGIN FORM POPUP /////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////////CONTENT-CARD FORMS/////////////////////////////////////////////////////////////

const form = document.getElementById('myForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const ageInput = document.getElementById('age');
const genderInput = document.getElementById('gender');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  if (validateForm()) {
    // Form is valid, you can submit it
    alert('Form submitted successfully!');
  }
});

function validateForm() {
  let isValid = true;

  // Resetting previous errors
  clearErrors();

  // Validating Name
  if (nameInput.value.trim() === '') {
    setErrorFor(nameInput, 'Name cannot be blank');
    isValid = false;
  }

  // Validating Email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value.trim())) {
    setErrorFor(emailInput, 'Please enter a valid email address');
    isValid = false;
  }

  // Validating Age
  if (isNaN(ageInput.value.trim()) || ageInput.value.trim() === '') {
    setErrorFor(ageInput, 'Please enter a valid age');
    isValid = false;
  }

  // Validating Gender
  if (genderInput.value.trim() === '') {
    setErrorFor(genderInput, 'Please select your gender');
    isValid = false;
  }

  return isValid;
}

function setErrorFor(input, message) {
  const formGroup = input.parentElement;
  const errorSpan = formGroup.querySelector('.error-message');
  errorSpan.innerText = message;
  formGroup.classList.add('invalid');
}

function clearErrors() {
  const errorMessages = document.querySelectorAll('.error-message');
  errorMessages.forEach(function (error) {
    error.innerText = '';
  });

  const formGroups = document.querySelectorAll('.form-group');
  formGroups.forEach(function (group) {
    group.classList.remove('invalid');
  });
}

///////////////////////////////////////////////////////////////////// CHARTS CONTENT ////////////////////////////////////////////////////////////

var ctx = document.getElementById('polarArea').getContext('2d');

// Define data for the chart
var data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [{
    label: 'Sample Data',
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgba(255, 99, 132, 1)',
    borderWidth: 1,
    data: [65, 59, 80, 81, 56, 55, 40]
  }]
};

// Configuration options for the chart
var options = {
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true
      }
    }]
  }
};

//  Create the chart
var myChart = new Chart(ctx, {
  type: 'polarArea',
  data: data,
  options: options
});


// ------------------------------LINE CHART---------------------------- //

var chart1 = document.getElementById("linechart");
var chart2 = document.getElementById('barchart');
var chart3 = document.getElementById("piechart");
var chart4 = document.getElementById("doughnutchart");
var chart5 = document.getElementById("stackedbarchart");
var chart6 = document.getElementById("radarchart");

var myChart1 = new Chart(chart1, {
    type: 'line',
    data: {
            labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
            datasets: [{
                backgroundColor: "rgba(48, 164, 255, 0.2)",
                borderColor: "rgba(48, 164, 255, 0.8)",
                data: ['1150', '1160', '1160','1165', '1160', '1170','1175', '1165', '1170','1180', '1185', '1190'],
                label: '',
                fill: true
            }]
    },
    options: {
        responsive: true,
        title: {display: false,text: 'Chart'},
        legend: {position: 'top',display: false,},
        tooltips: {mode: 'index',intersect: false,},
        hover: {mode: 'nearest',intersect: true},
        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Months'
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Sales volume'
                }
            }]
        }
    }
});


// -----------------------------------------------------DOUGHNUT CHART----------------------------------------- //

var myChart4 = new Chart(chart4, {
    type: 'doughnut',
    data: {
        labels: ["Married", "Single", "Widowed", "Legaly Separated", "Anulled"],
        datasets: [{
            data: ["60", "45", "6", "3", "11"],
            backgroundColor: ["#F44336","#2196F3","#795548","#6da252","#f39c12","#009688","#673AB7"],
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        legend: {display: true,fullWidth: true,position: 'right',},
        tooltips: {
            callbacks: {
                label: function(tooltipItem, data) {
                    var allData = data.datasets[tooltipItem.datasetIndex].data;
                    var tooltipLabel = data.labels[tooltipItem.index];
                    var tooltipData = allData[tooltipItem.index];
                    var total = 0;
                    var label = tooltipLabel.split(" - ");
                    for (var i in allData) {total += allData[i];}
                    var tooltipPercentage = Math.round((tooltipData / total) * 100);
                    return label[0] + ' (' + tooltipPercentage + '%)';
                }
            }
        },
    }
});

// --------------------------------------------------BAR CHART-------------------------------------------- //

var myChart5 = new Chart(chart5, {
    type: 'bar',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'Income',
            backgroundColor: "rgba(0, 150, 136, .5)",
            borderColor: "rgb(0, 150, 136)",
            borderWidth: 1,
            data: ["20","30","40","50","60","70","80"],
        }, {
            label: 'Liabilites',
            backgroundColor: "rgba(76, 175, 80, .5)",
            borderColor: "rgba(76, 175, 80)",
            borderWidth: 1,
            data: ["2","5","15","25","35","25","15"],
        }]
    },
    options: {
        responsive: true,
        title: {display: false,text: 'Chart'},
        legend: {position: 'top',display: true,},
        tooltips: {mode: 'index',intersect: false,},
        hover: {mode: 'nearest',intersect: true},
        tooltips: {
            mode: 'index',
            intersect: false
        },
        responsive: true,
        scales: {
            xAxes: [{
                stacked: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Months'
                }
            }],
            yAxes: [{
                stacked: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Volume'
                }
            }]
        }
    }
});

