var load = 0;
var burger = 0;
var walk = 0;

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

function cursor() {
    if(load == 0) {
        $(".story").css({
            cursor: 'default'
        });
    } else {
        $(".story").css({
            cursor: 'pointer'
        });
    }
}

function fadeOut() {
    $("#transition").css({
            display: 'block'
        })
        .animate({
            opacity: '1'
        }, 1000);
}

function fadeIn() {
    $("#transition").animate({
            opacity: '0'
        }, 1000)
    setTimeout(function() {
        $("#transition").css({
            display: 'none'
        });
    }, 1000);
}

function page1() {
    $("body").css({
        background: 'radial-gradient(#333333 0%, #333333 50%, #222222 100%)'
    });
    $("p:nth-of-type(1), p:nth-of-type(2), p:nth-of-type(3), p:nth-of-type(4), p:nth-of-type(5), #page1").css({
        display: 'block'
    });
    $("p:nth-of-type(1)").animate({
        opacity: '1'
    }, 2000);
    setTimeout(function() {
        $("p:nth-of-type(2)").animate({
            opacity: '1'
        }, 2000);
        setTimeout(function() {
            $("p:nth-of-type(3)").animate({
                opacity: '1'
            }, 2000);
            setTimeout(function() {
                $("p:nth-of-type(4)").animate({
                    opacity: '1'
                }, 2000);
                setTimeout(function() {
                    $("p:nth-of-type(5)").animate({
                        opacity: '1'
                    }, 2000);
                    setTimeout(function() {
                        load = 1;
                    }, 2000);
                }, 3000);
            }, 3000);
        }, 3000);
    }, 3000);
}

function action1() {
    if(load == 1) {
        $("#page1").attr('src', 'images/page1b.png');
    }
}

function reaction1() {
    $("#page1").attr('src', 'images/page1.png');
}

function page2() {
    if(load == 1) {
        load = 0;
        fadeOut();
        setTimeout(function() {
            $("p:nth-of-type(1), p:nth-of-type(2), p:nth-of-type(3), p:nth-of-type(4), p:nth-of-type(5), #page1").css({
                display: 'none'
            });
            $("p:nth-of-type(6), p:nth-of-type(7), p:nth-of-type(8), p:nth-of-type(9), #page2").css({
                display: 'block'
            });
            $("body").css({
                background: 'radial-gradient(#b7bec8 0%, #b7bec8 50%, #959ca6 100%)'
            });
            fadeIn();
            setTimeout(function() {
                $("p:nth-of-type(6)").animate({
                    opacity: '1'
                }, 2000);
                setTimeout(function() {
                    $("p:nth-of-type(7)").animate({
                        opacity: '1'
                    }, 2000);
                    setTimeout(function() {
                        $("p:nth-of-type(8)").animate({
                            opacity: '1'
                        }, 2000);
                        setTimeout(function() {
                            $("p:nth-of-type(9)").animate({
                                opacity: '1'
                            }, 2000);
                            setTimeout(function() {
                                load = 1;
                            }, 2000);
                        }, 3000);
                    }, 3000);
                }, 3000);
            }, 1000);
        }, 1000);
    }
}

function action2() {
    if(load == 1) {
        $("#page2").attr('src', 'images/page2b.png');
    }
}

function reaction2() {
    $("#page2").attr('src', 'images/page2.png');
}

function page3() {
    if(load == 1) {
        load = 0;
        fadeOut();
        setTimeout(function() {
            $("p:nth-of-type(6), p:nth-of-type(7), p:nth-of-type(8), p:nth-of-type(9), #page2").css({
                display: 'none'
            });
            $("p:nth-of-type(10), p:nth-of-type(11), p:nth-of-type(12), p:nth-of-type(13), #page3").css({
                display: 'block'
            });
            $("body").css({
                background: 'radial-gradient(white 0%, white 50%, #dddddd 100%)'
            });
            fadeIn();
            setTimeout(function() {
                $("p:nth-of-type(10)").animate({
                    opacity: '1'
                }, 2000);
                setTimeout(function() {
                    $("p:nth-of-type(11)").animate({
                        opacity: '1'
                    }, 2000);
                    setTimeout(function() {
                        $("p:nth-of-type(12)").animate({
                            opacity: '1'
                        }, 2000);
                        setTimeout(function() {
                            $("p:nth-of-type(13)").animate({
                                opacity: '1'
                            }, 2000);
                            setTimeout(function() {
                                load = 1;
                                burger = 1;
                            }, 2000);
                        }, 3000);
                    }, 3000);
                }, 3000);
            }, 1000);
        }, 1000);
    }
}

function action3() {
    if(burger == 1) {
        $("#page3").attr('src', 'images/page3b.png')
        burger = 2;
    } else if(burger == 2) {
        $("#page3").attr('src', 'images/page3c.png')
        burger = 3;
    } else if(burger == 3) {
        $("#page3").attr('src', 'images/page3d.png')
        burger = 0;
    } else {
        page4();
    }
}

function page4() {
    if(load == 1) {
        load = 0;
        fadeOut();
        setTimeout(function() {
            $("p:nth-of-type(10), p:nth-of-type(11), p:nth-of-type(12), p:nth-of-type(13), #page3").css({
                display: 'none'
            });
            $("p:nth-of-type(14), p:nth-of-type(15), #page4").css({
                display: 'block'
            });
            $("body").css({
                background: 'radial-gradient(#333333 0%, #333333 50%, #222222 100%)'
            });
            fadeIn();
            setTimeout(function() {
                $("p:nth-of-type(14)").animate({
                    opacity: '1'
                }, 2000);
                setTimeout(function() {
                        $("p:nth-of-type(15)").animate({
                        opacity: '1'
                    }, 2000);
                    setTimeout(function() {
                        load = 1;
                    }, 2000);
                }, 3000);
            }, 1000);
        }, 1000);
    }
}

function action4() {
    if(load == 1) {
        $("#page4").attr('src', 'images/page4b.png');
    }
}

function reaction4() {
    $("#page4").attr('src', 'images/page4.png');
}

function title() {
    if(load == 1) {
        fadeOut();
        setTimeout(function() {
            $("p:nth-of-type(14), p:nth-of-type(15), #page4").css({
                display: 'none'
            });
            $("h1").css({
                display: 'block'
            });
            $("body").css({
                background: 'radial-gradient(white 0%, white 50%, #dddddd 100%)'
            });
            fadeIn();
            setTimeout(function() {
                $("h1").animate({
                    opacity: '1'
                }, 2000);
                setTimeout(function() {
                    page5()
                }, 5000);
            }, 1000);
        }, 1000);
    }
}

function page5() {
    if(load == 1) {
        load = 0;
        fadeOut();
        setTimeout(function() {
            $("h1").css({
                display: 'none'
            });
            $("p:nth-of-type(16), p:nth-of-type(17), p:nth-of-type(18), p:nth-of-type(19), #page5").css({
                display: 'block'
            });
            $("body").css({
                background: 'radial-gradient(#c8beb7 0%, #c8beb7 50%, #a69c95 100%)'
            });
            fadeIn();
            setTimeout(function() {
                $("p:nth-of-type(16)").animate({
                    opacity: '1'
                }, 2000);
                setTimeout(function() {
                    $("p:nth-of-type(17)").animate({
                        opacity: '1'
                    }, 2000);
                    setTimeout(function() {
                        $("p:nth-of-type(18)").animate({
                            opacity: '1'
                        }, 2000);
                        setTimeout(function() {
                            $("p:nth-of-type(19)").animate({
                                opacity: '1'
                            }, 2000);
                            setTimeout(function() {
                                load = 1;
                            }, 2000);
                        }, 3000);
                    }, 3000);
                }, 3000);
            }, 1000);
        }, 1000);
    }
}

function page6() {
    if(load == 1) {
        load = 0;
        fadeOut();
        setTimeout(function() {
            $("p:nth-of-type(16), p:nth-of-type(17), p:nth-of-type(18), p:nth-of-type(19), #page5").css({
                display: 'none'
            });
            $("p:nth-of-type(20), p:nth-of-type(21), p:nth-of-type(22), p:nth-of-type(23), p:nth-of-type(24), p:nth-of-type(25), #page6").css({
                display: 'block'
            });
            $("body").css({
                background: 'radial-gradient(#b7bec8 0%, #b7bec8 50%, #959ca6 100%)'
            });
            fadeIn();
            setTimeout(function() {
                $("p:nth-of-type(20)").animate({
                    opacity: '1'
                }, 2000);
                setTimeout(function() {
                    $("p:nth-of-type(21)").animate({
                        opacity: '1'
                    }, 2000);
                    setTimeout(function() {
                        $("p:nth-of-type(22)").animate({
                            opacity: '1'
                        }, 2000);
                        setTimeout(function() {
                            $("p:nth-of-type(23)").animate({
                                opacity: '1'
                            }, 2000);
                            setTimeout(function() {
                                $("p:nth-of-type(24)").animate({
                                    opacity: '1'
                                }, 2000);
                                setTimeout(function() {
                                    $("p:nth-of-type(25)").animate({
                                        opacity: '1'
                                    }, 2000);
                                    setTimeout(function() {
                                        load = 1;
                                        walk = 1;
                                    }, 2000);
                                }, 3000);
                            }, 3000);
                        }, 3000);
                    }, 3000);
                }, 3000);
            }, 1000);
        }, 1000);
    }
}

function action6() {
    if(walk == 1) {
        $("#page6").attr('src', 'images/page6b.png')
        walk = 2
    } else if(walk == 2) {
        $("#page6").attr('src', 'images/page6c.png')
        walk = 0
    } else {
        page7();
    }
}

function page7() {
    if(load == 1) {
        load = 0
        fadeOut();
        setTimeout(function() {
            $("p:nth-of-type(20), p:nth-of-type(21), p:nth-of-type(22), p:nth-of-type(23), p:nth-of-type(24), p:nth-of-type(25), #page6").css({
                display: 'none'
            });
            $("p:nth-of-type(26), p:nth-of-type(27), p:nth-of-type(28), p:nth-of-type(29), p:nth-of-type(30), #page7").css({
                display: 'block'
            });
            $("body").css({
                background: 'radial-gradient(#806600 0%, #806600 50%, #604400 100%)'
            });
            fadeIn();
            setTimeout(function() {
                $("p:nth-of-type(26)").animate({
                    opacity: '1'
                }, 2000);
                setTimeout(function() {
                    $("p:nth-of-type(27)").animate({
                        opacity: '1'
                    }, 2000);
                    setTimeout(function() {
                        $("p:nth-of-type(28)").animate({
                            opacity: '1'
                        }, 2000);
                        setTimeout(function() {
                            $("p:nth-of-type(29)").animate({
                                opacity: '1'
                            }, 2000);
                            setTimeout(function() {
                                $("p:nth-of-type(30)").animate({
                                    opacity: '1'
                                }, 2000);
                                setTimeout(function() {
                                    load = 1;
                                }, 2000);
                            }, 3000);
                        }, 3000);
                    }, 3000);
                }, 3000);
            }, 1000);
        }, 1000);
    }
}

$("#help").hover(help, unHelp);
$(document).ready(page1);
$(".story").mouseenter(cursor);
$("#page1").hover(action1, reaction1);
$("#page1").click(page2);
$("#page2").hover(action2, reaction2);
$("#page2").click(page3);
$("#page3").click(action3);
$("#page4").hover(action4, reaction4);
$("#page4").click(title);
$("#page5").click(page6);
$("#page6").click(action6)