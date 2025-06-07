const text1 = document.querySelector(".hetext");
const index1 = document.querySelector(".index1");
const index2 = document.querySelector(".index2");
function changeindex(){
    if(text1.style.opacity == 0){
        text1.style.opacity = 1;
        index1.innerHTML = "Birthday : 2007/11/08";
        index1.style.fontSize="large";
        index2.style.opacity = 1;
    }
    else{
        text1.style.opacity = 0;
        index1.innerHTML = "星街すいせい大好き";
        index1.style.fontSize="xx-large";
        index2.style.opacity = 0;
    }
}