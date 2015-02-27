
var validate = function ( isop , token , count ) {

	return isop( token ) || ! count.empty( ) ;

} ;

exports.validate = validate ;
