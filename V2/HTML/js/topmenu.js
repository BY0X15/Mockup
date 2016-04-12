$(document).on('click','#topmenu > li .leftmenu > a', function(e){
  var id = $(this).attr('id');
  var currA = $("#topmenu > li .leftmenu").find('a.active');
  var currID = $(currA).attr('id');
  $(currA).removeClass('active');
  $("#"+id).addClass('active');
  //
  var listMenu = $("#topmenu > li .showmenu");
  $("#"+currID+"Menu").hide();
  $("#"+id+"Menu").show();
});
