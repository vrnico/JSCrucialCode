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
  let newCrucialCodeHtml = new CrucialCode("Html");
  let newCrucialCodeCss = new CrucialCode("Css");
  //displayData helps set frontend/backend relation with asynchrony
  let displayData = function updateResults(array, language) {
    let searchDisplay = ("#search" + language);
    console.log("this is the searchdispay: " + searchDisplay);
    for (let i = 0; i < 5; i++){
      $(searchDisplay).append('<li><a href="' + array[i].url + '" target="_blank">' + array[i].title + '</a></li>');
    }
  }



  //new object doesn't provide output until API call is succesful
  newCrucialCodeRuby.searchLang(displayData);
  newCrucialCodeJS.searchLang(displayData);
  newCrucialCodeAndroid.searchLang(displayData);
  newCrucialCodeCsharp.searchLang(displayData);
  newCrucialCodeHtml.searchLang(displayData);
  newCrucialCodeCss.searchLang(displayData);



});
