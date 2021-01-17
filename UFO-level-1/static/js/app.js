// from data.js
var tableData = data;
var dataMatch = null;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

//loop through data and add 1 table row for each ufo sigthing
//use object entries for ufo value
//append 1 cell per ufo value and update each cell
var table = data.forEach((UFO) => {
    var row = tbody.append("tr");
    Object.entries(UFO).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });

});

// Submit Button handler
function handleSubmit() {
    // Prevent the page from refreshing
    d3.event.preventDefault();

    if(UFO){
        filter = 1;
        matchData = tableData.filter(obs => obs.datetime == UFO);
        tbody.html("");
        matchData.forEach(row => {
            tbody.append("tr");
            for (key in row){
                var cell = tbody.append("td");
                cell.text(row[key]);
            }
        });
    };
  
    // Select the input value from the form
    var UFO = d3.select("#datetime").node().value;

    // clear the input value
   var dateEnter =  d3.select("#datetime").node().value = "";

    var dateEnter = date.property("value");
  
  
    // Build the plot with the new stock
    table(UFO);

    function returnData(filtered_val){
        if (filtered_val){
            return dataMatch;
        } else {
            return tableData;
        }
    };


}

  
  d3.select("#filter-btn").on("click", handleSubmit())

 




















