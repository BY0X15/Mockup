$(document).ready(function() {
  $("#slider").each(function () {
    var obj = $(this);
    $(obj).append("<ul class=\"controls\"></ul>");
    $(obj).find("li").each(function () {
      $(obj).find(".controls").append("<li rel='"+$(this).index()+"'></li>");
      $(this).addClass("slider"+$(this).index());
    });
    $(".controls").find("li").first().addClass("on");
  });
  //
  setInterval(function(){
    var sl = $("#slider");
    var curr = $(sl).find("li.on");
    var curRel = (curr).attr("rel");
    var allCount = $("#slider .controls li").length - 1;
    //
    (curRel < allCount) ? curRel++ : curRel = 0;
    $(curr).removeClass('on');
    var nextPage = $($("#slider ul.controls li")[curRel]);
    $(nextPage).addClass('on');

    slidePage(curRel,sl);
  },5000);
});
function slidePage(obj, sl) {
  var ul = $(sl).find("ul.img");
  var bl = $(sl).find("li.slider"+obj);
  var step = $(bl).width();
  $(ul).animate({marginLeft: "-"+step*obj}, { duration: 500, queue: false });
}
$(document).on("click", "#slider .controls li", function() {
  var sl = $(this).closest("#slider");
  $(sl).find("li").removeClass("on");
  $(this).addClass("on");
  var obj = $(this).attr("rel");
  slidePage(obj, sl);
  return false;
});
$(document).on("click", "#slider .actions div", function(e) {
  var butt = $(this).attr("class");
  var sl = $("#slider");
  var curr = $(sl).find("li.on");
  var curRel = (curr).attr("rel");
  var allCount = $("#slider .controls li").length - 1;
  //
  if (butt == 'left') {
    (curRel == 0) ? curRel = allCount : curRel--;
  } else {
    (curRel < allCount) ? curRel++ : curRel = 0;
  }
  //
  $(curr).removeClass('on');
  var nextPage = $($("#slider ul.controls li")[curRel]);
  $(nextPage).addClass('on');

  slidePage(curRel,sl);
  return false;
});
