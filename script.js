/*
General Notes and Coming Improvements:
Why are there errors? Even though the code functions perfectly?
-Dont forget to remove this when the website is complete!-
*/
$(document).ready(function (){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if(scroll > 200){
            $("nav").addClass("navColor");   
        }
        else{
            $("nav").removeClass("navColor");
        }
    })
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });
});