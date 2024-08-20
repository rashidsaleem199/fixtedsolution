$(document).ready(function(){
    $("#name").on('keyup',function(){
        let uname = $(this).val();
        let regex_name = /^[a-z]{3,16}$/;
        if(!regex_name.test(uname)){
            $(this).css('border-bottom','1px solid red');
            $(this).next('span').html('please enter the valid data').css({
                'color':"red",
                "font-weight":"bold",
                "margin-top":"2px"
            })
        }else{

            $(this).css('border-bottom','1px solid green');
            $(this).next('span').html('valid data done').css({
                'color':"green",
                "font-weight":"bold",
                "margin-top":"2px"
            }) 
        }
    })
    $("#number").on("keyup", function () {
        let number = $(this).val();
        let numberRE = /^[\d]{11,11}$/;
        if (!numberRE.test(number)) {
            $(this).css("border", "1px solid red");
            $(this).next('span').html("please enter the valid number 0345XXXXXX").css({
                "color": "red",
                "font-weight": "bold",
                "margin-top": "2px"
    
            })
        } else {
            $(this).css("border", "2px solid green");
            $(this).next("span").hide();
        }
    })
    $("#email").on("keyup", function () {
        let email = $(this).val();
        let emailRE = /^[\w]{2,}[@][a-z]{5,9}[.][a-z]{3}$/;
        if (!emailRE.test(email)) {
            $(this).css("border-bottom", "1px solid red");
            $(this).next("span").html("please enter the valid email eg. a1@gmail.com").css({
                "color": "red",
                "font-weight": "bold",
                "margin-top": "2px"
    
            })
        } else {
            $(this).css("border-bottom", "1px solid green");
            $(this).next("span").html("valid email").css({
                "color": "green",
                "font-weight": "bold",
                "margin-top": "2px"
    
            });
        }
    })

})
