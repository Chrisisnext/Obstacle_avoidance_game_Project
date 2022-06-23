'use strict'

let boat = document.querySelector(".boat");
let xMoveBy = 10;
let yMoveBy = 10;
let scroll = 0;


window.addEventListener('load', () => {
    boat.style.position = "absolute";
    boat.style.left = '40vw';
    boat.style.top = '164vh';
});

window.addEventListener('keyup', (e) => {
     switch(e.key){
         case 'ArrowLeft':
             boat.style.left = parseInt(boat.style.left) - xMoveBy + 'vw';
             break;
         case 'ArrowRight':
             boat.style.left = parseInt(boat.style.left) + xMoveBy + 'vw';
             break;
         case 'ArrowUp':
             boat.style.top = parseInt(boat.style.top) - yMoveBy + 'vh';
             break;
         case 'ArrowDown':
             boat.style.top = parseInt(boat.style.top) + yMoveBy + 'vh';
             break;
     }
 });

//let sound = document.createElement("audio");
 function makeRock() {

     let rock = document.createElement("div")
     rock.className = "rock"
     document.body.appendChild(rock)
     rock.style.left = Math.random()*100 + '%';
     rock.style.top = "0";
 }

 function moveRocks() {
    let rocks = document.getElementsByClassName("rock");
    for (let i = 0; i < rocks.length; i++) {
        rocks[i].style.top = parseInt(rocks[i].style.top) + 1 + 'vh';
    }
    document.body.style.backgroundPosition = "0px " + scroll + 'px';
    scroll+= 10;
 }

 /*collideRock = () => {
    boat = document.getElementsByClassName("boat");
    rock = docuemnt.getElementsByClassName("rock");
    if (boat === rock) {
        console.log("Ship Wrecked!")
    } else return null;
 }
*/
//  for (let i = 0; i < 10; i++) {
//      makeRock();
//  }

 setInterval(makeRock,2000);

 setInterval(moveRocks,100);

 //tile background image
 //rock