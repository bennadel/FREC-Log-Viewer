(function( ng, app ) {
	
	"use strict";

	app.directive( "frecDataGrid", DataGridDirective );

	// I render the data-grid without using AngularJS bindings. This is simply for the 
	// performant rending of potentially very large record-sets.
	function DataGridDirective() {

		// I bind the UI events to the scope.
		function link( $scope, element, attributes ) {

			// Get local references to the aspects of the $scope that are going to be used
			// to render the data-grid. 
			var fields = $scope.frecLog.fields;
			var rows = $scope.frecLog.toArray();

			var thead = $( "<thead><tr></tr></thead>" );
			var tbody = $( "<tbody></tbody>" );

			// Render the header columns.
			for ( var i = 0 ; i < fields.length ; i++ ) {

				thead
					.find( "tr" )
						.append( "<th>" + fields[ i ].label + "</th>" )
				;

			}

			// Render the body rows and columns.
			for ( var i = 0 ; i < rows.length ; i++ ) {

				tbody.append(
					"<tr><td>" +
					rows[ i ].join( "</td><td>" ) +
					"</td></tr>"
				);

			}
			
			// Add all the table content to the rendered element.
			element.append( thead, tbody );

			// Listen for mouse-enter events on the header so we can update the UI.
			thead.on(
				"mouseenter",
				"th",
				function( event ) {

					var index = $( this ).index();

					$scope.$apply(
						function() {

							$scope.showDataGridInsight( fields[ index ], "..." );

						}
					);

				}
			);

			// Listen for mouse-enter events on the body so we can update the UI.
			tbody.on(
				"mouseenter",
				"td",
				function( event ) {

					var td = $( this );
					var index = td.index();

					$scope.$apply(
						function() {

							$scope.showDataGridInsight( fields[ index ], td.text() );

						}
					);

				}
			);

		}


		// Return the directive configuration.
		return({
			link: link,
			restrict: "A"
		});
		
	}

})( angular, frec );