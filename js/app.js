//Form
let checkbox = $("input:checkbox");
let send = $("#send");

send.hide();
checkbox.click(function () {
    if (checkbox.val() !== "on") {
        send.hide();
    }
    else {
        send.show();
    }
})

//flash Text
// setInterval(function () {
//     $("#hello").fadeIn(300).fadeOut(500);
// },1000);

//background array
$("tr:first-child").siblings(':even').css('backgroundColor' , 'pink');

//print html
$("#print").click(function () {
        window.print();
})
