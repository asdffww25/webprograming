let input = Number(prompt('0보다 큰 정수를 입력하세요'));
const tinput = input;
const mytext = document.querySelector('#text');
const num = document.createElement('span');
let result = 0;
console.log(typeof input)
do{
    result += input;
    input--;
}while(input > 0);
num.textContent = `0에서 ${tinput}까지 합은 ${result}`;

mytext.append(num);