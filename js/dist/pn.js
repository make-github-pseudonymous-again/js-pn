(function(exports, undefined){

	'use strict';


/* js/src/pull.js */

var pull = function ( compile , isop , token , stack , count ) {

	var state ;

	stack.push( token ) ;

	if ( isop( token ) ) {

		count.push( 0 ) ;
		return false ;

	}

	while ( true ) {

		state = count.pop( ) + 1 ;
		count.push( state ) ;

		if ( state < 2 ) return false ;

		b  = stack.pop( ) ;
		a  = stack.pop( ) ;
		op = stack.pop( ) ;

		stack.push( compile( op , a , b ) ) ;
		count.pop( ) ;

		if ( count.empty( ) ) return true ;

	}

} ;

exports.pull = pull ;

/* js/src/validate.js */

var validate = function ( isop , token , count ) {

	return isop( token ) || ! count.empty( ) ;

} ;

exports.validate = validate ;

})(typeof exports === 'undefined' ? this['pn'] = {} : exports);
