jQuery.noConflict();

jQuery(document).ready(function ($) {
  // getting data
  $("button").click(function (e) {
    e.preventDefault();
    console.log("button clicked");
    let name = $("#nameid").val();
    let email = $("#emailid").val();

    myData = { name, email };

    $.ajax({
      url: "https://6572a8f0192318b7db40788e.mockapi.io/rtk-query",
      method: "POST",
      data: JSON.stringify(myData),
      dataType: "json",
      contentType: "application/json; charset=utf-8",
      success: function (data) {
        // alert(data.name);
        successRes = "Data added successfully:"
        $("#msg").html(successRes)
        $("#myform")[0].reset();
    },
    error: function (result) {
        alert("Error");
    }
    });
  });
});
