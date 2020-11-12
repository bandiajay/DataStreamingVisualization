/*
 * Parse the data and create a graph with the data.
 */
function parseData(createGraph) {
	Papa.parse("../data/test2.csv", {
		download: true,
		complete: function(results) {
			createGraph(results.data);
		}
	});
}

// function createGraph(data) {
// 	var years = [];
// 	var silverMinted = ["situados_paid"];

// 	for (var i = 1; i < data.length; i++) {
// 		years.push(data[i][0]);
// 		silverMinted.push(data[i][1]);
// 	}

// 	console.log(years);
// 	console.log(silverMinted);

// 	var chart = c3.generate({
// 		bindto: '#chart',
// 	    data: {
// 	        columns: [
// 	        	silverMinted
// 	        ]
// 	    },
// 	    axis: {
// 	        x: {
// 	            type: 'category',
// 	            categories: years,
// 	            tick: {
// 	            	multiline: false,
//                 	culling: {
//                     	max: 15
//                 	}
//             	}
// 	        }
// 	    },
// 	    zoom: {
//         	enabled: true
//     	},
// 	    legend: {
// 	        position: 'right'
// 	    }
// 	});
// }

function createGraph(data){
	var instance = ["instance"];
	var bitcoin = ["Bitcoin"];
	var Etherium = ["Etherium"]
	 
	for (var i = 1; i < data.length-1; i++) {
		instance.push(data[i][0]);
		bitcoin.push(data[i][1]);
		Etherium.push(data[i][2]);
	} 

	console.log(instance);
	console.log(bitcoin);
	console.log(Etherium);

	var chart = c3.generate({
		bindto: '#chart',
	    data: {
	        columns: [
				bitcoin,
				Etherium
	        ]
	    },
	    axis: {
	        x: {
	            type: 'category',
	            categories: instance,
	            tick: {
	            	multiline: false,
                	culling: {
                    	max: 20
                	}
            	}
	        }
	    },
	    zoom: {
        	enabled: true
    	},
	    legend: {
	        position: 'right'
	    }
	});
}

parseData(createGraph);