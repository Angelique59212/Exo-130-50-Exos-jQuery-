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

//limit the number of characters textarea
function limitText(item, maxCharacters) {
    item.attr("maxCharacters", maxCharacters.toString())
}
limitText($("#textarea"), 100);

//first word of a paragraph
// let p = $('.para');
// let word = [];
// word = p.text().split(' ', 1);
// console.log(word);
// p.text(word).css("fontWeight", "bold")

//create div
let result = $("#result");
result.html(result.html() + "<div>Ajout d'un div</div>")