/*    JavaScript 6th Edition
 *    Chapter 5
 *    Chapter case

 *    Photo zoom
 *    Variables and functions
 *    Author: Huang Sheng Wen
 *    Date: 2022/02/24
   
 *    Filename: zoom.js
 */

"use strict"; // interpret document contents in JavaScript strict mode

/* global variables */
var photoOrderArray = window.opener.photoOrder;
var photoSelectedHuangShengWen = photoOrderArray[2];
var figFilename = "images/IMG_0" + photoSelectedHuangShengWen + ".jpg";

function addFavorites()
{
   var imageListHuangShengWen = window.opener.document.getElementsByName("favorites");
   
   if(imageListHuangShengWen.length < 5){
      window.opener.addFavorites(photoSelectedHuangShengWen);
   }
   else
   {
      alert("Only FIVE photos are allowed. Please REMOVE at least ONE image.");
   }
}

/* populate img element and create event listener */
function pageSetup() {
   document.getElementsByTagName("img")[0].src = figFilename; // assign filename to img element
   createEventListener();
}

/* close window */
function closeWin() {
   window.close();
}

/* create event listener for close button */
function createEventListener() {
   var closeWindowDiv = document.getElementById("close")[0];
   var addFavoritesDiv = document.getElementById("addFavorites")[1];
   if (closeWindowDiv.addEventListener) {
     closeWindowDiv.addEventListener("click", closeWin, false); 
     addFavoritesDiv.addEventListener("click", addFavorites, false); 
   } else if (closeWindowDiv.attachEvent)  {
     closeWindowDiv.attachEvent("onclick", closeWin);
     addFavoritesDiv.attachEvent("onclick", addFavorites);
   }
}

/* add img src value and create event listener when page finishes loading */
window.onload = pageSetup;