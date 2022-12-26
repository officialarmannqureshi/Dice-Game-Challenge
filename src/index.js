var randomnum1=Math.random()*6;
randomnum1=Math.floor(randomnum1)+1;
var randomImagesrc1="images/dice"+randomnum1+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomImagesrc1);
var randomnum2=Math.floor(Math.random()*6)+1;
var randomImagesrc2="images/dice"+randomnum2+".png";
document.querySelector("h1").innerHTML="Refresh Me";
document.querySelectorAll("img")[1].setAttribute("src",randomImagesrc2);
if(randomnum1>randomnum2){
    document.querySelector("h1").innerHTML="Player-1 Won";
    document.querySelectorAll("div")[0].style.color="orange";
}
else if(randomnum1<randomnum2){
    document.querySelector("h1").innerHTML="Player-2 Won";
    document.querySelectorAll("div")[0].style.color="yellow";
    
}
else if(randomnum1 === randomnum2){
    document.querySelector("h1").innerHTML="Match Draw";
}
