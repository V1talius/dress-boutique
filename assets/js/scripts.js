( function( $ ) {

	'use strict';

	var dressBoutiqueSite = {

		init: function() {
			dressBoutiqueSite.preloaderInit();
			dressBoutiqueSite.sliderInit();
			dressBoutiqueSite.loginPopupInit();
			dressBoutiqueSite.registerPopupInit();
			dressBoutiqueSite.testiInit();
		},

		preloaderInit: function() {
			$(window).on( 'load', function(){
				var $loader = $( '.site-preloader' );

				$loader.fadeOut( 500, function() {
					console.log('loaded');
				});
			});
		},

		sliderInit: function() {
			$( '#main-slider' ).sliderPro( {
				width: '100%',
				height: 770,
				fade: true,
				arrows: false,
				buttons: true,
				loop: false,
				waitForLayers: true,
				autoplay: false,
				autoScaleLayers: false,
				slideDistance: 0,
				breakpoints: {
					992: {
						height: 500,
					},
					540: {
						height: 300,
					}
				}
			} );
		},

		loginPopupInit: function() {
			var $loginLink       = $( '.login-link' ),
				$loginPopup      = $( '.login-popup' ),
				$loginPopupCover = $( '.login-popup__cover' );

			$loginLink.on( 'click', function() {
				$loginPopup.addClass( 'show-state' );
			} );

			$loginPopupCover.on( 'click', function() {
				$loginPopup.removeClass( 'show-state' );
			} );
		},

		registerPopupInit: function() {

		},

		testiInit: function() {
			var testiCarousel1 = new Swiper( '.testimonials-1', {
				slidesPerView: 1,
				spaceBetween: 30,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
			});
		}

	}

	// Main scripts Initialization
	dressBoutiqueSite.init();

}( jQuery ) );
