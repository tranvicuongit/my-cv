var listOfThemes = [];
//var masterLink = "https://tranvicuongit.github.io/my-cv";
var masterLink = ".";

$(document).ready(function(){
	$.getJSON( "https://tranvicuongit.github.io/my-cv/Content/json/themes.json", function(data) {
		listOfThemes = data;
		$.each(listOfThemes, function(index, ele){
			var li = "<li data-id='" + ele.id + "'><a>" + ele.title + "</a><span>"+ ele.shortdesc +"</span></li>";
			$("#ul-list-themes").append(li);
		});

		if(listOfThemes.length > 0){
			// Active first theme
			var first = listOfThemes[0];
			$("#contain-theme").find("img").attr("src", masterLink + "/Page/" + first.folder + "/background.png");
			$("#contain-theme").find(".title").text(first.title);
			$("#contain-theme").find(".description").text(first.descrition);
			$("#contain-theme").find("a").attr("href", masterLink + "/Page/" + first.folder);

			$("#ul-list-themes li:first").addClass("active");
		}

		clickAndChangeContent();
	});

	$("header li").on("click", function(){
		var c = $(this).find("a").attr("data-href");
		$("html, body").stop().animate({
			scrollTop: $(c).offset().top
		}, 1000);
	});

	$(".scroll-down").on("click", function(){
		$("html, body").stop().animate({
			scrollTop: $("#my-themes").offset().top
		}, 1000);
	});

	$(".scroll-to-top").on("click", function(){
		$("html, body").stop().animate({
			scrollTop: 0
		}, 1000);
	});

showScrollToTop();
	$(window).scroll(function () {
		showScrollToTop();
	});
});
window.onload = function () {
	if ($("#txtLanguage").val() == "vi") {
		console.log("%c\nCẢNH BÁO" +
			"%c\nĐây là tính năng của trình duyệt cung cấp cho các nhà phát triển.\n" +
			"Việc sao chép và dán các đoạn mã không rõ ràng vào đây có thể làm ảnh hưởng đến những trải nghiệm của quý khách.\nXin cám ơn!" +
			"\n\n%cEP Pressed Juice",
			"color:#c8102e; background-color:white;font-weight:bold; font-size: 30pt;",
			"color:#c8102e; background-color:white;font-weight:500; font-size: 11pt;",
			"color:#000; background-color:white; font-size: 10pt; font-weight: bold;");
	} else {
		console.log("%c\nWARNING" +
			"%c\nThis is a feature of the browser provide to the developer only.\n" +
			"Copy and paste may be harm your computer.\nThanks!" +
			"\n\n%cVi Cuong",
			"color:#c8102e; background-color:white;font-weight:bold; font-size: 30pt;",
			"color:#c8102e; background-color:white;font-weight:500; font-size: 11pt;",
			"color:#000; background-color:white; font-size: 10pt; font-weight: bold;");
	}
}

function clickAndChangeContent(){
	$("#ul-list-themes li").on("click", function(){		
		if(!$(this).hasClass("active")){
			var id = $(this).data("id");
			var array = jQuery.grep(listOfThemes, function(e) {
				return (e.id == id);
			});
			if(array.length > 0){
				var first = array[0];
				$("#contain-theme").find("img").attr("src", masterLink + "/Page/" + first.folder + "/background.png");
				$("#contain-theme").find(".title").text(first.title);
				$("#contain-theme").find(".description").text(first.descrition);
				$("#contain-theme").find("a").attr("href", masterLink + "/Page/" + first.folder);
				$('#contain-theme').animateCss('flipInX');

			}
			$("#ul-list-themes li").removeClass("active");
			$(this).addClass("active");

		}
	});
}

$.fn.extend({
	animateCss: function (animationName) {
		var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		this.addClass('animated ' + animationName).one(animationEnd, function() {
			$(this).removeClass('animated ' + animationName);
		});
	}
});
function showScrollToTop(){
	var h = 200;
	if ($(window).scrollTop() >= h) {
		$('.scroll-to-top').fadeIn();
	} else {
		$('.scroll-to-top').fadeOut();
	}
}