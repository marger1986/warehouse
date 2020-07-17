// function topNavScroll() { 
// 	//获取当前窗口滚动条顶部所在的像素值 并取整 
// 	var topScroll = Math.floor($(window).scrollTop());
// 	//设置滚动多少像素后透明度变为1      
// 	var scrollDist = 100;
// 	//定义滚动条在向下滚动180像素后 变成完全不透明  
// 	if (topScroll <= scrollDist) {
// 		//计算当前透明度 当前所在的像素 除 180(topScroll的最大值 因为透明度的值是0-1之间的小数)   
// 		$('.navwrapbg').css('opacity', 0);
// 	} else {
// 		$('.navwrapbg').css('opacity', 1);
// 	}
// }
// $(window).on('scroll', function() {
// 	topNavScroll();
// });
// 