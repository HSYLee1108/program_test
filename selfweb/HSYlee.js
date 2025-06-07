const text1 = document.querySelector(".DCtext");
const index1 = document.querySelector(".index1");
const index2 = document.querySelector(".index2");
const div1 = document.querySelector(".profile");
const button1 = document.querySelector("#button1");
function changeindex(){
    if(text1.style.opacity == 0){
        text1.style.opacity = 1;
        index1.innerHTML = "Birthday : 2007/11/08";
        index1.style.fontSize="large";
        div1.style.height="240px";
        index2.style.opacity = 1;
        button1.innerHTML = "▲";
    }
    else{
        text1.style.opacity = 0;
        index1.innerHTML = "星街すいせい大好き";
        index1.style.fontSize="large";
        div1.style.height="110px";
        index2.style.opacity = 0;
        button1.innerHTML = "▼";
    }
}