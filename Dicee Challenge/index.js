var rn1=6;
var rn2=6;
rn1=Math.round(Math.random()*5+1);
rn2=Math.round(Math.random()*5+1);
console.log(rn1+" "+rn2);
i1="images/dice"+rn1+".png";
i2="images/dice"+rn2+".png";
var img1=document.querySelectorAll("img")[0];
var img2=document.getElementById("i2");
img1.setAttribute("src",i1);
img2.setAttribute("src",i2);
//img1.src="images/dice"+rn1+".png";
//img2.src="images/dice"+rn2+".png";
//console.log(img1.src+" "+img2.src);
if(rn1==rn2)
{
document.querySelector("h1").innerHTML="DRAW";
}
else if(rn1>rn2)
{
document.querySelector("h1").innerHTML="Player1 Wins";
}else{
    document.querySelector("h1").innerHTML="Player2 Wins";
}