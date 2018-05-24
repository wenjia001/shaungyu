$(function () {
    function box_WH() {
        //获取屏幕宽高
        var Ww = $(window).width();
        var Wh = $(window).height();
        //使html和body的font-size等比例变化
        $('html').css("font-size", Ww / 640 * 100 + 'px');


        li_ww = $(".Infographic_img li").width();
        li_marL = parseInt($(".Infographic_img li").css("marginLeft"));
        juli_ = li_ww + li_marL;

    }

    //进入页面执行
    box_WH();
    //页面尺寸变换执行
    $(window).resize(box_WH);


   //表单操作
    $(".into").focus(function(){
        var curValue=$(this).val();
        if(curValue==this.defaultValue){
            $(this).val("");
        }
    });
    $(".into").blur(function(){
        var curValue=$(".into").val();
        if($.trim(curValue)==""){
            $(this).val(this.defaultValue);
        }
    });
   //  表单操作end

    // 下拉列表
    $(".nav-two").hide();
    $(".select").hover(function() {
        $(".nav-two").toggle();
    });
    $(".nav-two").hover(function() {
        $(".nav-two").toggle();
    });
    // 下拉列表end
    // pc轮播
    $("#carousel_3").FtCarousel({
        index: 0,
        auto: true,
        time: 3000,
        indicators: false,
        buttons: true
    });
    // pc轮播end

    // banner划入划出
    $(".right-con").hover(function(){
        $(this).find(".right-text").css("top","0");
    },function(){
        $(this).find(".right-text").css("top","168px");
    })
    // banner划入划出end

    var browser=navigator.appName;
    //  手机端点击导航栏-start
    $('.header_img').on('click', function () {
        var topH = $(".top_phone").outerHeight();
        $('.nav ul').css('top', topH);
        if ($('.nav').hasClass('nav_show')) {
            $('.nav ul').animate({right: "-35%"}, function () {
                $('.nav').removeClass('nav_show');
            });
        } else {
            $('.nav ul').animate({right: 0}, function () {
                $('.nav').addClass('nav_show');
            });
            $('.mask').css('display', 'block');
            if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE8.0")
            {
                $('body').addClass('ovfhidden');
            }else {
                $('body,html').addClass('ovfhidden');
            }
        }
    })
    $('.mask').on('click', function () {
        $('.nav ul').animate({right: "-35%"}, function () {
            $('.nav').removeClass('nav_show');
        });
        $('.mask').css('display', 'none');
        $('body,html').removeClass('ovfhidden');
    })
    //	手机端点击导航栏-end

    // 手机轮播
    new Swiper('.m-slider', {
        loop:true,
        prevButton:'.swiper-button-prev',
        nextButton:'.swiper-button-next',
        autoplay : 3000,
        autoplayDisableOnInteraction : false
    });
    // 手机轮播 end

    // moblie 视频
    new Swiper('.m-vedio', {
        slidesPerView :'auto',
        freeMode: true
    });
    // moblie 视频end
});

