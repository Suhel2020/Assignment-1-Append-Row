function addrowattop() {
    var table = document.getElementById("myTable1");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    //cell1.innerHTML = document.getElementById("slno1").value;
    cell2.innerHTML = document.getElementById("firstname1").value;
    cell3.innerHTML = document.getElementById("lastname1").value;
    cell4.innerHTML = document.getElementById("city1").value;
    cell5.innerHTML = document.getElementById("country1").value;
  }

  function addrowatbottom() {
    var table = document.getElementById("myTable1");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
   // cell1.innerHTML = document.getElementById("slno2").value;
    cell2.innerHTML = document.getElementById("firstname2").value;
    cell3.innerHTML = document.getElementById("lastname2").value;
    cell4.innerHTML = document.getElementById("city2").value;
    cell5.innerHTML = document.getElementById("country2").value;
  }