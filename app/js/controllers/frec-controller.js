(function( ng, app ) {
	
	"use strict";

	app.controller( "frec.FrecController", FrecController );

	// I controler the FREC Log Viewer interface.
	function FrecController( $scope, FRECLog ) {

		// I determine which view to render.
		$scope.subview = "input";

		// I contain the raw, unparsed CSV data (bound using ngModel).
		// --
		// NOTE: The sample data is there to give the user some insight into how to use the 
		// FREC log viewer without having real instructional device on-screen.
		$scope.form = {
			csv: getSampleCsvData()
		};

		// I contain the parsed FREC log.
		$scope.frecLog = null;

		// I contain the field-insight information.
		$scope.dataGridInsight = null;
			

		// ---
		// PUBLIC METHODS.
		// ---


		// I show information about given data value such that it can be easily identified 
		// without the table-header being visible.
		$scope.showDataGridInsight = function( field, value ) {

			$scope.dataGridInsight = {
				index: field.index,
				label: field.label,
				description: field.description,
				value: value
			};

		};


		// I parse the user-provided CSV data and show it in the data-grid.
		$scope.showDataGrid = function() {

			if ( ! $scope.form.csv ) {

				return;

			}

			$scope.frecLog = new FRECLog( $scope.form.csv );

			$scope.subview = "output";

		};


		// ---
		// PRIVATE METHODS.
		// ---


		// I return sample log data for the FREC log.
		function getSampleCsvData() {

			var records = [
				"2013-09-01 10:00:00.206 1378044000206 1 1377679856609 145 0 130.75460829493088 5000 0 0 0 0 0 1 0 0 0 13677821832 1248002168 0.9993265487409546 0 0 4 0 14.463050903940681 0 0 1208 -0.0 5963299 0 4 0 0 0 0 0 0 0 0",
				"2013-09-01 10:00:05.222 1378044005222 1 1377679856609 145 0 130.75460829493088 5000 0 0 0 0 4 1 0 0 0 13030939464 1894884536 0.9993265488588482 0 0 8 0 14.463050903940681 0 0 1208 -0.0 5963299 0 1 0 0 0 0 0 0 0 0",
				"2013-09-01 10:00:10.237 1378044010237 1 1377679856609 145 0 130.75460829493088 5000 0 0 0 0 0 1 0 0 0 12156645992 2769178008 0.9993265490291389 0 0 2 0 14.463050903940681 0 0 1208 -0.0 5963299 0 2 0 0 0 0 0 0 0 0"
			];

			return( records.join( "\n" ) );

		}

	}

})( angular, frec );