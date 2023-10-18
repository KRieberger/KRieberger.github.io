// Submit form when enter is pressed
var input = document.getElementById("number");
input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        updateTable();
    }
})

function updateTable() {
    var number = document.getElementById("number").value;
    if (number != "") {
        document.getElementById("table_fill").innerHTML = number;
        document.getElementById("table-update-alert").style.display = "block";
        setTimeout(() => {
            const alert = document.getElementById("table-update-alert");
            alert.style.display = "none";
        }, 5000);
        console.log("Updated table 0, 0 to: " + number);
        document.getElementById("number").value = "";
    } else {
        console.log("Invalid input");
        document.getElementById("number").value = "";
    }
}