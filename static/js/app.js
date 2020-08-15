var tbody = d3.select("tbody");

console.log(data);
data.forEach((movie) => {
  var row = tbody.append("tr");
  Object.entries(movie).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

$(document).ready( function () {
  $('#ufo-table').DataTable();
} );


