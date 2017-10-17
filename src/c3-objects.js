import d3 from 'd3';

export default {
	myChart: {
        data: {
			x: 'x',
			columns: [
				['x', 'Bexar County', 'Bell County', 'El Paso County', 'Tarrant County', 'Harris County'],
				['Total Personnel', 60076, 34167, 32357, 11738, 8908]
			],
			type: 'bar',
			labels: {
				format: d3.format(',')
			},
			colors: {
				['Total Personnel']: '#F60000',
			}
		},
		bar: {
			width: 55,
			space: 0.25
		},
		tooltip: {
			show: false
		},
		legend: {
			show: false
		},
		axis: {
			x: {
				type: 'category'
			},
			y: {
				tick: {
					format: d3.format(',')
				}
			}
		}
    },
    myChartTwo: {
        data: {
			x: 'x',
			columns: [
				['x', 'Bexar County', 'Bell County', 'El Paso County', 'Tarrant County', 'Harris County'],
				['Total Personnel', 60076, 34167, 32357, 11738, 8908]
			],
			type: 'bar',
			labels: {
				format: d3.format(',')
			},
			colors: {
				['Total Personnel']: '#000000',
			}
		},
		bar: {
			width: 55,
			space: 0.25
		},
		tooltip: {
			show: false
		},
		legend: {
			show: false
		},
		axis: {
			x: {
				type: 'category'
			},
			y: {
				tick: {
					format: d3.format(',')
				}
			}
		}
    },
};