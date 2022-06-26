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
		"country": "Token Sale",
		"litres": 50
		},
		{
		"country": "Team & Advisors",
		"litres": 25
		},
		{
			"country": "Bussines Dev",
			"litres": 15
		},
		{
			"country": "Marketing & Reserve",
			"litres": 10
		}
		];

		var label = chart.seriesContainer.createChild(am4core.Label);
		label.horizontalCenter = "middle";
		label.verticalCenter = "middle";
		label.fontSize = 15;
		label.labelRadius = -500;

		var series = chart.series.push(new am4charts.PieSeries3D());
		series.dataFields.value = "litres";
		series.dataFields.category = "country";
		series.slices.template.tooltipText = "{category}: {value.percent.numberFormatter('#.')}%";

	}); // end am4core.ready()




var options = {
    series: [{
        name: "Token Price",
        data: [0, 0.02, 0.04, 0.10, 0.20]
    }],
    chart: {
        height: 350,
        type: 'line',
        zoom: {
            enabled: true
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'straight'
    },
    title: {
        align: 'left'
    },
    fill: {
        type: "gradient",
     
    },
    grid: {
        row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
        },
    },
    xaxis: {
        categories: ['','Private Sale', 'Presale', 'Soft Cap', 'Hard Cap',],
    }
};

        var chart = new ApexCharts(
            document.querySelector("#bitcoin-value"),
            options
        );

        chart.render();




