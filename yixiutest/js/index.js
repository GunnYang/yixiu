var img = document.getElementById("img");
var pagetwo = document.getElementById("pagetwo");
var timer = null;
var targetx = 0;
var targety = 0;
var leaderx = 0;
var leadery = 0;
document.onmousemove = function(event) {
	event = event || window.event;
	var pagey = event.pageY || scroll().top + event.clientY;
	var pagex = event.pageX || scroll().left + event.clientX;
	targety = pagey - img.offsetHeight / 2;
	targetx = pagex - img.offsetWidth / 2;
	clearInterval(timer);
	timer = setInterval(function() {
		leaderx = img.offsetLeft;
		var stepx = (targetx - leaderx) / 10;
		stepx = stepx > 0 ? Math.ceil(stepx) : Math.floor(stepx);
		leaderx = leaderx + stepx;
		img.style.left = leaderx + "px";

		leadery = img.offsetTop;
		var stepy = (targety - leadery) / 10;
		stepy = stepy > 0 ? Math.ceil(stepy) : Math.floor(stepy);
		leadery = leadery + stepy;
		img.style.top = leadery + "px";
		if(Math.abs(targety - img.offsetTop) <= Math.abs(stepy) && Math.abs(targetx - img.offsetLeft) <= Math.abs(stepx)) {
			img.style.top = targety + "px";
			img.style.left = targetx + "px";
			clearInterval(timer);
		}
	}, 10);
}