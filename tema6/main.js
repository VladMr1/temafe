


let arataaxiosul = function(functiaarataaxiosul) {
  let dateleechipaj = functiaarataaxiosul.data;
  let primulom = dateleechipaj[0]
  //let primulom = dateleechipaj[0][1][2][3][5][6][7][8][9][10][11][12][13][14];

  let renderOneCosmonaut = function(index) {
    let id = 'd' + (index + 1);
    let cosmonautText = dateleechipaj[index].name + ': ' + dateleechipaj[index].agency;
    document.getElementById(id).innerHTML = cosmonautText;
  };
      

  for (let i = 0; i < 15; i = i + 1) {
    renderOneCosmonaut(i);
  }

};

let arataaxiosulcucapsule = function(functiaarataaxiosulcucapsule) {
  let datelecapsulelor = functiaarataaxiosulcucapsule.response;
  let primacapsula = datelecapsulelor


  let ca = document.getElementById('c1').innerHTML = ((datelecapsulelor.name),(datelecapsulelor[0].agency));

  let cb = document.getElementById("c2").innerHTML = (datelecapsulelor[1].name);

  let cc = document.getElementById("c3").innerHTML = (datelecapsulelor[2].name);

  let cd = document.getElementById("c4").innerHTML = (datelecapsulelor[3].name);

  let ce = document.getElementById("c5").innerHTML = (datelecapsulelor[4].name);

  let cf = document.getElementById("c6").innerHTML = (datelecapsulelor[5].name);

  let cg = document.getElementById("c7").innerHTML = (datelecapsulelor[6].name);

  let ch = document.getElementById("c8").innerHTML = (datelecapsulelor[7].name);

  let ci = document.getElementById("c9").innerHTML = (datelecapsulelor[8].name);

  let cj = document.getElementById("c10").innerHTML = (datelecapsulelor[9].name);

  let ck = document.getElementById("c11").innerHTML = (datelecapsulelor[10].name);

}


axios.get('https://api.spacexdata.com/v4/capsules').then(arataaxiosulcucapsule);

axios.get('https://api.spacexdata.com/v4/crew').then(arataaxiosul);

