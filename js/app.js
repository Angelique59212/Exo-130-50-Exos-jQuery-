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

// //first word of a paragraph
// function firstWord(para) {
//         $(".para").css('textTransform','capitalize')
// }
// firstWord();
//     let all = para.get(0).innerHTML.split(" ");
//     let word = all.shift();
//     para.text("").append("<b>" + word + "</b>");
//     para.append(" " + all)

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
 let genre = $("#genre").click(function () {
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
dwwm.removeAttr('style');

// event click page
let body = $('body').mousedown(function(event){
    console.log("Le clic " + event.which + " a été pressée" );
});

// whole number
function numberWhole (number) {
    if (Number.isInteger(number)) {
        return 'NumberWhole';
    }
    return "Does not numberWhole"
}

//press touch enter
$("body").keypress(function (event){
    if (event.key === "Enter") {
        console.log("La touche enter a été préssée");
    }
})

//returns the number of rows in an array
function numberLine() {
    let rowCount = $("#array tr").length
    console.log(rowCount);
}
numberLine();

//text entered in a textarea

let textarea = $('#test');
function text (){
    return textarea.val();
}
console.log(text());

//radio type element
function createButtonRadio() {
    $("#radio").append('<input type="radio" name = "radio"/>')
}
createButtonRadio();

//returns the absolute position of an element
let lorem = $("#lorem");
let position = lorem.position();
lorem.last().text("left : " + position.left + ", top: " + position.top);

//capitalize text
function capitalize() {
    $("#formation").css('textTransform','uppercase')
}
capitalize();

//user-modified textarea
textarea.change(function () {
    alert("le texte a été modifié")
})

//remove an entry from a table
$('tr').first().hide();

//edit the text of a button
function changeText() {
    $("#my-text").text("Mon nouveau texte");
}
changeText();

//add multiple entries to a drop-down list
function addOption() {
    genre.append('<option></option>');
}
addOption();

//set the background of an element
function background() {
    $("#formation").css('background','cyan');
}
background();

//remove all rows from a table except the first
function table() {
    $("tr").siblings().remove();
}
table();

//retrieve the current value from a drop-down list
function value() {
    $("select#genre").change(function () {
        genre = $(this).val();
    })
}
value();

//disable a link
function disable() {
    $("body a").click(function (event) {
        event.preventDefault();
    })
}
disable();

//change the class of an item
$('p').removeClass('myClass').addClass('otherClass');

//add class css to element
$("a").addClass("css");

//counts the number of child items of a parent item
function itemChildren() {
    let select = $("#selected").children("p").length
}
itemChildren();

//required number in a textarea
function numberRequired() {
    textarea.filter(parseInt(value));
}
numberRequired();

//returns the loaded version of jQuery
function versionJquery() {
    console.log(jQuery.fn.jquery);
}
versionJquery();
