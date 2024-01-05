jQuery.noConflict();

jQuery(document).ready(function ($) {
     
    // getting data from api
    output = "";
    function showdata(){
        $.ajax({
            url: "https://6572a8f0192318b7db40788e.mockapi.io/rtk-query",
            method: "GET",
            dataType: "json",
            success: function(data){
                if(data){
                    x = data;
                } else {
                    x = "";
                }
                for(i = 0; i < x.length; i++){
                    output  +=
                    "<tr><td>" +
                    x[i].id +
                    "</td><td>" +
                    x[i].name +
                    "</td><td>" +
                    x[i].email +
                    "</td><td> <button class='btn btn-warning btn-sm btn-edit'>Edit</button> <button class='btn btn-danger btn-sm btn-edit'>Delete </button> </td></tr>";
                }
                $("#tbody").html(output);
            }
        });
    }
showdata()

  // posting data
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
        // showdata();
    },
    error: function (result) {
        alert("Error");
    }
    });
  });
});
