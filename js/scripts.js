$(document).ready(function(){
var curScreenVal;
var keyID;
	
	$(".operator, .number").click(function(){
			curScreenVal = $(".screen").val();
			console.dir(this);
			if($(this).hasClass("equal")){
				doIt();
			}
			else if($(this).hasClass("clear")){
				$(".screen").val("");
			}
			else	{
			$(".screen").val(curScreenVal + this.value);
			}
		});

	document.onkeyup = keyCheck;

	function keyCheck(){
		keyID = event.keyCode;
		console.log(keyID);
		curScreenVal = $(".screen").val();
		switch(keyID){
			case 49:
				$(".screen").val(curScreenVal + 1);
				break;
			case 50:
				$(".screen").val(curScreenVal + 2);
				break;
			case 51:
				$(".screen").val(curScreenVal + 3);
				break;
			case 52:
				$(".screen").val(curScreenVal + 4);
				break;
			case 53:
				$(".screen").val(curScreenVal + 5);
				break;
			case 54:
				$(".screen").val(curScreenVal + 6);
				break;
			case 55:
				$(".screen").val(curScreenVal + 7);
				break;
			case 56:
				$(".screen").val(curScreenVal + 8);
				break;
			case 57:
				$(".screen").val(curScreenVal + 9);
				break;
			case 48:
				$(".screen").val(curScreenVal + 0);
				break;
			case 106:
				$(".screen").val(curScreenVal + "*");
				break;
			case 191:
				$(".screen").val(curScreenVal + "/");
				break;
			case 189:
				$(".screen").val(curScreenVal + "-");
				break;
			case 107:
				$(".screen").val(curScreenVal + "+");
				break;
			case 187:
				doIt();	
				break;
			case 13:
				doIt();
				break;
			case 8:
				$(".screen").val(curScreenVal.slice(0, -1));
				break;
			case 67:
				$(".screen").val("");
				break;		
			default:
			alert("huh?");
		}
	}
})

function doIt(){
	console.log("doing");
	try{
		var total = eval($(".screen").val());
	} catch (e){
		console.log(e);
		if(e instanceof SyntaxError){
			alert("error");
			return;
		}
		else if (e instanceof ReferenceError){
			alert("error, 2 operators");
			return;
		}
	}
	$(".screen").val(total);
	if(total === 42){
		$("#meaning").addClass("move");
	}
}












