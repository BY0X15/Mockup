var timSlider;
$(document).ready(function(){
  var slider = $("#slider");
  //
  $("#slider .pages").find("div.page").each(function(e){
    $("#slider .tabs").append('<span rel="'+e+'"></span>');
  });
  $("#slider .pages div.page").first().addClass("active");
  $("#slider .tabs span").first().addClass("active");
  //
  intSlider();
});
$(document).on('click', '#slider .tabs span', function(e){
  slideNextPage(this);
  clearInterval(timSlider);
  intSlider();
});
function intSlider() {
  timSlider = setInterval(function(){
    var active = $("#slider .tabs").find("span.active");
    var allCount = $("#slider .tabs span").length;
    var cur = $(active).attr("rel") + 1;
    (cur < allCount) ? cur++ : cur = 1;
    var nextpage = $("#slider .tabs span:nth-child("+cur+")");
    slideNextPage(nextpage);
  },5000);
}
function slideNextPage(e){
  var slider = $("#slider");
  $(slider).find("span").removeClass("active");
  $(e).addClass("active");
  var rel = $(e).attr("rel");
  var pRel = parseInt(rel) + 1;
  $(slider).find("div.page").removeClass("active");
  $("#slider .pages .page:nth-child("+pRel+")").addClass("active");
}
