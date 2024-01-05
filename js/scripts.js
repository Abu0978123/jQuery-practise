// jquery events
jQuery.noConflict();

jQuery(document).ready(function($){


// Validate Username
$("#usercheck").hide();
let usernameError = true;
$("#usernames").keyup(function () {
    validateUsername();
});

function validateUsername() {
    let usernameValue = $("#usernames").val();
    if (usernameValue.length == "") {
        $("#usercheck").show();
        usernameError = false;
        return false;
    } else if (usernameValue.length < 3 || usernameValue.length > 10) {
        $("#usercheck").show();
        $("#usercheck").html("**length of username must be between 3 and 10");
        usernameError = false;
        return false;
    } else {
        $("#usercheck").hide();
    }
}

// Validate Email
const email = document.getElementById("email");
email.addEventListener("blur", () => {
    let regex = 
    /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let s = email.value;
    if (regex.test(s)) {
        email.classList.remove("is-invalid");
        emailError = true;
    } else {
        email.classList.add("is-invalid");
        emailError = false;
    }
});

// Validate Password
$("#passcheck").hide();
let passwordError = true;
$("#password").keyup(function () {
    validatePassword();
});
function validatePassword() {
    let passwordValue = $("#password").val();
    if (passwordValue.length == "") {
        $("#passcheck").show();
        passwordError = false;
        return false;
    }
    if (passwordValue.length < 3 || passwordValue.length > 10) {
        $("#passcheck").show();
        $("#passcheck").html(
            "**length of your password must be between 3 and 10"
        );
        $("#passcheck").css("color", "red");
        passwordError = false;
        return false;
    } else {
        $("#passcheck").hide();
    }
}

// Validate Confirm Password
$("#conpasscheck").hide();
let confirmPasswordError = true;
$("#conpassword").keyup(function () {
    validateConfirmPassword();
});
function validateConfirmPassword() {
    let confirmPasswordValue = $("#conpassword").val();
    let passwordValue = $("#password").val();
    if (passwordValue != confirmPasswordValue) {
        $("#conpasscheck").show();
        $("#conpasscheck").html("**Password didn't Match");
        $("#conpasscheck").css("color", "red");
        confirmPasswordError = false;
        return false;
    } else {
        $("#conpasscheck").hide();
    }
}

// Submit button
$("#submitbtn").click(function () {
    validateUsername();
    validatePassword();
    validateConfirmPassword();
    validateEmail();
    if (
        usernameError == true &&
        passwordError == true &&
        confirmPasswordError == true &&
        emailError == true
    ) {
        return true;
    } else {
        return false;
    }
});








    // $("#fadein").click(function(){
    //     $("#img").fadeIn(2000, function(){
    //         console.log('fadeIn is working')
    //     })
    // })
    // $("#fadeout").click(function(){
    //     $("#img").fadeOut(2000, function(){
    //         console.log('fadeOut is working')
    //     })
    // })

    // $("#fadetoggle").click(function(){
    //     $("#img").fadeToggle(2000, function(){
    //         console.log('toggle is working')
    //     })
    // })
    // for focus the input 
    // $("#focus").focus(function(){
    //     console.log('focus here');
    // })

    // // for blur the input 
    // $("#blur").blur(function(){
    //     console.log("blur here")
    // })

    // // for keyup in the input
    // $("#keyup").keyup(function(){
    //     console.log("keyup in the input", keyup.value)
    // })
})



// jQuery(document).ready(function($){

//     // double clicked
//     $('#double').dblclick(function (){
//         alert("double clicked")
//     })
     
//     // mouseenter
//     $('#mouseenter').mouseenter(function(){
//         alert('mouseentered')
//     })

//     // mouseleave
//     $('#mouseleave').mouseleave(function(){
//        alert('mouseleaved')
//     })
// })

// $("p").click(function(){
//     $(this).hide();
//   });
 
// jQuery.noConflict();
// jQuery(document).ready(function($){
//     $('button').click(function(){
//         // alert("noConflict is working")
//         $("p").toggle();
//     })
// })
 
 //       $(document).ready(function(){
    //    $("button").click(function(){
    //       $("p").toggle();
    //    })
    //   })

    // $(document).ready(function(){
        // $("button").click(function(){
        //    $("p").toggle(1000);
          
        // })
 //        $("#p1").mouseenter(function(){
 //   alert("You entered p1!");
 // });
    //    })
 
//  console.log($)
//  console.log(jQuery) 