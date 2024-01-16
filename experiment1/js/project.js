// project.js - purpose and description here
// Author: Abraham Halim
// Date: 1/15/2024

// NOTE: This is how we might start a basic JavaaScript OOP project

// Constants - User-servicable parts
// In a longer project I like to put these in a separate file

// define a class
class MyProjectClass {
  // constructor function
  constructor(param1, param2) {
    // set properties using 'this' keyword
    this.property1 = param1;
    this.property2 = param2;
  }
  
  // define a method
  myMethod() {
    // code to run when method is called
  }
}
function setup() { 
  createCanvas(500, 300); 
  textSize(18); 
  
  text("Click on the button to set the" + 
       " values of the table", 20, 20); 
  
  setBtn = createButton("Add Table Values"); 
  setBtn.position(30, 40); 
  setBtn.mouseClicked(setTableData); 
  
  // Create the table 
  table = new p5.Table(); 
  
  // Add 5 columns and rows to the table 
  for (let i = 0; i < 5; i++) { 
    table.addColumn("Column " + i); 
    table.addRow(); 
  } 
} 

function setTableData() { 
  for (let r = 0; r < 5; r++) { 
    for (let c = 0; c < 5; c++) { 
  
      // Set the value at the given 
      // column and row of the table 
      table.set(r, c, r + " " + c); 
    } 
  } 
  
  showTable(); 
} 

function showTable() { 
  clear(); 
    text("Click on the button to set the" + 
       " values of the table", 20, 20); 
  
  // Show all the columns present 
  for (let c = 0; c < 5; c++) { 
    text(table.columns, 20 + 80 * c, 80); 
  } 
  
  // Show all the rows currently 
  // present in the table 
  for (let r = 0; r < 5; r++) { 
    for (let c = 0; c < 5; c++) { 
      text(table.getString(r, c), 
           20 + 80 * c, 
           100 + 20 * r); 
    } 
  } 
} 

function main() {
  // create an instance of the class
  //let myInstance = new MyProjectClass(value1, value2);

  // call a method on the instance
  //myInstance.myMethod();
  setTableData();
}

// let's get this party started - uncomment me
main();
