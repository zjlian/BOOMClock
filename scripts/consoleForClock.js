/*时钟特效样式控制组件生成组件*/
var ib = document.getElementById("button");

var irrrr = document.getElementById("refreshRateRange");
var irbcr = document.getElementById("ballsCacheRange");

var irvxmr = document.getElementById("VXMinRange");
var irvxxr = document.getElementById("VXMaxRange");

var irvymr = document.getElementById("VYMinRange");
var irvyxr = document.getElementById("VYMaxRange");

ib.onclick = function() {

	refreshRate = irrrr.value;
	ballsCache = irbcr.value*10;

	V.xMin = irvxmr.value;
	V.xMax = irvxxr.value;

	V.yMin = irvymr.value;
	V.yMax = irvyxr.value;

 	clearInterval(MAKE);
	draw();
}
