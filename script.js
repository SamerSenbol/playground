
function changeBackground(){
    var style =document.body.style;
    if (style.backgroundColor=="white") {
        
        style.backgroundColor="purple";        
    }
    else{style.backgroundColor="white"}
console.log("It works!");
}

function randomizeBackground(){
    var style =document.body.style;
    var randomValue=Math.random();
    console.log(randomValue);
    if(randomValue<0.2){
        style.backgroundColor="blue";
    }
    else if (randomValue<0.4){
        style.backgroundColor="pink";
    }
    else if (randomValue<0.6){
        style.backgroundColor="orange";
    }
  else{  style.backgroundColor="yellow";}
    }
    function randomizeBackgroundPro(){
        var red =Math.round(Math.random()*255);
        var green =Math.round(Math.random()*255);
        var blue =Math.round(Math.random()*255);
        var rgbValue ="rgb("+ red +","+green +","+blue +")";
        console.log(rgbValue);
        document.body.style.backgroundColor=rgbValue;
    }
    setInterval(randomizeBackgroundPro,1000);

//pass by Value
//string, number,boolean

//pass by reference
//arry, object

/* var fotballPlayer={
    name:"David Jensen",
    age:22,
    shirtNumber:14,
    position:"Mid-fielder",
    gender:"male"

};
var newFotballPlayer=fotballPlayer;
newFotballPlayer.name="Albert Eisteion";
console.log(newFotballPlayer); 
console.log(fotballPlayer); */
