/*
write a function multiTable that returns the multiplication table of the value passed in
ex:
multiTable(3)
[
[ 1 2 3 ]
[ 2 4 6 ]
[ 3 6 9 ]
]
*/

// this function will help me define each row for my table,
function multiRow(n, rowNum) {
  //define an array row
  let row = [];
  //starting at 1 iterate to n
  for (let i = 1; i <= n; i++) {
    //push the values of each row into table
    row.push(i * rowNum)
  }
  return row;
}

// this function will call multiRow, and push each row array into my table array
function multiTable (n) {
  //define the table array
  let table = [];
  //starting at 1 iterate to n
  for (let i = 1; i <= n; i++) {
    //push each call of multi row into table, to keep track of each sub array within my table
    table.push(multiRow(n, i))
  }
  return table;
}

console.log(multiTable(12));