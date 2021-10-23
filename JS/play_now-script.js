// Form Validation and Submission

$('form').on('submit', function(e){
    if(!isValidated())
        e.preventDefault();

})

function isValidated(){
    let name = $('#txtName').val();
    let email = $('#txtEmail').val();
    let password = $('#txtPassword').val();
    let gender = $('.rbtGender:checked').val();
    let terms = $('#chkTerms:checked').val();
    let flag = true;

    if(name == ""){
        $('#errName').text("*Name must be filled!");
        flag = false;
    }
    else if(name.length < 4){
        $('#errName').text("*Name length must be at least 4 characters!");
        flag = false;
    }
    else{
        $('#errName').text("");
    }

    if(email == ""){
        $('#errEmail').text("*Email must be filled!");
        flag = false;
    }
    else if(!email.includes("@gmail.") && !email.includes("@yahoo") && !email.includes("@outlook.") && !email.includes("@binus.")){
        $('#errEmail').text("*Please use general email domain!");
        flag = false;
    }
    else{
        $('#errEmail').text("");
    }

    if(password == ""){
        $('#errPassword').text("*Password must be filled!");
        flag = false;
    }
    else if(password.length < 8 || password.length > 16){
        $('#errPassword').text("*Password length must be between 8 - 16 characters!");
        flag = false;
    }
    else if(password.toLowerCase() == password){
        $('#errPassword').text("*Password must contains at least 1 uppercase character!");
        flag = false;
    }
    else{
        $('#errPassword').text("");
    }

    if(gender == null){
        $('#errGender').text("*Gender must be selected!");
        flag = false;
    }
    else{
        $('#errGender').text("");
    }

    if(terms == null){
        $('#errTerms').text("*You must accept the terms and conditions!");
        flag = false;
    }
    else{
        $('#errTerms').text("");
    }

    $('.errMsg').css("display", "block");

    if(flag == false) 
        return false;

    return true;
}

// Terms and Conditions

$(window).click(function(e){
    let termsBox = $('.termsBox')[0];
    if (e.target == termsBox) {
        $('.termsBox').css("display", "none");
    }
})

$('#lblTerms').click(function(){
    $('.termsBox').css("display", "flex");
})

$('.close').click(function(){
    $('.termsBox').css("display", "none");
})

