
let launchesAxios = function(launchesAxiosFunction){
    let dataLaunches = launchesAxiosFunction.data;
    let idLaunches = launchesAxiosFunction.id;
    let flightNumberLaunches = launchesAxiosFunction.flight_number;
    dataLaunches.id = document.getElementById('launches1').innerHTML;

    document.getElementById('launches').innerHTML = idLaunches + '- ' + flightNumberLaunches;

};

let renderOneCapsule = function(index) {
    let id = 'launches' + (index + 1);
    let capsulesText = idLaunches[index].id + ': ' + idLaunches[index].flight_number;
    document.getElementById(id).innerHTML = capsulesText;

};












axios.get('https://api.spacexdata.com/v4/launches').then(launchesAxios);




let d = new Date();
document.getElementById("date").innerHTML = d;