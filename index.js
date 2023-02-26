function pageFold() {
	$("#fold").stop().animate({
		width: '90px',
		height: '90px',
		borderBottomRightRadius: '100px'
	});
	$("#cover").stop().animate({
		width: '86px',
		height: '86px'
	});
	$("#shadow").stop().animate({
		right: '83px',
		width: '10px',
		height: '79px'
	});
}

function unFold() {
	$("#fold").stop().animate({
		width: '25px',
		height: '25px',
		borderBottomRightRadius: '25px'
	});
	$("#cover").stop().animate({
		width: '21px',
		height: '21px'
	});
	$("#shadow").stop().animate({
		right: '19px',
		width: '5px',
		height: '20px'
	});
}

function help() {
    $("#tooltip").stop().animate({
        opacity: '1'
    });
}

function unHelp() {
    $("#tooltip").stop().animate({
        opacity: '0'
    });
}

function findPos(e) {
	var xpos = (e.pageX);
	var ypos = (e.pageY);

	$("footer h3").html("X: " + xpos + ". Y: " + ypos);
}

$("a").hover(pageFold, unFold);
$("#help").hover(help, unHelp);