$(function() {

	$.getJSON('http://www.highcharts.com/samples/data/jsonp.php?filename=aapl-c.json&callback=?', function(data) {
		// Create the chart
		$('#container').highcharts('StockChart', {
			

			rangeSelector : {
				selected : 1,
				inputEnabled: $('#container').width() > 480
			},

			title : {
				text : 'shieet partna'
			},
			
			series : [{
				name : 'dayum',	
				data : data,
				tooltip: {
					valueDecimals: 2
				}
			}]
		});
	});

});