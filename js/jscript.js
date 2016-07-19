/*$(document).ready(function()	{
	$('#gang').click(function()	{
		
		$('.team').css({"display": "none"}, "slow");
	});
	$('#homeW').click(function()	{
		$('.team').css({"display": "none"}, "slow");
		$('.main').css({"display": "none"}, "slow");
	});
	$('#group').click(function()	{
		$('.team').css({"display": "block"}, "fast");
});
});*/

$(document).ready(function() {
	var stime = 0;
	$("a.anchorLink").click(function () {

		elementClick = $(this).attr("href");

		destination = $(elementClick).offset().top;

		$("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination}, 1100 );

		clearTimeout(stime);
		stime = setTimeout(function(){
			window.location.hash = elementClick;
		}, 1000);
		
		return false;
	})
});
