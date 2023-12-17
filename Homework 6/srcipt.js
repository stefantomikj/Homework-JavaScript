let rowsNumber = prompt("Enter the number of rows");
let colsNumber = prompt("Enter the number of columns");
let body = document.getElementsByTagName("body")[0];
function createTable() {
  let table = document.createElement("table");
  for (let i = 0; i < rowsNumber; i++) {
    let row = document.createElement("tr");
    table.appendChild(row);

    for (let j = 0; j < colsNumber; j++) {
      let cell = document.createElement("td");
      cell.innerText = `Row${i + 1} - Column${j + 1}`;
      row.appendChild(cell);
    }
  }
  table.style.height = "400px";
  table.style.width = "400px";
  table.style.borderCollapse = "collapse";
  table.style.border = "3px solid purple";
  body.appendChild(table);
}
createTable();
