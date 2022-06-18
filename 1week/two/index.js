let input = prompt('황기태님의 점수를 입력하세요');

const mytext = document.querySelector('#text');
const grade = document.createElement('span');

if(input >= 90){
    grade.textContent = `${input}는 A입니다.`;
}else if(input >= 80){
    grade.textContent = `${input}는 B입니다.`;
}else if(input >= 70){
    grade.textContent = `${input}는 C입니다.`;
}else if(input >= 60){
    grade.textContent = `${input}는 D입니다.`;
}else{
    grade.textContent = `${input}는 F입니다.`;
}

mytext.append(grade);