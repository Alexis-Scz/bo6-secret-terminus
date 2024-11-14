let x = 0;
let y = 0;
let z = 0;
let ximgbordure = null;
let yimgbordure = null;
let zimgbordure = null;
let result1 = 0;
let result2 = 0;
let result3 = 0;

function clickimg(img, border) {
  switch (border) {
    case "x":
      if (ximgbordure != null) {
        let oldimgelement = document.getElementById(ximgbordure);
        oldimgelement.setAttribute("border", 0);
      }
      const imgelements = document.getElementById(img);
      imgelements.setAttribute("border", 1);
      ximgbordure=img
      break;

    case "y":
      if (yimgbordure != null) {
        let oldimgelement = document.getElementById(yimgbordure);
        oldimgelement.setAttribute("border", 0);
      }
      const imgelement = document.getElementById(img);
      imgelement.setAttribute("border", 1);
      yimgbordure=img
      break;
    case "z":
      if (zimgbordure != null) {
        let oldimgelement = document.getElementById(zimgbordure);
        oldimgelement.setAttribute("border", 0);
      }
      const imgelementa = document.getElementById(img);
      imgelementa.setAttribute("border", 1);
      zimgbordure=img
      break;
    default:
      break;
  }
}

function definir(lettre, valeur, img) {
  if (lettre == "x") {
    x = valeur;
  }
  if (lettre == "y") {
    y = valeur;
  }
  if (lettre == "z") {
    z = valeur;
  }

  // function calcul(x,y,z){

  const result1 = 2 * x + 11;
  const result2 = z * 2 + y - 5;
  const result3 = z + y - x;

  document.getElementById("calcul1").innerHTML = result1;
  document.getElementById("calcul2").innerHTML = result2;
  document.getElementById("calcul3").innerHTML = result3;
  switch (lettre) {
    case "x":
      clickimg(img, "x");
      break;
    case "y":
      clickimg(img, "y");
      break;
    case "z":
      clickimg(img, "z");
      break;
  }
}
