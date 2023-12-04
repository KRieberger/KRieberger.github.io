// Initialize Toasts
$(document).ready(function () {
    $('.toast').toast({ delay: 2000 })
    $('.toast').toast('hide');
})

// Submit form when enter is pressed - maybe better with JQuery
var input = document.getElementById("number");
input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        updateTable();
    }
})

function updateTable() {
    var number = $("#number").val();
    if (number.length > 76) {
        console.log("Input too long");
        $('#table-length-toast').toast('show');
        document.getElementById("number").value = "";
    } else if (number != "") {
        document.getElementById("table_fill").innerHTML = number;
        $('#table-update-toast').toast('show');
        console.log("Updated table 0, 0 to: " + number);
        document.getElementById("number").value = "";
    } else {
        console.log("Invalid input");
        $('#table-error-toast').toast('show');
        document.getElementById("number").value = "";
    }
}