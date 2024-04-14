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

//////////////////////////////////////////////////// navbar links mouseover-leave color effect////////////////////////////////////////////////////

                                                  $("#span1,#span2").on("mouseenter", function () {
                                                  $(this).css("color", "white");
                                                  });
                                                  $("#span1,#span2").on("mouseleave", function () {
                                                    $(this).css("color", "#B2EBF2");
                                                  });

//////////////////////////////////////////////////// navbar links mouseover-leave color effect////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////// LOGIN FORM POPUP ////////////////////////////////////////////////////////////

$(".container,.modelbg").hide();
$(".fa-pen-nib").on("click", function () {
  $(".container,.modelbg").toggle();
});

/////////////////////////////////////////////////////////////// LOGIN FORM POPUP /////////////////////////////////////////////////////////////



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