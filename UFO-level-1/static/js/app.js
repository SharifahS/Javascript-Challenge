// from data.js
var tableData = data;
var dataMatch = null;
// YOUR CODE HERE!
var tbody = d3.select("tbody");
//loop through data and add 1 table row for each ufo sigthing
//use Object.entries for ufo value
//append 1 cell per ufo value and update each cell with ufo values
//Set full data as default table
data.forEach((UFO) => {
        var row = tbody.append("tr");
        Object.entries(UFO).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      })
  // Submit Button handler
function handleSubmit() {
    // Prevent the page from refreshing
    d3.event.preventDefault();
    // Select the input value from the form
    var UFO = d3.select("#datetime").node().value;
    console.log(UFO);
    if(UFO){
        
        matchData = tableData.filter(obs => obs.datetime == UFO);
        tbody.html("");
        matchData.forEach((UFO) => {
            var row = tbody.append("tr");
            Object.entries(UFO).forEach(([key, value]) => {
              var cell = row.append("td");
              cell.text(value);
            });
          })
    };
    // clear the input value
    d3.select("#datetime").node().value = "";  
    function returnData(filtered_val){
        if (filtered_val){
            return dataMatch;
        } else {
            return tableData;
        }
    }};
 d3.select("#filter-btn").on("click", handleSubmit);
















 




















