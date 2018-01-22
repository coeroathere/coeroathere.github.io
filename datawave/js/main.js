/**
	* @package Play
	* @subpackage Play HTML
	* @since Play HTML 1.0
	* 
	* Template Scripts
	* Created by siyamak45

	Scrript JS
	#Carouseles
	#Vertical Carousel
	#Slidwshow
	#Fullpage
	#Imagelightbox
	#Countdown Timer
	#MouseWheel
	#Twitter Feed
	#Menu & Navigations
	#Contact Form
	#Parallax
	#Portfolio
	#Window Resize
	#Progress Bars
	#Set Colors
**/

jQuery(function ($) {
	"use strict";
	/* ----------------------------------------------------------- */
	/*  #Carouseles
	/* ----------------------------------------------------------- */		

	$('.post-gallery').each(function(){
		$(this).owlCarousel({
			items:1,
			lazyLoad:true,
			loop:true,
			mouseDrag: false,
			touchDrag: false,
			pullDrag: false,
			autoplay:true,
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			smartSpeed:450,
		});
	});
	/* ----------------------------------------------------------- */
	/*  #Vertical Carousel
	/* ----------------------------------------------------------- */		
	$('.vertical-carousel .content-part').each(function(){
		$(this).owlCarousel({
		items : 1,
		animateOut: 'slideOutUp',
		animateIn: 'slideInUp',
		URLhashListener:false,
		mouseDrag: false,
		touchDrag: false,
		pullDrag: false,
		smartSpeed:450,
		loop:true,
		dots:false,
		});
	});
	$('.vertical-carousel .navgaition-part').each(function(){
		$(this).owlCarousel({
		items : 1,
		animateOut: 'slideOutDown',
		animateIn: 'slideInDown',
		URLhashListener:false,
		mouseDrag: false,
		touchDrag: false,
		pullDrag: false,
		smartSpeed:450,
		loop:true,
		dots:false,
		});
	});	
	$('body').on('click', '.vertical-carousel nav', function() {
		if($(this).hasClass('prev')){
			$(this).closest('.vertical-carousel').find('.navgaition-part').trigger('prev.owl.carousel');
			$(this).closest('.vertical-carousel').find('.content-part').trigger('prev.owl.carousel');
		}
		else{
			$(this).closest('.vertical-carousel').find('.navgaition-part').trigger('next.owl.carousel');
			$(this).closest('.vertical-carousel').find('.content-part').trigger('next.owl.carousel');
		}
	});
	$('body').on('click', '.vertical-carousel nav', function() {
		if($(this).hasClass('prev')){
			$(this).closest('.vertical-carousel').find('.navgaition-part').trigger('prev.owl.carousel');
			$(this).closest('.vertical-carousel').find('.content-part').trigger('prev.owl.carousel');
		}
		else{
			$(this).closest('.vertical-carousel').find('.navgaition-part').trigger('next.owl.carousel');
			$(this).closest('.vertical-carousel').find('.content-part').trigger('next.owl.carousel');
		}
	});
	/* ----------------------------------------------------------- */
	/*  #Slideshow
	/* ----------------------------------------------------------- */	
	$('.owl-carousel').each(function(){
		$(this).owlCarousel({
			animateOut: 'zoomOut',
			animateIn: 'zoomIn',
			items:1,
			margin:0,
			stagePadding:0,
			smartSpeed:450,
			autoplay:$(this).data('autoplay'),
			autoplayTimeout:$(this).data('timeout'),
			autoplayHoverPause:$(this).data('pauseonhover'),
			loop:true,
			URLhashListener:false,
			mouseDrag: false,
			touchDrag: false,
			pullDrag: false,
			dots:$(this).data('navigation'),
		})
	});
	/* ----------------------------------------------------------- */
	/*  #Fullpage
	/* ----------------------------------------------------------- */
	var currentSection;
	var currentSlide=1;
	$('.body').fullpage({
		fixedElements: '#navigation, .vmenu-wrapper, .site-overlay',
		anchors:['main'],
		controlArrows: false,
		navigation: false,
		resize: false,
		scrollingSpeed: 800,
		slidesNavigation: false,
		loopHorizontal:false,
		css3: true,
		slidesNavPosition: 'top',
		keyboardScrolling: true,
		scrollOverflow:true,
		autoScrolling:true,
		paddingTop: '0px',
		scrollBar: false,
		paddingBottom: '0px',
		afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {		
			currentSection = index;
			currentSlide = slideIndex;
		},
		onSlideLeave: function( anchorLink, index, slideIndex, direction){			
		},
		afterRender: function(){
			if($('#photostack').length > 0)
				new Photostack( document.getElementById( 'photostack' ));
		}
	});
	
	/* ----------------------------------------------------------- */
	/*  #Imagelightbox
	/* ----------------------------------------------------------- */
	$( function()
	{
		var activityIndicatorOn = function()
			{
				$( '<div id="imagelightbox-loading"><div></div></div>' ).appendTo( 'body' );
			},
			activityIndicatorOff = function()
			{
				$( '#imagelightbox-loading' ).remove();
			},

			overlayOn = function()
			{
				$( '<div id="imagelightbox-overlay"></div>' ).appendTo( 'body' );
			},
			overlayOff = function()
			{
				$( '#imagelightbox-overlay' ).remove();
			},

			navigationOn = function( instance, selector )
			{
				var images = $( selector );
				if( images.length )
				{
					var nav = $( '<div id="imagelightbox-nav"></div>' );
					for( var i = 0; i < images.length; i++ )
						nav.append( '<a href="#"></a>' );

					nav.appendTo( 'body' );
					nav.on( 'click touchend', function(){ return false; });

					var navItems = nav.find( 'a' );
					navItems.on( 'click touchend', function()
					{
						var $this = $( this );
						if( images.eq( $this.index() ).attr( 'href' ) != $( '#imagelightbox' ).attr( 'src' ) )
							instance.switchImageLightbox( $this.index() );

						navItems.removeClass( 'active' );
						navItems.eq( $this.index() ).addClass( 'active' );

						return false;
					})
					.on( 'touchend', function(){ return false; });
				}
			},
			navigationUpdate = function( selector )
			{
				var items = $( '#imagelightbox-nav a' );
				items.removeClass( 'active' );
				items.eq( $( selector ).filter( '[href="' + $( '#imagelightbox' ).attr( 'src' ) + '"]' ).index( selector ) ).addClass( 'active' );
			},
			navigationOff = function()
			{
				$( '#imagelightbox-nav' ).remove();
			};

			
			
		var selectorE = 'a[data-imagelightbox="gallery"]';
		var instanceE = $( selectorE ).imageLightbox(
		{
			onStart:	 function() { overlayOn(); navigationOn( instanceE, selectorE ); },
			onEnd:		 function() { overlayOff(); navigationOff(); activityIndicatorOff(); },
			onLoadStart: function() { activityIndicatorOn(); },
			onLoadEnd:	 function() { navigationUpdate( selectorE ); activityIndicatorOff(); }
		});
		
		$( 'a[data-imagelightbox="flickr"]' ).imageLightbox(
		{
			onLoadStart:	function() { overlayOn();activityIndicatorOn(); },
			onLoadEnd:		function() {  activityIndicatorOff(); },
			onEnd:	 		function() { overlayOff(); activityIndicatorOff(); }
		});
	});
	
	/* ----------------------------------------------------------- */
	/*  #SlpitLayout
	/* ----------------------------------------------------------- */	
	function splitLayoutScrolling(){
		if($(".splitlayout ").hasClass('open-right')){
			if($(".page-right").parent('.slimScrollDiv').length <=0 ){
				$('.page-right').slimScroll({
					height: $(window).height()+'px',
					width: '100%',
					alwaysVisible: true,
					railVisible: false,
					railColor: '#222',
					position: 'right',
					size: '10px'
				});	
			}
		}else if($(".splitlayout ").hasClass('open-left')){
			if($(".page-left").parent('.slimScrollDiv').length <=0 ){
				$('.page-left').slimScroll({
					height: $(window).height()+'px',
					width: '100%',
					alwaysVisible: true,
					railVisible: false,
					railColor: '#222',
					position: 'left',
					size: '10px'
				});	
			}
		}
		if($(".splitlayout ").hasClass('reset-layout')){
			if($(".page-right").parent('.slimScrollDiv').length >0 ){
				$('.page-right').slimScroll({
					destroy:true
				});
			}else if($(".page-left").parent('.slimScrollDiv').length >0 ){
				$('.page-left').slimScroll({
					destroy:true
				});
			}
		}
	}
	function whichTransitionEvent(){
		var t,
			el = document.createElement("fakeelement");
		var transitions = {
			"transition"      : "transitionend",
			"OTransition"     : "oTransitionEnd",
			"MozTransition"   : "transitionend",
			"WebkitTransition": "webkitTransitionEnd"
		}
		for (t in transitions){
			if (el.style[t] !== undefined){
				return transitions[t];
			}
		}
	}
	var transitionEvent = whichTransitionEvent();
	$('.side.side-right, .side.side-left').bind(transitionEvent, function(event) {
		splitLayoutScrolling();
	});		
	
	/* ----------------------------------------------------------- */
	/*  #Countdown Timer
	/* ----------------------------------------------------------- */	
	$('.countdown_dashboard').each(function(){
		var startDate = new Date($(this).data('date'));
		$(this).countdown({
			date: startDate,
			render: function(data) {
				$(this.el).html("<div  class='dash digit'><span class='dash_title'>DAYS</span>" + this.leadingZeros(data.days, 3) + "<span class='timer sep'>:</span> </div><div  class='dash digit'> <span  class='dash_title'>HOURS</span>" + this.leadingZeros(data.hours, 2) + "<span class='timer sep'>:</span></div><div  class='dash digit'> <span  class='dash_title'>MINUTES</span>" + this.leadingZeros(data.min, 2) + "<span class='timer sep'>:</span></div><div  class='dash digit'><span  class='dash_title'>SECONDS</span>" + this.leadingZeros(data.sec, 2) + " </div>");
			}
		});
	});
	
	/* ----------------------------------------------------------- */
	/*  #MouseWheel
	/* ----------------------------------------------------------- */	
	$.fn.wheel = function (callback) {
		return this.each(function () {
			$(this).on('mousewheel DOMMouseScroll', function (e) {
				e.delta = null;
				if (e.originalEvent) {
					if (e.originalEvent.wheelDelta) e.delta = e.originalEvent.wheelDelta;
					if (e.originalEvent.deltaY) e.delta = e.originalEvent.deltaY;
					if (e.originalEvent.detail) e.delta = e.originalEvent.detail;
				}

				if (typeof callback == 'function') {
					callback.call(this, e);
				}
			});
		});
	};	
	var delay = (function(){
		var timer = 0;
		return function(callback, ms){
			clearTimeout (timer);
			timer = setTimeout(callback, ms);
		};
	})();
	if($.browser.msie || $.browser.safari ){
		$('.section').bind('mousewheel', function(e){
			var el=$('.slide.active').find('.slimScrollBar');
			var top = el.css('top');
		   if(e.originalEvent.wheelDelta /120 > 0) {
				if(!el.hasClass("scrolling") && (el.length <= 0 || top == "0px") && currentSlide!=0){
					$('.body').fullpage.moveTo(1, currentSlide-1); 
				}else{
					el.addClass('scrolling');
					delay(function(){
						el.removeClass("scrolling");
					},300);
				}
			}
			else {
				if(!el.hasClass("scrolling") && (el.length <= 0 || top ==($(window).height()-parseInt(el.height()))+"px")){
					$('.body').fullpage.moveTo(1, currentSlide+1); 
				}else{
					el.addClass('scrolling');
					delay(function(){
						el.removeClass("scrolling");
					},300);
				}
			}
		});
	}else{
		$('.section').wheel(function (e) {

			var el=$('.slide.active').find('.slimScrollBar');
			var top = parseInt(el.css('top'), 10);
			var t=$(window).height()-parseInt(el.height())+"px";
		   if(e.delta /120 < 0) {
				if(!el.hasClass("scrolling") && (el.length <= 0 || top == 0) && currentSlide!=0){
					$('.body').fullpage.moveTo(1, currentSlide-1); 
				}else{
					el.addClass('scrolling');
					delay(function(){
						el.removeClass("scrolling");
					},300);
				}
			}
			else {
				if(!el.hasClass("scrolling") && (el.length <= 0 || top >=($(window).height()-parseInt(el.height())))){	
					$('.body').fullpage.moveTo(1, currentSlide+1); 
				}else{
					el.addClass('scrolling');
					delay(function(){
						el.removeClass("scrolling");
					},300);
				}
			}
		});
	}
	
	/* ----------------------------------------------------------- */
	/*  #Twitter Feed
	/* ----------------------------------------------------------- */
	$('.twitter-tweet').each(function(){
		$(this).twittie({
			username: $(this).data('user'),
			dateFormat: '%b. %d, %Y',
			template: '<p>{{tweet}}</p><div class="tweet-details">{{screen_name}}<a href="{{url}}">{{date}}</a></div>',
			count: 1,
			loadingText: 'Loading!'
		});
	});	
	
	/* ----------------------------------------------------------- */
	/*  #Menu & Navigations
	/* ----------------------------------------------------------- */	
	$("#accordion.menu").dcAccordion({
		eventType: "click",
		hoverDelay: 600,
		menuClose: true,
		autoClose: true,
		saveState: false,
		autoExpand: true,
		classExpand: "current-menu-item",
		classDisable: "",
		showCount: false,
		disableLink: false,
		cookie: "dc_jqaccordion_widget-s1-item",
		speed: "fast"
	});
	if($('.section.active .slide').length <= 1){
		$('.navbar .next').css({'display':'none'});
		$('.navbar .prev').css({'display':'none'});
	}
	$('.navbar .next').click(function(e){
		$.fn.fullpage.moveSlideRight();
	});
	$('.navbar .prev').click(function(e){
		$.fn.fullpage.moveSlideLeft();
	});
	$('body').on('click', '.menubar', function() {
		$('html').addClass('pushed');
	});	
	$('body').on('click', '.site-overlay', function() {
		$('html').removeClass('pushed');
	});
	$('.vmenu').slimScroll({
		destroy: true,
	});
	
	/* ----------------------------------------------------------- */
	/*  #Contact Form
	/* ----------------------------------------------------------- */	
	$("#submit_btn").on('click',function() { 
		var user_name= $('input[name=name]').val(); 
		var user_email=$('input[name=email]').val();
		var user_subject= $('input[name=subject]').val();
		var user_message= $('textarea[name=message]').val();
		var user_captcha= $('input[name=captcha]').val();
		
		var  post_data = {'userName':user_name, 'userEmail':user_email, 'userSubject':user_subject, 'userMessage':user_message,'userCaptcha':user_captcha};
		$.post('php/contact.php', post_data, function(response){   
			if(response.type != 'error')
			{
				$('#contact_form input').val(''); 
				$('#contact_form textarea').val(''); 
			}
			$('.result').html('<p style="display:table-cell; vertical-align:middle;">'+response.text+'</p>');
			$('.result').css({'display':'table'});
		}, 'json');
	});	
	
	$("#contact_form input, #contact_form textarea").keyup(function() { 
		$("#contact_form input, #contact_form textarea").css('border-color',''); 
		$("#result").slideUp();
	});
	$(".captcha-change-image").on('click',function(e) { 
		$('.captcha-image').attr("src","php/captcha.php?"+new Date().getTime());
		e.preventDefault();
	});
	$(".result").on('click',function(e) { 
		$('.result').css({'display':'none'});
	});	
	
	/* ----------------------------------------------------------- */
	/*  #Parallax
	/* ----------------------------------------------------------- */	
	$.parallaxify({
		positionProperty: 'transform',
		responsive: true,
		motionType: 'natural',
		mouseMotionType: 'gaussian',
		motionAngleX: 45,
		motionAngleY: 45,
		alphaFilter: 0.01,
		adjustBasePosition: true,
		alphaPosition: 0.01,
	});	
	
	/* ----------------------------------------------------------- */
	/*  #Portfolio
	/* ----------------------------------------------------------- */	
	var optionsString = "",
		$folioItems = $("#portfolio"),
		$body = $("body"),
		$folioElements = $("#portfolio .item"),
		$activeFilter = $("#filter.portfolio a.selected"),
		$article = $(".portfolio-wrapper");
		
	if ($folioItems.length > 0) {
		$folioItems.imagesLoaded(function() {
			$folioItems.isotope({
				itemSelector: ".item",
				masonry: {
					columnWidth: getFolioColWidth()[0]
				},
				isResizeBound: false
			});
			if ($folioItems.hasClass("layout-fixed")) $(window).resize(function() {
				
				var columWidthh = getFolioColWidth();
				var elems = $folioItems.isotope("getItemElements");
				for (var i = 0; i < elems.length; i++) $(elems[i]).width(columWidthh[0]);
					$folioItems.isotope({
						masonry: {
							columnWidth: columWidthh[0],
							
						},
						transitionDuration: '1s'
					});
				
			}).trigger("resize");
			else $(window).resize(function() {
			
				var columWidthh = getFolioColWidth();
				var elems = $folioItems.isotope("getItemElements");
				for (var i = 0; i < elems.length; i++) $(elems[i]).width(columWidthh[0] * (columWidthh[1] == 1 ? 1 : $(elems[i]).data("factor")));
					$folioItems.isotope({
						masonry: {
							columnWidth: columWidthh[0]
						}
					});
				
			}).trigger("resize")
		});
		$body.append('<div id="responsive-queries"><div id="break-43"></div><div id="break-42"></div><div id="break-41"></div><div id="break-32"></div><div id="break-31"></div><div id="break-21"></div></div>');
		var $break21 = $("#break-21"),
			$break32 = $("#break-32"),
			$break31 = $("#break-31"),
			$break43 = $("#break-43"),
			$break42 = $("#break-42"),
			$break41 = $("#break-41")
	}
	function getFolioColWidth() {
		var colWidth = 0,
			factor = 0,
			containerWidth = $article.width();
		if ($folioItems.hasClass("cols-two"))
			if ($break21.css("display") == "block") {
				colWidth = containerWidth;
				factor = 1
			} else colWidth = containerWidth /
				2;
		else if ($folioItems.hasClass("cols-three"))
			if ($break31.css("display") == "block") {
				colWidth = containerWidth;
				factor = 1
			} else if ($break32.css("display") == "block") colWidth = containerWidth / 2;
		else colWidth = containerWidth / 3;
		else if ($break41.css("display") == "block") {
			colWidth = containerWidth;
			factor = 1
		} else if ($break42.css("display") == "block") colWidth = containerWidth / 2;
		else if ($break43.css("display") == "block") colWidth = containerWidth / 3;
		else colWidth = containerWidth / 4;
		return Array(colWidth, factor)
	}
	if ($("#filter.portfolio").length > 0) {
		var $filter = $("#filter.portfolio");
		$("#filter.portfolio").find("a").click(function(e) {
			$folioElements.removeClass("disable-resize");
			$activeFilter.removeClass("selected");
			$activeFilter = $(this);
			$activeFilter.addClass("selected");
			var f = $(this).data("filter");
			$folioItems.isotope({
				filter: f
			});
		});
	}
	
	/* ----------------------------------------------------------- */
	/*  #Window Resize
	/* ----------------------------------------------------------- */		
	$(window).resize(function(){
		$('.split-container').css({'height':$(window).height()+'px'});
		$('.split-container .splitlayout').addClass(' close-right reset-layout');
		$('.split-container .splitlayout').removeClass(' open-right open-left');
		
		if($('#intro .content-wrapper').height()<($(window).height())){
			$("#intro .content-wrapper").css({'height':$(window).height()+'px'});
		}
		$(".content-wrapper").each(function(){
			$(this).css({'height':''});
			if($(this).height()<($(window).height())){
				$(this).css({'height':$(window).height()+'px'});
			}
		});				
	}).resize();	
	
	/* ----------------------------------------------------------- */
	/*  #Progress Bars
	/* ----------------------------------------------------------- */	
	$("[data-appear-progress-animation]").each(function() {
		var $this = $(this);
		var delay = ($this.attr("data-appear-animation-delay") ? $this.attr("data-appear-animation-delay") : 1);
		if(delay > 1) $this.css("animation-delay", delay + "ms");
		$this.addClass($this.attr("data-appear-animation"));
		setTimeout(function() {
			$this.animate({
				width: $this.attr("data-appear-progress-animation")
			}, 1500, "easeOutQuad", function() {
				$this.find(".progress-bar-tooltip").animate({
					opacity: 1
				}, 500, "easeOutQuad");
			});
		}, delay);
	});	
	
	/* ----------------------------------------------------------- */
	/*  #Set Colors
	/* ----------------------------------------------------------- */	
	$("[data-bg-color]").each(function(){
		$(this).css({'background':$(this).data('bg-color')});
	});
	$("[data-text-color]").each(function(){
		$(this).css({'color':$(this).data('text-color')});
	});
});