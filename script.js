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


// ----------------------------------------------------------------SIDEBAR HIDE&SHOW EFFECT---------------------------------------------------------------- //


$("#content>div").hide();
$("#user").hide();


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