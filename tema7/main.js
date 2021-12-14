var x = prompt("Introduceti numarul dorit");

let xAsNumber = parseInt(x);

let childArray = [Math.floor(Math.random()* 10)];
let parentArray = [childArray];
console.log (parentArray);


let parentElement = document.getElementById('parent').innerHTML = xAsNumber ;

for (let i = 0; i < xAsNumber; i = i + 1) {
    let lineDiv = document.createElement('div');
    lineDiv.className = 'lineDiv';
    parentElement.innerHTML = parentElement.innerHTML + lineDiv.outerHTML;
};

if (xAsNumber % 2 ) {
  document.getElementById('parent').innerHTML = xAsNumber;
} else {(' ')};
     //we need another for statement and also another array, not a parent array, but maybe a child array

    
   // parentArray.push([
      // Math.floor(Math.random()* 10),
       //Math.floor(Math.random()* 10),
      // Math.floor(Math.random()* 10),
       //Math.floor(Math.random()* 10),
   // ])