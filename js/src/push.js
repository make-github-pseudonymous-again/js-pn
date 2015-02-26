
var push = function ( compile , isop , tokens , stack , count ) {

	var token ;

	do {

		token = tokens.next( ) ;

	} while ( pull( compile , isop , token , stack , count ) ) ;

} ;
