(function( ng, app ) {
	
	"use strict";

	app.value( "CSVParser", CSVParser );


	// I parse the given CSV-input into a two-dimensional array.
	function CSVParser( csvInput, includesHeaderRow, fieldDelimiter ) {

		// Set up default values for optional arguments.
		includesHeaderRow = ( ng.isUndefined( includesHeaderRow ) ? false : !! includesHeaderRow );
		fieldDelimiter = ( fieldDelimiter || "," );
		
		// I contain the parsed data set.
		var rowSet = parseInput();

		// Return the public API for the component.
		return({
			toArray: toArray
		});


		// ---
		// PUBLIC METHODS.
		// ---


		// I return the parsed, two-dimentional array that respresents the given CSV input.
		function toArray( includeHeaders ) {

			if ( includesHeaderRow && includeHeaders ) {

				return( rowSet );

			}

			if ( includesHeaderRow && ! includeHeaders ) {

				return( rowSet.slice( 1 ) );

			}

			return( rowSet );

		}


		// ---
		// PRIVATE METHODS.
		// ---


		// I return a new instance of the Regular Expression pattern used to parse the CSV
		// input string.
		function getRegExPattern() {

			var pattern = new RegExp(
				(
					// Delimiters.
					"(\\" + fieldDelimiter + "|\\r?\\n|\\r|^)" +

					// Field value (qualified and other).	 
					"(?:" + 
						// Quoted field.
						"\"([^\"]*(?:\"\"[^\"]*)*)\"" + 

						"|" +

						// Standard field.
						"([^\"\\" + fieldDelimiter + "\\r\\n]*)" + 
					")"
				),
				"g"
			);

			return( pattern );

		}


		// I determine if the given parsed delimiter is a new row delimiter (an not a field
		// delimiter).
		function isNewRowDelimiter( delimiter ) {

			return( delimiter !== fieldDelimiter );
			
		}


		// I parse the currently input value into a two-dimentional array.
		function parseInput() {

			var rows = [];
			var row = null;
			var pattern = getRegExPattern();
			var matches = null;

			// Minor optimization - if the input is empty, just return an empty record set.
			if ( ! csvInput ) {

				return( rows );

			}

			// Keep matching the fields until we run out of data.
			while ( matches = pattern.exec( csvInput ) ) {

				var match = matches[ 0 ];
				var delimiter = matches[ 1 ];
				var quotedValue = unescapeEmbeddedQuotes( matches[ 2 ] );
				var unquotedValue = matches[ 3 ];

				// If we hit a new row, start a new row structure.
				if ( isNewRowDelimiter( delimiter ) ) {

					row = [];
					rows.push( row );

				}

				row.push( quotedValue || unquotedValue );

			}

			return( rows );

		}


		// I replace the escaped quotes (required by the CSV standard) with a single quote.
		function unescapeEmbeddedQuotes( fieldValue ) {

			return(
				( fieldValue || "" ).replace( /""/g, "\"" )
			);

		}

	}


	// Static Method: I provide a convenience method for instantiating the underying
	// parser and just return the resultant data array.
	CSVParser.parse = function( csvInput, includesHeaderRow, fieldDelimiter ) {

		var parser = new CSVParser( csvInput, includesHeaderRow, fieldDelimiter );

		return( parser.toArray() );

	};

})( angular, frec );