// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

//loop through data and add 1 table row for each ufo sigthing
//use Object.entries for ufo value
//append 1 cell per ufo value and update each cell with ufo values
data.forEach((UFO) => {
    var row = tbody.append("tr");
    Object.entries(UFO).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });

});

