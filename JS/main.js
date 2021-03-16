new Chart(document.getElementById("bar-chart-1"), {
	type: 'bar',
	data: {
		labels: ["Africa", "Asia", "Europe", "Latin America", "North America", "Mars"],
		datasets: [
			{
				label: "Population (millions)",
				backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#e8c3b9"],
				data: [2478,5267,734,784,433,4]
			}
		]
	},
	options: {
		legend: { display: false },
		title: {
			display: true,
			text: 'Predicted world population (millions) in 2050'
		}
	}
});

new Chart(document.getElementById("bar-chart-2"), {
	type: 'bar',
	data: {
		labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
		datasets: [
			{
				label: "average rain amount per month in Finland",
				backgroundColor: ["#3e95cd","#3e95cd","#3e95cd","#3e95cd","#3e95cd","#3e95cd","#3e95cd","#3e95cd","#3e95cd","#3e95cd","#3e95cd","#3e95cd"],
				data: [44,34,35,30,42,60,75,74,56,60,53,47]
			}
		]
	},
	options: {
		legend: { display: false },
		title: {
			display: true,
			text: 'Rain in Finland'
		}
	}
});

new Chart(document.getElementById("pie-chart"), {
	type: 'pie',
	data: {
		labels: ["Phaser", "planering struktur", "prototyp", "process multimedia", "planera mulrimedia", "implementera multimedia", "utrustning, teknik", "dokumentera"],
		datasets: [{
			label: "yrkesämnen enligt KP",
			backgroundColor: ["#3e95cd", "#3e95cd","#3e95cd","#3e95cd","#3e95cd","#3e95cd","#3e95cd","#3e95cd"],
			data: [6,3,8,1,2,2,2,1]
		}]
	},
	options: {
		title: {
			display: true,
		}
	}
});

function renderChart(data, labels) {
	const ctx = document.getElementById("chart-3").getContext('2d');
	const chart3 = new Chart(ctx, {
		type: 'line',
		data: {
			labels: labels,
			datasets: [{
				label: 'This week',
				data: data,
				borderColor: 'rgba(75, 100, 100, 1)',
				backgroundColor: 'rgba(75, 130, 130, 0.2)',
			}]
		},
		options: {
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero: true,
					}
				}]
			}
		},
	});
}

$("#renderBtn").click(
	function () {
		let data = [20000, 14000, 12000, 15000, 18000, 19000, 22000];
		let labels = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
		renderChart(data, labels);
	}
);