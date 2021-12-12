var x = prompt("Introduceti numarul dorit");

let xAsNumber = parseInt(x);

let parentArray = [];



//let a = (Math.random()* 10);
var array;

array=
[
    [Math.floor(Math.random()* 10),[Math.floor(Math.random()* 10)],[Math.floor(Math.random()* 10)],[Math.floor(Math.random()* 10)],[Math.floor(Math.random()* 10)]],
    [[Math.floor(Math.random()* 10)],[Math.floor(Math.random()* 10)],[Math.floor(Math.random()* 10)],[Math.floor(Math.random()* 10)],[Math.floor(Math.random()* 10)]],
    [[Math.floor(Math.random()* 10)],[Math.floor(Math.random()* 10)],[Math.floor(Math.random()* 10)],[Math.floor(Math.random()* 10)],[Math.floor(Math.random()* 10)]],
    [[Math.floor(Math.random()* 10)],[Math.floor(Math.random()* 10)],[Math.floor(Math.random()* 10)],[Math.floor(Math.random()* 10)],[Math.floor(Math.random()* 10)]],
    [[Math.floor(Math.random()* 10)],[Math.floor(Math.random()* 10)],[Math.floor(Math.random()* 10)],[Math.floor(Math.random()* 10)],[Math.floor(Math.random()* 10)]],
];

let parentElement = document.getElementById('parent');

for (let i = 0; i < xAsNumber; i = i + 1) {
    let lineDiv = document.createElement('div');
    lineDiv.className = 'lineDiv';
    parentElement.innerHTML = parentElement.innerHTML + lineDiv.outerHTML;

    // we need another for statement and also another array, not a parent array, but maybe a child array

    
    parentArray.push([
        Math.floor(Math.random()* 10),
        Math.floor(Math.random()* 10),
        Math.floor(Math.random()* 10),
        Math.floor(Math.random()* 10),
        Math.floor(Math.random()* 10)
    ]);
}

let f = document.getElementsByClassName('randomnumbers').innerHTML = (array[5]);
console.log((array[4]));



