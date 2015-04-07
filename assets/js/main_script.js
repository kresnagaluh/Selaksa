var accordion_target = $('.accordion-wrapper').find('.collapse');

$( accordion_target ).each(function() {
	if( $(this).hasClass('in') ){
	  	$(this).parent('.panel-default').find('.solution-arrow').removeClass('fa-chevron-down').addClass('fa-chevron-up');
	}
});

$('.accordion-wrapper').on('hide.bs.collapse', function (n) {
	var target = $(n.target).siblings('.panel-heading').find('.solution-arrow');
	target.removeClass('fa-chevron-up').addClass('fa-chevron-down');
});

$('.accordion-wrapper').on('show.bs.collapse', function (n) {
	var target = $(n.target).siblings('.panel-heading').find('.solution-arrow');
	target.removeClass('fa-chevron-down').addClass('fa-chevron-up');
});


$("#mobile_menu_bars").click(function(){
	$("#mobile_menu_wrapper").toggleClass('active');
	return false;
});