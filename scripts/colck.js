/*全局变量*/
var CLOCKDATA =[[[0,0,1,1,1,0,0],[0,1,1,0,1,1,0],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,0,1,1,0],[0,0,1,1,1,0,0]],[[0,0,0,1,1,0,0],[0,1,1,1,1,0,0],[0,0,0,1,1,0,0],[0,0,0,1,1,0,0],[0,0,0,1,1,0,0],[0,0,0,1,1,0,0],[0,0,0,1,1,0,0],[0,0,0,1,1,0,0],[0,0,0,1,1,0,0],[1,1,1,1,1,1,1]],[[0,1,1,1,1,1,0],[1,1,0,0,0,1,1],[0,0,0,0,0,1,1],[0,0,0,0,1,1,0],[0,0,0,1,1,0,0],[0,0,1,1,0,0,0],[0,1,1,0,0,0,0],[1,1,0,0,0,0,0],[1,1,0,0,0,1,1],[1,1,1,1,1,1,1]],[[1,1,1,1,1,1,1],[0,0,0,0,0,1,1],[0,0,0,0,1,1,0],[0,0,0,1,1,0,0],[0,0,1,1,1,0,0],[0,0,0,0,1,1,0],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,1,1,0]],[[0,0,0,0,1,1,0],[0,0,0,1,1,1,0],[0,0,1,1,1,1,0],[0,1,1,0,1,1,0],[1,1,0,0,1,1,0],[1,1,1,1,1,1,1],[0,0,0,0,1,1,0],[0,0,0,0,1,1,0],[0,0,0,0,1,1,0],[0,0,0,1,1,1,1]],[[1,1,1,1,1,1,1],[1,1,0,0,0,0,0],[1,1,0,0,0,0,0],[1,1,1,1,1,1,0],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,1,1,0]],[[0,0,0,0,1,1,0],[0,0,1,1,0,0,0],[0,1,1,0,0,0,0],[1,1,0,0,0,0,0],[1,1,0,1,1,1,0],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,1,1,0]],[[1,1,1,1,1,1,1],[1,1,0,0,0,1,1],[0,0,0,0,1,1,0],[0,0,0,0,1,1,0],[0,0,0,1,1,0,0],[0,0,0,1,1,0,0],[0,0,1,1,0,0,0],[0,0,1,1,0,0,0],[0,0,1,1,0,0,0],[0,0,1,1,0,0,0]],[[0,1,1,1,1,1,0],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,1,1,0],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,1,1,0]],[[0,1,1,1,1,1,0],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,0,1,1],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1],[0,0,0,0,1,1,0],[0,0,0,1,1,0,0],[0,1,1,0,0,0,0]],[[0,0,0,0],[0,0,0,0],[0,1,1,0],[0,1,1,0],[0,0,0,0],[0,0,0,0],[0,1,1,0],[0,1,1,0],[0,0,0,0],[0,0,0,0]]];

var winWidth  = 1280;
var winHeight = 760;
document.getElementById("cv").style.width = winWidth+"px";

var curTimeSec = 0;
var balls      = [];
var ballColor  = ["#009EFC","#00B8FB","#0CD3FA","#F94BA2","#568F62","#B29947","#EF731D","#E1594B","#747762"];
var radius     = 8;

var numStyle = {
        top:100,
        left:180,
        moveRight:2*(radius+1)
    };
/*---------------*/



/*生成随机十六进制颜色值，！网上扒来的！*/
function getColor(){  
    var colorElements = "0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f";  
    var colorArray = colorElements.split(",");  
    var color ="#";  
    for(var i =0;i<6;i++){  
        color+=colorArray[Math.floor(Math.random()*16)];  
    }  
    return color;  
}  


/*小球类构造函数，有默认参数，需配合updateBalls()函数才能产生动画*/
function ball(x, y, color, vx, vy, g) {
    this.x = x || 100;
    this.y = y || 100;
    this.color = color || "#8A1515";
    /*Math.pow(-1, Math.ceil(Math.random()*11))随机生成正负值1*/
    this.vx = vx || Math.pow(-1, Math.ceil(Math.random()*11)) * (Math.random()*(10-0.618)+0.618);
    this.vy = vy || Math.pow(-1, Math.ceil(Math.random()*11)) * (Math.random()*(20-0.618)+0.618); 
    this.g = g || Math.random()*(0.75-0.382)+0.382;
}


/*获取当前系统时间的秒数表示值*/
function getcurTimeSec() {
    var curTime = new Date();
    var ret = curTime.getHours() * 3600 + curTime.getMinutes() * 60 + curTime.getSeconds();

    return ret;
}



/*主程序函数，循环调用绘制函数和动画数据更新函数*/
function draw() {
	var canvas = document.getElementById("canvas");
	canvas.width = winWidth;
	canvas.height = winHeight;

	var context = canvas.getContext("2d");
    
    //获取系统时间
    curTimeSec = getcurTimeSec();

    setInterval(
            function() {
               
                drawClock(context);
                update();
                updateBalls();
            },
            16.67
        );

}

/* 
 * 控制绘制时钟和小球的函数，
 * 参数传入绘图环境即可，
 * 但全局变量中需要有储存时钟点阵变量的三维数组和储存小球对象的数组
 */
function drawClock(ct) {

    ct.clearRect(0,0,winWidth,winHeight); //清屏

    var h = parseInt(curTimeSec / 3600);
    var m = parseInt((curTimeSec - h *3600) / 60 );
    var s = curTimeSec % 60;


    /*绘制时钟*/
    renderDigit(numStyle.left, numStyle.top, radius, parseInt(h/10), ct);
    renderDigit(numStyle.left + numStyle.moveRight*7, numStyle.top, radius, parseInt(h%10), ct);
    
    renderDigit(numStyle.left + numStyle.moveRight*14, numStyle.top, radius, 10, ct);
    
    renderDigit(numStyle.left + numStyle.moveRight*18, numStyle.top, radius, parseInt(m/10), ct);
    renderDigit(numStyle.left + numStyle.moveRight*25, numStyle.top, radius, parseInt(m%10), ct);
    
    renderDigit(numStyle.left + numStyle.moveRight*32, numStyle.top, radius, 10, ct);
    
    renderDigit(numStyle.left + numStyle.moveRight*36, numStyle.top, radius, parseInt(s/10), ct);
    renderDigit(numStyle.left + numStyle.moveRight*43, numStyle.top, radius, parseInt(s%10), ct);
    /*----*/

    /*根据小球对象的xy轴数据绘制小球*/
    for(var i = 0; i < balls.length; i++) {
        ct.fillStyle = balls[i].color;

        ct.beginPath();
        ct.arc(balls[i].x, balls[i].y, radius, 0, 2*3.1415);
        ct.closePath();

        ct.fill();
    }


}


/*
 * 数据更新函数，每次调用检查时间是否已经改变，
 * 更新curTimeSec变量
 * 在相应的数字改变位置生成小球
 */
function update() {

    var nextTimeSec = getcurTimeSec();

    var nextH = parseInt(nextTimeSec / 3600);
    var nextM = parseInt((nextTimeSec - nextH *3600) / 60 );
    var nextS = nextTimeSec % 60;

    var curH = parseInt(curTimeSec / 3600);
    var curM = parseInt((curTimeSec - curH *3600) / 60 );
    var curS = curTimeSec % 60;

    if(nextS != curS){

        curTimeSec = nextTimeSec;
        if(parseInt(curH/10) != parseInt(nextH/10)) {
            addBalls(numStyle.left, numStyle.top, parseInt(nextS/10));
        }
        if(parseInt(curH%10) != parseInt(nextH%10)) {
            addBalls(numStyle.left + numStyle.moveRight*7, numStyle.top, parseInt(nextS%10));
        }
        if(parseInt(curM/10) != parseInt(nextM/10)) {
            addBalls(numStyle.left + numStyle.moveRight*18, numStyle.top, parseInt(nextS/10));
        }
        if(parseInt(curM%10) != parseInt(nextM%10)) {
            addBalls(numStyle.left + numStyle.moveRight*25, numStyle.top, parseInt(nextS%10));
        }
        if(parseInt(curS/10) != parseInt(nextS/10)) {
            addBalls(numStyle.left + numStyle.moveRight*36, numStyle.top, parseInt(nextS/10));
        }
        if(parseInt(nextS%10) != parseInt(curS%10)) {
            addBalls(numStyle.left + numStyle.moveRight*43, numStyle.top, parseInt(nextS%10));
        }

    }
   
        while(balls.length > 401) {
            balls.shift();
        }
    
        //console.log(balls.length);
    
    
   
 
}

//小球下落动画位置更新函数
function updateBalls() {
    for(var i = 0; i < balls.length; i++) {
        balls[i].x  += balls[i].vx;
        balls[i].y  += balls[i].vy;
        balls[i].vy += balls[i].g;
    

        if(balls[i].y >= winHeight - radius) {
            balls[i].y = winHeight - radius;
            balls[i].vy = -balls[i].vy * balls[i].g;
        }

        if(balls[i].y <=  radius) {
            balls[i].y = radius;
            balls[i].vy = -balls[i].vy*0.9;
            
        }
    }
}

//生成
function addBalls(x, y, num) {
  
    for(var i = 0; i < CLOCKDATA[num].length; i++) {
            for(var j = 0; j < CLOCKDATA[num][i].length; j++) {

                if(CLOCKDATA[num][i][j] == 1) {
                    var aBall = new ball(
                                        x+j*(radius+0.2)*2, 
                                        y+i*(radius+1)*2,
                                        getColor()//ballColor[Math.floor(Math.random()*ballColor.length)]
                                        );

                    balls.push(aBall);
                }

            }
        }

}

function renderDigit(x, y, radius, num, ct) {

    ct.fillStyle = "#2E8CA8";

    for(var i = 0; i < CLOCKDATA[num].length; i++) {
        for(var j = 0; j < CLOCKDATA[num][i].length; j++) {

            if(CLOCKDATA[num][i][j] == 1) {
                ct.beginPath();
                ct.arc(x+j*(radius+0.2)*2, y+i*(radius+1)*2, radius, 0, 2*Math.PI);
                ct.closePath();

                ct.fill();
            }
        }
    }

}



function addLoadEvent(func){  
  var oldonLoad = window.onload;  
  if(typeof window.onload!='function'){  
    window.onload = func;  
  } else {window.onload = function(){  oldonload(); func();}}

}


addLoadEvent(draw);