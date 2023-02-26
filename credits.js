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

function pageFold() {
	$("#fold").stop().animate({
		width: '90px',
		height: '90px',
		borderBottomLeftRadius: '100px'
	});
	$("#cover").stop().animate({
		width: '86px',
		height: '86px'
	});
	$("#shadow").stop().animate({
		left: '83px',
		width: '10px',
		height: '79px'
	});
}

function unFold() {
	$("#fold").stop().animate({
		width: '25px',
		height: '25px',
		borderBottomLeftRadius: '25px'
	});
	$("#cover").stop().animate({
		width: '21px',
		height: '21px'
	});
	$("#shadow").stop().animate({
		left: '19px',
		width: '5px',
		height: '20px'
	});
}

function resizeNews() {
	if ($(this).width() < 1250) {
		$("#paper").css({
			width: '600px'
		});
        $("section:nth-of-type(1)").css({
            width: '95%',
            height: '95%',
            top: '2.5%',
            left: '2.5%',
            display: 'flex'
        });
        $("section:nth-of-type(2)").css({
            width: '95%',
            height: '95%',
            top: '2.5%',
            right: '2.5%',
            display: 'none'
        });
        $("#next").css({
            display: 'block'
        });
	} else {
		$("#paper").css({
			width: '1200px'
		});
        $("section:nth-of-type(1)").css({
            width: '47.5%',
            height: '95%',
            top: '2.5%',
            left: '1.25%',
            display: 'flex'
        });
        $("section:nth-of-type(2)").css({
            width: '47.5%',
            height: '95%',
            top: '2.5%',
            right: '1.25%',
            display: 'flex'
        });
        $("#next").css({
            display: 'none'
        });
	}
}

function credit2() {
    $("section:nth-of-type(1), #fold, #cover, #shadow, #next").css({
        display: 'none'
    });
    $("section:nth-of-type(2)").css({
        display: 'flex'
    });
    $("#previous").css({
        display: 'block'
    });
}

function credit1() {
    $("section:nth-of-type(1)").css({
        display: 'flex'
    });
    $("section:nth-of-type(2), #previous").css({
        display: 'none'
    });
    $("#fold, #cover, #shadow, #next").css({
        display: 'block'
    });
}

$("#help").hover(help, unHelp);
$("a, #fold").hover(pageFold, unFold);
$(document).ready(resizeNews);
$(window).resize(resizeNews);
$("#next").click(credit2);
$("#previous").click(credit1);