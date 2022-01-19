/*
write a function multiTable that returns the multiplication table of the value passed in
ex:
multiTable(3)
1 2 3
2 4 6
3 6 9

*/

function multiTable(n, row) {
  //define an array table
  let table = [];
  //starting at 1 iterate to n
  for (let i = 1; i <= n; i++) {
    //push the values of each row into table
    table.push(i * row)
  }
  return table;
}

function multiRow (n) {
  //establish an array to keep track of each row
  let row = [];
  //starting at 1 iterate to n
  for (let i = 1; i <= n; i++) {
    //push each call of multi table into row, to keep track of each sub array within my table
    row.push(multiTable(n, i))
  }
  return row;
}

console.log(multiRow(5));