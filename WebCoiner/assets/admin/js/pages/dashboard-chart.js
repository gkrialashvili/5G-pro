//[Dashboard chart Javascript]

//Project:	Crypto Admin - Responsive Admin Template

	am4core.ready(function() {

	// Themes begin
	am4core.useTheme(am4themes_animated);
	// Themes end

	var chart = am4core.create("currency-value", am4charts.PieChart3D);
	chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

	chart.legend = new am4charts.Legend();

	chart.data = [
	  {
		currency: "Token Sale",
		value: 60
	  },
	  {
		currency: "XRP",
		value: 20
	  },
	  {
		currency: "RISE",
		value: 15
	  },
	  {
		currency: "NEO",
		value: 21
	  },
	  {
		currency: "LTC",
		value: 11
	  },
	  {
		currency: "ETH",
		value: 8
	  },
	  {
		currency: "DASH",
		value: 17
	  }
	];

	var series = chart.series.push(new am4charts.PieSeries3D());
	series.dataFields.value = "value";
	series.dataFields.category = "currency";

	}); // end am4core.ready()




	var options = {
            chart: {
                height: 485,
                type: 'area',
            },
            dataLabels: {
                enabled: false
            },
			legend: {
			    position: 'top',
				horizontalAlign: 'left',
		    },
			colors:[ '#00c292'],
            stroke: {
                curve: 'smooth'
            },
            series: [{
                data: [0.02, 0.04, 0.10, 0.20]
            }],
            xaxis: {
				type: 'numeric',
				categories: [0.02, 0.04, 0.10, 0.20],
            },
            tooltip: {
				x: {
					enabled: false,
                    format: 'dd/MM/yy HH:mm'
                },
            }
        }

        var chart = new ApexCharts(
            document.querySelector("#bitcoin-value"),
            options
        );

        chart.render();



