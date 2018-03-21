
import $ from 'jquery';
export class CrucialCode {
  constructor(language){
    this.languageSearch = language;

  }

  searchLang(displayData){
    $.ajax({
       url: `http://hn.algolia.com/api/v1/search_by_date?query=javascript&hitsPerPage=100`,
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
         displayData(test);
         console.log(test);
       },
       error: function() {
       }
    })
  }
}
