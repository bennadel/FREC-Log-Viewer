(function( ng, app ) {
	
	"use strict";

	app.factory( "FRECLog", FRECLogFactory );

	// I return the FRECLog class (but allow for dependeny-injection).
	function FRECLogFactory( CSVParser ) {

		// I represent a FREC Log instance based on the given row data. The row data is represented
		// as a two dimentional array.
		function FRECLog( logInput ) {

			var rows = parseInput();

			// Return the public API for the component.
			return({
				fields: FRECLog.fields,
				toArray: toArray
			});


			// ---
			// PUBLIC METHODS.
			// ---


			// I return the underlying record-set.
			function toArray() {

				return( rows );

			}


			// ---
			// PRIVATE METHODS.
			// ---


			// I parse the incoming CSV data 
			function parseInput() {

				return(
					CSVParser.parse( logInput, false, " " )
				);

			}

		}


		// I contain the field mapping for the data array. The data for this array is taken 
		// directly from the FREC log documentation: http://docs.intergral.com/pages/viewpage.action?pageId=27656428
		FRECLog.fields = [
			{
				label: "Date (Formatted)",
				index: 1,
				description: "The date on which this log entry was written."
			},
			{
				label: "Time (Formatted)",
				index: 2,
				description: "The time on which this log entry was written."
			},
			{
				label: "Date/Time (Milliseconds)",
				index: 3,
				description: "This is the millisecond time at which this request started."
			},
			{
				label: "Get Log Version",
				index: 4,
				description: "This is the version of the log file."
			},
			{
				label: "Date/Time that FusionReactor stated (Milliseconds)",
				index: 5,
				description: "The time that the instance of FusionReactor (that is running the plugin) started."
			},
			{
				label: "Active Session Count",
				index: 6,
				description: "The current amount of sessions on the server."
			},
			{
				label: "Application Scope Size (bytes)",
				index: 7,
				description: "The size of the application."
			},
			{
				label: "Average Response Time (milliseconds)",
				index: 8,
				description: "The average server response time."
			},
			{
				label: "Cached Query Count",
				index: 9,
				description: "The number of queries that are stored in cache."
			},
			{
				label: "CFC Requests Queued",
				index: 10,
				description: "The number of CFC requests (Sent via HTTP) that were queued and are waiting to run."
			},
			{
				label: "CFC Requests Running",
				index: 11,
				description: "The number of CFC requests (Sent via HTTP) that are currently running."
			},
			{
				label: "CFC Requests Timed Out",
				index: 12,
				description: "The number of CFC requests (Sent via HTTP) that were timed out whilst waiting to run."
			},
			{
				label: "CF Thread Queued",
				index: 13,
				description: "The number of CF threads that are queued. NOTE : Value currently set at ZERO"
			},
			{
				label: "CF Thread Running",
				index: 14,
				description: "The number of CF threads that are running."
			},
			{
				label: "Concurrent User Count",
				index: 15,
				description: "The number of users that logged in using the \"CFLOGIN\" tag."
			},
			{
				label: "Flash Remoting Request Queued",
				index: 16,
				description: "The number of Flash Remoting Requests that are queued and waiting to run."
			},
			{
				label: "Flash Remoting Request Running",
				index: 17,
				description: "The number of Flash Remoting Requests that are running."
			},
			{
				label: "Flash Remoting Request Time out",
				index: 18,
				description: "The number of Flash Remoting Requests that were timed out whilst waiting to run."
			},
			{
				label: "JVM Free Memory (bytes)",
				index: 19,
				description: "The free memory in the Java Virtual Machine."
			},
			{
				label: "JVM Used Memory (bytes)",
				index: 20,
				description: "The memory used by the Java Virtual Machine."
			},
			{
				label: "Query Cache Hit Ratio",
				index: 21,
				description: "The query cache hit ratio."
			},
			{
				label: "Query Cache Size (bytes)",
				index: 22,
				description: "The size of the cache."
			},
			{
				label: "Requests Queued",
				index: 23,
				description: "The number of request threads queued (JRun)."
			},
			{
				label: "Requests Running",
				index: 24,
				description: "The number of requests that are running (JRun)."
			},
			{
				label: "Requests Timed Out",
				index: 25,
				description: "The number of request timeouts (JRun)."
			},
			{
				label: "Request Load",
				index: 26,
				description: "Request load of the server, displayed as requests per a second."
			},
			{
				label: "Server Scope Size (bytes)",
				index: 27,
				description: "The server scope size."
			},
			{
				label: "Session Scope Size (bytes)",
				index: 28,
				description: "The size of the session scope."
			},
			{
				label: "Template Cache Count",
				index: 29,
				description: "The number of templates stored in the template cache. The template cache is where ColdFusion stores compiled CFM and CFC templates in memory. When a template is executed for the first time, it is compiled to Java bytecode, and then stored in the template cache. As long as the template is unchanged, ColdFusion uses the compiled form of the template stored in the template cache."
			},
			{
				label: "Template Cache Hit Ratio",
				index: 30,
				description: "The hit ratio of the template cache. The cache-hit ratio indicates the number of cache hits in relation to the number of cache misses"
			},
			{
				label: "Template Cache Size (bytes)",
				index: 31,
				description: "The total size of the template cache."
			},
			{
				label: "Template Requests Queued",
				index: 32,
				description: "The number of template requests that are queued and waiting to run."
			},
			{
				label: "Template Requests Running",
				index: 33,
				description: "The number of template requests that are running."
			},
			{
				label: "Template Requests Timed Out",
				index: 34,
				description: "The number of template requests that have timed out."
			},
			{
				label: "Throttle Queue Size",
				index: ﻿35,
				description: "The total number of requests queued in the request throttle. Requests are throttled when ColdFusion queues them, because not enough, total memory \"is available to handle them. Requests smaller than the specified limit are not queued or counted as part of the total memory. Requests larger than the specified limit are counted as part of total memory and are queued if the request throttle-memory size of the request is exceeded."
			},
			{
				label: "Total Throttle Memory Used (bytes)",
				index: 36,
				description: "The total amount of memory that has been used by the throttle."
			},
			{
				label: "Web Service Requests Queued",
				index: 37,
				description: "The number of Web Services that are queued and waiting to run."
			},
			{
				label: "Web Service Requests Running",
				index: 38,
				description: "The number of Web Services requests that are currently running."
			},
			{
				label: "Web Service Requests Timed Out",
				index: 39,
				description: "The number of Web Services that timed out whilst waiting to run."
			},
			{
				label: "Memory Monitor State",
				index: 40,
				description: "If Memory Monitoring is enabled in ColdFusion then this value will be 1, if not it will be 0. To enable this check out How to enable FREC."
			},
			{
				label: "Profiling State",
				index: 41,
				description: "If Profiling is enabled in ColdFusion then this value will be 1, if not it will be 0. To enable this check out How to enable FREC. "
			}
		];


		// Return the FRECLog constructor.
		return( FRECLog );

	}
	
})( angular, frec );