import './styles.css';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CrucialCode } from './CrucialCode.js';


$(document).ready(function() {
  console.log("call happens");

  let newCrucialCodeRuby = new CrucialCode("Ruby");
  let newCrucialCodeJS = new CrucialCode("Javascript");
  let newCrucialCodeAndroid = new CrucialCode("Android");
  let newCrucialCodeCsharp = new CrucialCode("Csharp");
  let newCrucialCodeHTML = new CrucialCode("HTML");
  let newCrucialCodeCSS = new CrucialCode("CSS");
  //displayData helps set frontend/backend relation with asynchrony
  let displayData = function updateResults(array, language, results) {
    let searchDisplay = ("#search" + language);
    for (let i = 0; i < results; i++){
      $(searchDisplay).append('<li><a href="' + array[i].url + '" target="_blank">' + array[i].title + '</a></li>');
      console.log(i);
    }
  }



  //new object doesn't provide output until API call is succesful
  newCrucialCodeRuby.searchLang(displayData, 5);
  newCrucialCodeJS.searchLang(displayData, 5);
  newCrucialCodeAndroid.searchLang(displayData, 5);
  newCrucialCodeCsharp.searchLang(displayData, 5);
  newCrucialCodeHTML.searchLang(displayData, 5);
  newCrucialCodeCSS.searchLang(displayData, 5);

  $('.fullList').click(function(event) {
    let divID = event.target.id + "Display";
    let displayID = "#" + divID;
    console.log(divID);
    let newfullLanguage = new CrucialCode(event.target.id);
    newfullLanguage.searchLang(displayData, 50);
    $(event.target.id).removeClass("visible").addClass("fullListDisplay")
    $('.visible').fadeOut();
    $(displayID).fadeIn();
    console.log("display id: " + displayID);
    console.log("crucialcode: " + event.target.id);
  })


});
