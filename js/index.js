$(document).ready(function() {
	var $window = $(window);
  var wid = "";
  if($window.width()<=800) {
        wid = "90%";
      }
  else {
      wid="50%"; 
  }
  
  $("#in").click(function() {
    $("#in").animate({
       width:wid
    },"slow");
  });
});

 function search(ev) {
    ev.preventDefault();
    var input = $("#in").val();
    $("#info").removeAttr('class');
    $.ajax ({
      type:"GET",
      url:"http://en.wikipedia.org/w/api.php?action=opensearch&search="+input+"&limit=15&namespace=0&format=json&callback=?",
      contentType:"application/json; charset=utf-8",
      async:false,
      dataType:"json",
      success: function(data) {
        if($(".results").length) {
          $(".results").remove();
        }
        for(var i=0; i<data[1].length; i++) {
           $(".wiki_results").append("<ul class='results'><li><a class='wiki_links' href='"+data[3][i]+"' target='_blank'><p><h2>"+data[1][i]+"</h2>"+data[2][i]+"</p></a></li></ul>");
        }
      }
    });
 }