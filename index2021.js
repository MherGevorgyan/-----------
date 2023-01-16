// JavaScript Document

$(function () {

	$(".i-t-r .hr_a").hover(function () {

		$(this).stop(true, false).addClass('act').siblings().stop(true, false).removeClass('act');

		$(this).find('.hr_abt').stop(true, false).slideDown();

	}, function () {

		$(this).stop(true, false).removeClass('act');

		$(this).find('.hr_abt').stop(true, false).slideUp();

	});

	$(".en-nav .nav_d").hover(function () {

		$(this).stop(true, false).addClass('act').siblings().stop(true, false).removeClass('act');

		$(this).find('.nav_bt').stop(true, false).slideDown();

	}, function () {

		$(this).find('.nav_bt').stop(true, false).slideUp();

		$(this).stop(true, false).removeClass('act');

	});

});


$(function () {



	window.onload = function () {
		// 1. 获取需要的标签
		var nav = $("nav-menu");
		var t_mall = nav.children[0];
		var ul = nav.children[1];
		var allLis = ul.children;

		// 记录鼠标点击的位置
		var beginX = 0;

		// 2. 遍历
		for (var i = 0; i < allLis.length; i++) {
			var li = allLis[i];

			// 2.1 监听鼠标进入
			li.onmouseover = function () {
				end = this.offsetLeft;
			};

			// 2.2 监听鼠标按下事件
			li.onmousedown = function () {
				beginX = this.offsetLeft;
			};

			// 2.2 监听鼠标离开事件
			li.onmouseout = function () {
				end = beginX;
			}
		}

		// 3.缓动动画
		var begin = 0,
			end = 0;
		setInterval(function () {
			begin = begin + (end - begin) * 0.1;
			t_mall.style.left = begin + "px";
		}, 10);

		function $(id) {
			return typeof id === "string" ? document.getElementById(id) : null;
		}
	}

   $(".m_head .img").click(function () {

        $(".m_nav").addClass("act");

    });

    $(".m_out").click(function () {

        $(".m_nav").removeClass("act");

    });


    $(".m_head .img2").on('click', function () {

        $(".sstc").slideDown();

    });


    $(".sstc .srt").on('click', function () {

        $(".sstc").slideUp();

    });
	 $(".m_navbox li .ltt1").on('click', function () {


        $(this).siblings('.lbt').stop(true, false).slideToggle();

        $(this).parents("li").siblings().find('.lbt').stop(true, false).slideUp();

        $(this).stop(true, false).toggleClass('act');

        $(this).parents("li").siblings().find('.ltt1').stop(true, false).removeClass('act');


    });


    $(".m_navbox li .ltt2").on('click', function () {

        $(this).siblings('.ltc2').stop(true, false).slideToggle();

        $(this).stop(true, false).toggleClass('act');

        $(this).parents(".lbox").siblings().find('.ltc2').stop(true, false).slideUp();

        $(this).parents(".lbox").siblings().find('.ltt2').stop(true, false).removeClass('act');


    });
$("img").each(function(){
		$(this).removeAttr('title')
	});

});
