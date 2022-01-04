
let launchesAxios = function(response) {
  let dataLaunches = response.data;
  let theTable = document.getElementById('theTable');

  let renderOneCapsule = function(index) {
    let launch = dataLaunches[index];

    let newRow = theTable.insertRow();
    let idCell = newRow.insertCell();
    let fNumberCell = newRow.insertCell();
    let shipsCell = newRow.insertCell();

    idCell.innerHTML = launch.id;
    fNumberCell.innerHTML = launch.flight_number;
    shipsCell.innerHTML = launch.ships.length;
  }

  for (let i = 0; i < dataLaunches.length; i = i + 1) {
    renderOneCapsule(i);
  }

};

axios.get('https://api.spacexdata.com/v4/launches').then(launchesAxios);


let d = new Date();
document.getElementById("date").innerHTML = d;