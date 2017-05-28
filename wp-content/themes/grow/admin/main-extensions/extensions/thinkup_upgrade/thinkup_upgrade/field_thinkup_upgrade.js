(function( $ ) {

	$(document).ready(function (){

		// Only needed on customizer page - theme options page handled using Redux core customization
		if( jQuery( 'body' ).hasClass( 'wp-customizer' ) ) {

			// ----------------------------------------------------------------------------------------------------------
			// 1. UPGRADE NOW BUTTON
			// ----------------------------------------------------------------------------------------------------------

			$( '#accordion-section-themes' ).append( '<div id="customize-thinkup-upgrade" class=""><p><a href="//www.thinkupthemes.com/themes/grow/" target="_blank" class="button button-primary" style="">Upgrade Now</a></p></div>' );

		}

	});

})( jQuery );