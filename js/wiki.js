(function() {
$("#send").on("click", function() {
  $("#results").html(""); //Clean previous results
  var query = $("#search").val();
  var url = "https://en.wikipedia.org//w/api.php?action=opensearch&search=" + encodeURI(query) + "&callback=?";

  $.getJSON(url, function(data) {
  for (var i = data[1].length- 1; i >= 0; i--) {
     $("#results").prepend("<div class='box'><a href = '" + data[3][i] +"'<li><h3>" +  data[1][i] + "</h2></li><li><p>" + data[2][i] +"</p></li></div>");
   }
  });
});

$("#search").keypress(function(e) {
  if (e.which===13) {
    $("#send").click();
  }
})
})();
