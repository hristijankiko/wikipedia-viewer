$(document).ready(function(){
  $.ajaxSetup({ cache: false });
  $("#search").on("keydown",function search(e) {
    if(e.keyCode == 13) {
      input = $(this).val();
      searchLink = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=" + input + "&callback=?";
      $.getJSON(searchLink, function(data){
        $("#searchResults").html("");
        getSearchResults(data);
      });
    }
});
  
  /*
  Generates the html for the search results
  in the following format:
  
  <a href="" target="_blank"><li class="searchResult">
      <h2>Title</h2>
      <p>This is the description</p>
      </li></a>
  */
  function getSearchResults(data){
    for(var i=0; i < data[1].length; i++){
          $("#searchResults").append("<a href=\"" + data[3][i] + "\"target=\"_blank\">" +   "<li class=\"searchResult\">" + "<h2>" + data[1][i] + "</h2>" + "<p>" + data[2][i] + "</p>" + "</li>"  +"</a>");
        }
  }
  
});