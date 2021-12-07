  
  let arataaxiosul = function(functiaarataaxiosul) {
      let dateleechipaj = functiaarataaxiosul.data;
      let primulom = dateleechipaj[0]
      //let primulom = dateleechipaj[0][1][2][3][5][6][7][8][9][10][11][12][13][14];
      

  let a = document.getElementById('d1').innerHTML = ((dateleechipaj[0].name),(dateleechipaj[0].agency));

  let b = document.getElementById("d2").innerHTML = (dateleechipaj[1].name);

  let c = document.getElementById("d3").innerHTML = (dateleechipaj[2].name);

  let d = document.getElementById("d4").innerHTML = (dateleechipaj[3].name);

  let e = document.getElementById("d5").innerHTML = (dateleechipaj[4].name);

  let f = document.getElementById("d6").innerHTML = (dateleechipaj[5].name);

  let g = document.getElementById("d7").innerHTML = (dateleechipaj[6].name);

  let h = document.getElementById("d8").innerHTML = (dateleechipaj[7].name);

  let i = document.getElementById("d9").innerHTML = (dateleechipaj[8].name);

  let j = document.getElementById("d10").innerHTML = ((dateleechipaj[9].name),(dateleechipaj[9].agency));

  let k = document.getElementById("d11").innerHTML = (dateleechipaj[10].name);

  let l = document.getElementById("d12").innerHTML = (dateleechipaj[11].name);

  let m = document.getElementById("d13").innerHTML = (dateleechipaj[12].name);

  let n = document.getElementById("d14").innerHTML = (dateleechipaj[13].name);

  let o = document.getElementById("d15").innerHTML = (dateleechipaj[14].name);

};

let arataaxiosulcucapsule = function(functiaarataaxiosulcucapsule){
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

