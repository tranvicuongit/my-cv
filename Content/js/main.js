$(document).ready(function(){
	var listOfThemes = [];

	$.getJSON( "https://tranvicuongit.github.io/my-cv/Content/json/themes.json", function(data) {
		listOfThemes = data;
		$.each(listOfThemes, function(index, ele){
			var li = "<li><a data-id='" + ele.id + "'>" + ele.title + "</a><span>"+ ele.shortdesc +"</span></li>";
			$("#ul-list-themes").append(li);
		});

		if(listOfThemes.length > 0){
			// Active first theme
			var first = listOfThemes[0];
			$("#contain-theme").find("img").attr("src", "/Page/" + first.folder + "/background.png");
			$("#contain-theme").find(".title").text(first.title);
			$("#contain-theme").find(".description").text(first.descrition);
			$("#contain-theme").find("a").attr("href", "/Page/" + first.folder);
		}
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
			"\n\n%cEP Pressed Juice",
			"color:#c8102e; background-color:white;font-weight:bold; font-size: 30pt;",
			"color:#c8102e; background-color:white;font-weight:500; font-size: 11pt;",
			"color:#000; background-color:white; font-size: 10pt; font-weight: bold;");
	}
}