const three = document.querySelector('#three');

let x = 3;
let y = 3; 
let z = 3;

three.innerHTML = three.innerHTML + `<span>x += 3; 실행 후, x=${x += 3}</span><br>`;
three.innerHTML = three.innerHTML + `<span>y *= 3; 실행 후, y=${y *= 3}</span><br>`;
three.innerHTML = three.innerHTML + `<span>z %= 2; 실행 후, z=${z %= 2}</span>`;
