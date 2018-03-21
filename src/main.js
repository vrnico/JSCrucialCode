import './styles.css';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CrucialCode } from './CrucialCode.js';


$(document).ready(function() {
  console.log("call happens");
  let newCrucialCode = new CrucialCode("javascript");
  let displayData = function updateResults(array) {
    for (let i = 0; i < 10; i++){
      $('#searchDisplay').append('<li><h4><a href="' + array[i].url + '">' + array[i].title + '</a></h4></li>');
    }
  }
  newCrucialCode.searchLang(displayData);

});
