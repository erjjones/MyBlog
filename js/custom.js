jQuery(document).ready(function() {		
	
	/* Replace username with your username */
	/*JSONP( 'https://api.github.com/users/username?callback=?', function( response ) {
		var data = response.data;		
	});*/
	
	function JSONP( url, callback ) {
		var id = ( 'jsonp' + Math.random() * new Date() ).replace('.', '');
		var script = document.createElement('script');
		script.src = url.replace( 'callback=?', 'callback=' + id );
		document.body.appendChild( script );
		window[ id ] = function( data ) {
			if (callback) {
				callback( data );
			}
		};
	}	
});