var timSlider;
$(document).ready(function(e) {
	$("#slider").append('<div class="tabs"></div>');
	$("#slider #pages").find("div.page").each(function(e){
		$("#slider .tabs").append('<span rel="'+e+'"></span>');
	});
	$("#slider #pages div.page").first().addClass("active");
	$("#slider .tabs span").first().addClass("active");
	//
	intSlider();
}
);
$(document).on('click','#slider .tabs span', function(e){
	slideNextPage(this);
	clearInterval(timSlider);
	intSlider();
});

function intSlider() {
	timSlider = setInterval(function(e){
		var active = $("#slider .tabs").find("span.active");
		var allCount = $("#slider .tabs span").lenght;
		var cur = $(active).attr("rel") + 1;
		(cur < allCount) ? cur += 1 : cur = 1;
		var nextPage = $("#slider .tabs span:nth-child("+cur+")");
		slideNextPage(nextPage);
	},5500);
}

function slideNextPage(intPage) {
	var slider = $("#slider");
	$(slider).find("span").removeClass("active");
	$(intPage).addClass("active");
	var rel = $(intPage).attr("rel") + 1;
	$(slider).find("div.page").removeClass("active");
	$("#slider #pages .page:nth-child("+rel+")").addClass("active");
}