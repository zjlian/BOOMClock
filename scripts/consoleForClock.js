/*时钟特效样式控制组件生成组件*/
var ib = document.getElementById("button");
var ic = document.getElementById("clear");

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

	refreshRate = parseInt(irrrr.value);
	ballsCache = parseInt(irbcr.value)*10;

	V.xMin = parseInt(irvxmr.value);
	V.xMax = parseInt(irvxxr.value);

	V.yMin = parseInt(irvymr.value);
	V.yMax = parseInt(irvyxr.value);

	//console.log("console:"+V.xMin+" "+V.xMax);
 	clearInterval(MAKE);
	draw();
}

ic.onclick = function() {
	balls      = [];
	//clearInterval(MAKE);
	//draw();
}