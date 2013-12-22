
var KEY ={
	UP:38,	
	DOWN:40,
	W:87,
	S:83
}
var bingbang ={
	scoreA:0,
	scoreB:0
	};
bingbang.ball={
	speed:5,
	x:375,
	y:175,
	dircetionX:1,
	dircetionY:1
	};
bingbang.pressedKeys={};
$(document).ready(function(e) {
	
    $(document).keydown(function(e){
		bingbang.pressedKeys[e.which] = true;
	});
	$(document).keyup(function(e){
		bingbang.pressedKeys[e.which] = false;
	});
});
function star(){
	if(!bingbang.timer){
	bingbang.timer = setInterval(gameloop,30);
		}else{
			return false;
			}
	}
function gameStop(){
	bingbang.timer = clearInterval(bingbang.timer);
	}
function gameloop(){
	moveBall();
	movePlayer();
};
function movePlayer(){
	if(bingbang.pressedKeys[KEY.UP]){
		var top =parseInt($("#playerB").css("top"));
		if(top>=0){
		$("#playerB").css("top",top-9);
		}else
		{$("#playerB").css("top",top);
		}
	}
	if(bingbang.pressedKeys[KEY.DOWN]){
		var top =parseInt($("#playerB").css("top"));
		if(top<=310){
		$("#playerB").css("top",top+9);
		}else
		{$("#playerB").css("top",top);
		}
	}
	if(bingbang.pressedKeys[KEY.W]){
		var top =parseInt($("#playerA").css("top"));
		if(top>=0){
		$("#playerA").css("top",top-9);
		}else
		{$("#playerA").css("top",top);
		}
	}
	if(bingbang.pressedKeys[KEY.S]){
		var top =parseInt($("#playerA").css("top"));
		if(top<=305){
		$("#playerA").css("top",top+9);
		}else
		{$("#playerA").css("top",top);
		}
	}
};
function moveBall(){
	var bgWidth = parseInt($("#bg").css("width"));
	var bgHeight =parseInt($("#bg").css("height"));
	var ball =bingbang.ball;
	var ballWidth = parseInt($("#ball").css("width"));
	var ballHeight =parseInt($("#ball").css("height"));
	var playerAL =parseInt($("#playerA").css("left"))+parseInt($("#playerA").css("width"));
	var playerAB =parseInt($("#playerA").css("top"))+parseInt($("#playerA").css("height"))-parseInt($("#ball").css("height"));
	var playerAT =parseInt($("#playerA").css("top"));
	var playerBR =parseInt($("#playerB").css("left"))-parseInt($("#ball").css("width"));
	var playerBB =parseInt($("#playerB").css("top"))+parseInt($("#playerB").css("height"))-parseInt($("#ball").css("height"));
	var playerBT =parseInt($("#playerB").css("top"));
	var playerAH =parseInt($("#playerA").css("left"))+parseInt($("#playerA").css("width"))-20;
	var playerBH =parseInt($("#playerB").css("left"))-parseInt($("#ball").css("width"))+20;
	//检测左拍

	if(ball.x+ball.speed*ball.dircetionX<playerAL && ball.x+ball.speed*ball.dircetionX>=playerAH)
	{
		if(ball.y+ball.speed*ball.dircetionY<=playerAB && ball.y+ball.speed*ball.dircetionY>=playerAT)
		{
			ball.dircetionX=1;
			ball.speed=ball.speed+1;
		}
	}
	//检测右拍
	if(ball.x+ball.speed*ball.dircetionX>playerBR && ball.x+ball.speed*ball.dircetionX<playerBH)
	{
		if(ball.y+ball.speed*ball.dircetionY<=playerBB && ball.y+ball.speed*ball.dircetionY>=playerBT)
		{
			ball.dircetionX= -1;
			ball.speed=ball.speed+0.3;
		}
	}
	
	//检测右边
	if(ball.x+ball.speed*ball.dircetionX>bgWidth-ballWidth){
	 	bingbang.scoreA=bingbang.scoreA+1;
		ball.x=400;
		ball.y=200;
		ball.speed=5;
		ball.dircetionX=-1;
	}
	//检测左边
	if(ball.x+ball.speed*ball.dircetionX<=0){
		bingbang.scoreB=bingbang.scoreB+1;
		ball.x=400;
		ball.y=200;
		ball.speed=5;
		ball.dircetionX=1;
	}
	//检测定边
	if(ball.y+ball.speed*ball.dircetionY<=0){
		ball.dircetionY=1;
	}
	if(ball.y+ball.speed*ball.dircetionY>=bgHeight-ballHeight){
		ball.dircetionY=-1;
		}


	ball.x=ball.x+ball.speed*ball.dircetionX
	ball.y=ball.y+ball.speed*ball.dircetionY
	$("#ball").css({
		"top":ball.y,
		"left":ball.x
		});
	$("#scoreA").html("左边那人得了"+bingbang.scoreA+"分");
	$("#scoreB").html("右边那人得了"+bingbang.scoreB+"分");
	}
