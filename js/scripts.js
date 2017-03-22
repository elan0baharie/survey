$(function() {








  $("#submit_info").click(function() {
    var user_name_print = $("#user_name_input").val();
    var user_bday_print = $("#user_name_input").val();
    $("#space").text(user_name_print);
    $("#space").text(user_name_print);
    $("#space").text(user_name_print);
  });


  $(".radio").hover(
    function(){
      $(this).addClass("hover");
    }, function() {
      $(this).removeClass("hover");
    }
  );

  $("h2").click(function() {
    $("h1").fadeToggle("slow");
  });

});
