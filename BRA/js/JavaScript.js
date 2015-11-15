function validate() {
    
    // code for validating calender
    var fromDate = document.getElementById("from-date").value;
    var toDate = document.getElementById("to-date").value;

    if (fromDate != undefined && fromDate != "") {
        document.getElementById("to-date").setAttribute("min", fromDate);
    } else {
        document.getElementById("to-date").removeAttribute("min");
    }

    if (toDate != undefined && toDate != "") {
        document.getElementById("from-date").setAttribute("max", toDate);
    } else {
        document.getElementById("from-date").removeAttribute("max");
    }

}