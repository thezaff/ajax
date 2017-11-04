var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if(xhr.readyState === 4) {
        var employees = JSON.parse(xhr.responseText);
        var workerDiv = '<ul class="list-group">';
        var batteryEmpty = '<i class="fa fa-battery-empty" aria-hidden="true"></i>';
        var batteryFull = '<i class="fa fa-battery-full" aria-hidden="true"></i>';
        for (var i = 0; i < employees.length; i++) {
            if (employees[i].inoffice === false) {
                workerDiv += '<li class="list-group-item">' + employees[i].name + ' ' + batteryEmpty + '</li>';
            } else {
                workerDiv += '<li class="list-group-item">' + employees[i].name + ' ' + batteryFull + '</li>';
            }
        }
        workerDiv += '</ul>';
        $('#workers').html(workerDiv);
        console.log(workerDiv);
    }
}



xhr.open('GET', 'data.json');
xhr.send();














/* var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            document.getElementById('ajax').innerHTML = xhr.responseText;
        }

};

xhr.open('GET', 'sidebar.html');
$('h1').click(function() {
    xhr.send();
    console.log(typeof xhr.responseText);
});
 */

// var xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function() {
//     if(xhr.readyState === 4) {
//         console.log(xhr.responseText);
//     }
// }

// xhr.open('OPEN', 'data.json')
// xhr.send();

/* var navbar = document.getElementsById('navbar');
var sticky = navbar.offsetTop;

function stickNavbar() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
      } else {
        navbar.classList.remove("sticky");
      }
}



$('#addPet').click(() => {

    var $name = $('#name');
    var $species = $('#species');
    var $notes = $('#notes');

    var $newPet = '<div class="container newPet">' + '<b>' + $name.val() +':</b> ' + $species.val() + '</br>' + $notes.val() +
    '<button class="btn btn-danger" id="deleteBtn">Remove this object</button> </div>';

    $('#newPet').append($newPet).css('display', 'none').fadeIn(2000);
});

$('.btn-danger').click(function() {
    $(this).parent().remove();
});
 */