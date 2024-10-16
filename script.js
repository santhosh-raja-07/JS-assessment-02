document.getElementById("addButton").addEventListener("click", function() {
   let name = document.getElementById("batsmanName").value;
    let runs = parseInt(document.getElementById("runsScored").value);
    let balls = parseInt(document.getElementById("ballsFaced").value);

    if (name && runs && balls && balls > 0) {
        let strikeRate = (runs * 100) / balls;
        let table = document.getElementById("batsmanTable").getElementsByTagName("tbody")[0];
        let row = table.insertRow();
        row.insertCell(0).innerText = name;
        row.insertCell(1).innerText = balls;
        row.insertCell(2).innerText = runs;
        row.insertCell(3).innerText = strikeRate.toFixed(2); 
        document.getElementById("batsmanName").value = "";
        document.getElementById("runsScored").value = "";
        document.getElementById("ballsFaced").value = "";
    } else {
        alert("Please Fill The All Field");
    }
});
document.getElementById("removeButton").addEventListener("click", function() {
    let table = document.getElementById("batsmanTable").getElementsByTagName("tbody")[0];
    let rowCount = table.rows.length;
    if (rowCount > 0) {
        table.deleteRow(rowCount - 1);
    } else {
        alert("No Rows To Remove!");
    }
});