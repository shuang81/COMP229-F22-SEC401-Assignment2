/*    JavaScript 6th Edition
 *    Chapter 5
 *    Chapter case

 *    Photo gallery
 *    Variables and functions
 *    Author: Huang Sheng Wen
 *    Date: 2022/02/24

 *    Filename: photos.js
 */

"use strict"; // interpret document contents in JavaScript strict mode

/* global variables */
var photoOrder = [1,2,3,4,5];
var figureCount = 3;

function addFavorites(photoSelected)
{    
   var tableTrHuangShengWen = document.getElementsByTagName("tr")[0];
   var tableTdHuangShengWen = document.createElement("td");

   var newImageHuangShengWen = document.createElement("img");
   newImageHuangShengWen.setAttribute('name', 'favorites');
   newImageHuangShengWen.height = 100;
   newImageHuangShengWen.src = "images/IMG_0" + photoSelected + "sm.jpg";
   newImageHuangShengWen.addEventListener("click", function(){RemoveButton(tableTdHuangShengWen)});

   var newRemoveButtonHuangShengWen = document.createElement("a");
   newRemoveButtonHuangShengWen.setAttribute('id', 'removeButtons')
   newRemoveButtonHuangShengWen.href = "#";   
   newRemoveButtonHuangShengWen.style.display = "none";
   newRemoveButtonHuangShengWen.innerHTML = "Remove";
   newRemoveButtonHuangShengWen.addEventListener("click", function(){removesFavorite(tableTdHuangShengWen)});
   
   tableTdHuangShengWen.style.padding = "5px";
   tableTdHuangShengWen.appendChild(newImageHuangShengWen);
   tableTdHuangShengWen.appendChild(newRemoveButtonHuangShengWen);

   tableTrHuangShengWen.appendChild(tableTdHuangShengWen);
}

function RemoveButton(tableTdHuangShengWen){

   var allButtonsHuangShengWen = document.getElementsByTagName("a");
   for(var i = 0; i < allButtonsHuangShengWen.length; i++)
   {
      allButtonsHuangShengWen[i].style.display = "none";
   }
   tableTdHuangShengWen.getElementsByTagName("a")[0].style.display = "block";
}

function removesFavorite(tableTdHuangShengWen){
   var tableTrHuangShengWen = document.getElementsByTagName("tr")[0];
   tableTrHuangShengWen.removeChild(tableTdHuangShengWen);
}

function populateFigures() {
   var filename;
   var currentFig;
   if (figureCount === 3) {
      for (var i = 1; i < 4; i++) {
         filename = "images/IMG_0" + photoOrder[i] + "sm.jpg";
         currentFig = document.getElementsByTagName("img")[i - 1];
         currentFig.src = filename;
      }
   } 
   else {
      for (var i = 0; i < 5; i++) {
         filename = "images/IMG_0" + photoOrder[i] + "sm.jpg";
         currentFig = document.getElementsByTagName("img")[i];
         currentFig.src = filename;
      }
   }
}

function rightArrow() {
   for (var i = 0; i < 5; i++) {
      if ((photoOrder[i] + 1) === 6) {
         photoOrder[i] = 1;
      } else {
         photoOrder[i] += 1;
      }
      populateFigures();
   }
}

function leftArrow() {
   for (var i = 0; i < 5; i++) {
      if ((photoOrder[i] - 1) === 0) {
         photoOrder[i] = 5;
      } else {
         photoOrder[i] -= 1;
      }
      populateFigures();
   }
}

function previewFive() {
   var articleEl = document.getElementsByTagName("article")[0];

   var lastFigure = document.createElement("figure");
   lastFigure.id = "fig5";
   lastFigure.style.zIndex = "5";
   lastFigure.style.position = "absolute";
   lastFigure.style.right = "45px";
   lastFigure.style.top = "67px";

   var lastImage = document.createElement("img");
   lastImage.width = "240";
   lastImage.height = "135";

   var firstFigure = lastFigure.cloneNode(true);
   firstFigure.id = "fig1";
   firstFigure.style.right = "";
   firstFigure.style.left = "45px";

}

function previewThree() {
   var articleEl = document.getElementsByTagName("article")[0];

   var numberButton = document.querySelector("#fiveButton p");

   figureCount = 3;
   articleEl.removeChild(document.getElementById("fig1"));
   articleEl.removeChild(document.getElementById("fig5"));
   numberButton.innerHTML = "Show more images";
   if (numberButton.addEventListener) {
      numberButton.removeEventListener("click", previewThree, false);
      numberButton.addEventListener("click", previewFive, false);
   } 
   else if (numberButton.attachEvent) {
      numberButton.detachEvent("onclick", previewThree);
      numberButton.attachEvent("onclick", previewFive);
   }
}

/* open center figure in separate window */
function zoomFig() {
   var propertyWidth = 960;
   var propertyHeight  = 600;
   var winLeft = ((screen.width - propertyWidth) / 2);
   var winTop = ((screen.height - propertyHeight) / 2);
   var winOptions = "width=960,height=600";
   winOptions += ",left=" + winLeft;
   winOptions += ",top=" + winTop;
   var zoomWindow = window.open("zoom.htm", "zoomwin", winOptions);
   zoomWindow.focus();
}

/* create event listeners for left arrow, right arrow, and center figure element */
function createEventListeners() {
   var leftarrow = document.getElementById("leftarrow");
   if (leftarrow.addEventListener) {
     leftarrow.addEventListener("click", leftArrow, false); 
   } 
   else if (leftarrow.attachEvent)  {
     leftarrow.attachEvent("onclick", leftArrow);
   }

   var rightarrow = document.getElementById("rightarrow");
   if (rightarrow.addEventListener) {
     rightarrow.addEventListener("click", rightArrow, false); 
   } 
   else if (rightarrow.attachEvent)  {
     rightarrow.attachEvent("onclick", rightArrow);
   }

   var mainFig = document.getElementsByTagName("img")[1];
   if (mainFig.addEventListener) {
     mainFig.addEventListener("click", zoomFig, false); 
   } 
   else if (mainFig.attachEvent)  {
     mainFig.attachEvent("onclick", zoomFig);
   }

   let DivFavoriteHuangShengWen = document.createElement('div');
   DivFavoriteHuangShengWen.setAttribute('id', 'myFavorite');
   DivFavoriteHuangShengWen.style.padding = "10px";
   DivFavoriteHuangShengWen.style.marginTop = "50px";
   DivFavoriteHuangShengWen.style.textAlign = "center";
   DivFavoriteHuangShengWen.textContent = "Favorite photos";
   document.getElementById('fiveButton').appendChild(DivFavoriteHuangShengWen);
}

/* create event listeners and populate image elements */
function setUpPage() {
   createEventListeners();
   populateFigures();
}

/* run setUpPage() function when page finishes loading */
if (window.addEventListener) {
  window.addEventListener("load", setUpPage, false); 
} else if (window.attachEvent)  {
  window.attachEvent("onload", setUpPage);
}