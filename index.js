$(document).ready(function ($) {
	$(".area").hover(function () {
			$(this).find(".qq").show(100);
		},
		function () {
			$(this).find(".qq").hide(100);
		});		
});

$('#tabs-1 .imgbox .box').hover(function(){
	$(this).children('.text').css('display','none')
	$(this).children('.attention').css('display','block')
	$(this).siblings().children('.text').css('display','flex')
	$(this).siblings().children('.attention').css('display','none')
})