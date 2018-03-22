
import $ from 'jquery';
export class CrucialCode {
  constructor(language){
    this.shortList = 5;
    this.longList = 50;
    this.languageSearch = language;

  }
  //displayData calls function from frontend
  searchLang(displayData, listLength){
    const url = "http://hn.algolia.com/api/v1/search_by_date?query="
    let search = this.languageSearch;
    let suffix = "&hitsPerPage=100"
    $.ajax({
       url: (url + search + suffix),
       type: 'GET',
       data: {
         format: 'json'
       },
       success: function(response) {
         let test = [];
         for (let i = 0; i < 100; i++){
           if ((response.hits[i].url != null) && (response.hits[i].title != null)) {
             test.push(response.hits[i]);

           }
         }
         //displayData function only works if a success
         displayData(test, search, listLength);
       },
       error: function() {
       }
    })
  }
}
