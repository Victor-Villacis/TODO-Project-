$(document).ready(function() {
  //alert("hello")
  $("#btntitle").on("click", function(e){
    e.preventDefault();

    var navtitle = $("#navtitle").val();
    var title = $("<p>");
    
    title.append(navtitle + "<hr></hr>");
    $(".well").append(title);
    $("#navtitle").val("").focus(); //resets placeholder 
  });
  //add list to right side of page

  $("#addbtn").on("click", function(e){
    e.preventDefault();

    var addtoList = $("#addtoList").val();
    var list = $('<p> <button style=color:orange class="btn btn-danger">X</button></p>');

    
    list.append(addtoList);
    $("#notepad").append(list);
    $("#addtoList").val("").focus(); //resets placeholder 
  });
// Delete row TD
  $("#notepad").on("click", ".btn-danger", function() {
    if($("td").length = 1){
      $(this).parent().remove();
    }
  });

});


