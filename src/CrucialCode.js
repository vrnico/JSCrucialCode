
import $ from 'jquery';
export class CrucialCode {
  constructor(language){
    this.languageSearch = language;

  }

  searchLang(displayData){
    $.ajax({
       url: `http://hn.algolia.com/api/v1/search_by_date?query=javascript`,
       type: 'GET',
       data: {
         format: 'json'
       },
       success: function(response) {
         let test = [];
         for (let i = 0; i < 10; i++){
           if ((response.hits[i].story_url != null) && (response.hits[i].story_title != null)) {
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
