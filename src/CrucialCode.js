
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
  searchMeetUp(displayMeetUps){
    const url = "https://api.meetup.com/find/upcoming_events?photo-host=public&topic_category=34&page=20&text=Javascript+Ruby+C&sig_id=74185752&lon=-122.6765&lat=45.5231&sig=b5eabbdbde9dda9695e0b9e49012343d99d3f663"
    const apiKey = process.env.API_KEY;
    $.ajax({
       url: (url),
       type: 'GET',
       data: {
         format: 'json'
       },
       success: function(response) {
         let meetUps = [];
         for (let i = 0; i < 10; i++) {
           meetUps.push(response.events[i]);
           console.log(response.events[i]);
           console.log(i);
         }
         displayMeetUps(meetUps);
       },
       error: function() {
       }
    })
  }





}
