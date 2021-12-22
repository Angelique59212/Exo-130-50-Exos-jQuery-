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
let p = $('.para');
let word = [];
word = p.html().split(' ', 1);
p.html(word).css("fontWeight", "bold");


//create div
let result = $("#result");
result.html(result.html() + "<div>Ajout d'un div</div>")
result.css( {
    "border" : "1px solid black",
    "backgroundColor": "pink",
    "color" : "blue"
});

//div in div
let result2 = $("#result2");
result2.append(result).html();
result2.css("border" , "1px solid blue")

//create objet
let objet = $("#objet");
let Me = {
    name : "Dehainaut",
    firstName : "Angélique",
}
$.each(Me, function (property, value) {
    objet.html(property + " => " + value);
});

//create list
$("#list").append("<li>Ajax</li>")

//function remove select
$("#genre").click(function () {
     $("select").children().detach();
})
let select = $("select").appendTo("select")
select.append("<option value='horror'>Horreur</option>");

//underline the words of a paragraph
let dwwm = $("#dwwm");
function underline() {
    dwwm.css("textDecoration", "underline");
}
underline()

//retrieve value
let name = $("#name").val();
alert(name)

//remove class
function classe () {
    let p2 = $("p").removeClass("class");
}
classe();

//remove css add .css

