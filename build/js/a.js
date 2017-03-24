$(document).ready(function($) {
    // 选项卡 鼠标点击
    $(".TAB_CLICK li").click(function() {
        var tab = $(this).parent(".TAB_CLICK");
        var con = tab.attr("id");
        var on = tab.find("li").index(this);
        $(this).addClass('on').siblings(tab.find("li")).removeClass('on');
        $(con).eq(on).show().siblings(con).hide();
    });

    // 选项卡 鼠标点击
    $(".TAB_slick li").click(function() {
        var tab = $(this).parent(".TAB_slick");
        var con = tab.attr("id");
        var on = tab.find("li").index(this);
        $(this).addClass('on').siblings(tab.find("li")).removeClass('on');
        $(con).eq(on).addClass('on').siblings(con).removeClass('on');
    });

    // 手机导航
    $('.menuBtn').append('<b></b><b></b><b></b>');
    $('.menuBtn').click(function(event) {
        $(this).toggleClass('open');
        var _winw = $(window).width();
        var _winh = $(window).height();
        if($(this).hasClass('open')) {
            $('body').addClass('open');
            if(_winw <= 959) {
                $('.phone-nav').stop().slideDown();
            }
        } else {
            $('body').removeClass('open');
            if(_winw <= 959) {
                $('.phone-nav').stop().slideUp();
            }
        };
    });

    //底部
    $('.ft-link p').click(function() {
        $('.ft-link ul').stop().slideToggle();
    });

});