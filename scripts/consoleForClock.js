/*时钟特效样式控制组件生成组件*/
var ib = document.getElementById("button");

var irrrr = document.getElementById("refreshRateRange");
var irbcr = document.getElementById("ballsCacheRange");
irrrr.defaultValue = refreshRate;
irbcr.defaultValue = ballsCache;

var irvxmr = document.getElementById("VXMinRange");
var irvxxr = document.getElementById("VXMaxRange");
irvxmr.defaultValue = V.xMin;
irvxxr.defaultValue = V.xMax;

var irvymr = document.getElementById("VYMinRange");
var irvyxr = document.getElementById("VYMaxRange");
irvymr.defaultValue = V.yMin;
irvyxr.defaultValue = V.yMax;

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
