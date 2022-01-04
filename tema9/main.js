
let launchesAxios = function(launchesAxiosFunction){
let dataLaunches = launchesAxiosFunction.data;

let renderOneCapsule = function(index) {
let idd = 'launches' + (index + 1);
let capsulesId = dataLaunches[index].id + ': ' + dataLaunches[index].flight_number;
//let shipsID = dataLaunches.ships;
//let ships =shipsID.lenght;

//document.getElementById('shipsTD').innerHTML = ships;
document.getElementById(idd).innerHTML = capsulesId;
//document.getElementById('launches1').innerHTML = capsulesFlightNumber;
}

for (let i = 0; i < 10; i = i + 1) {
    renderOneCapsule(i);
  }

};

axios.get('https://api.spacexdata.com/v4/launches').then(launchesAxios);


let d = new Date();
document.getElementById("date").innerHTML = d;