( function( $ ) {

	'use strict';

	var dressBoutiqueSite = {

		init: function() {
			dressBoutiqueSite.sliderInit();
			dressBoutiqueSite.loginPopupInit();
			dressBoutiqueSite.testiInit();
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

		testiInit: function() {
			console.log('testiInit');
		}

	}



	// Main scripts Initialization
	dressBoutiqueSite.init();

}( jQuery ) );
