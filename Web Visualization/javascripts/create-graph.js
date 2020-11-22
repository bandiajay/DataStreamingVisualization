/*
 * Parse the data and create a graph with the data.
 */
function parseData(createGraph) {
	Papa.parse("../data/Sheet2.csv", {
		download: true,
		complete: function(results) {
			createGraph(results.data);
		}
	});
}



function createGraph(data){
	var instance = [];
	var bitcoin = ["Bitcoin"];
	var Ethereum = ["Ethereum"]
	// var Deque = require("collections/deque");
	//var deque = new Deque(["Bitcoin-Deque"]);
	//let deque = new Deque(["Bitcoin-Deque"]);

	for (var i = 1; i < data.length-1; i++) {
		instance.push(data[i][1]);
		bitcoin.push(data[i][2]);
		Ethereum.push(data[i][3]);
		//deque.addFront(data[i][2]);
	} 

	console.log(instance);
	console.log(bitcoin);
	console.log(Ethereum);
	//console.log(deque);

	var chart = c3.generate({
		bindto: '#chart',
	    data: {
	        columns: [
				bitcoin,
				Ethereum
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

	function timedRefresh(timeoutPeriod) {
		setTimeout("location.reload(true);",timeoutPeriod);
	}
	
	window.onload = timedRefresh(60000);

}

// class Deque {
//     constructor() {
//         this.front = this.back = undefined;
//     }
//     addFront(value) {
//         if (!this.front) this.front = this.back = { value };
//         else this.front = this.front.next = { value, prev: this.front };
//     }
//     removeFront() {
//         let value = this.peekFront();
//         if (this.front === this.back) this.front = this.back = undefined;
//         else (this.front = this.front.prev).next = undefined;
//         return value;
//     }
//     peekFront() { 
//         return this.front && this.front.value;
//     }
//     addBack(value) {
//         if (!this.front) this.front = this.back = { value };
//         else this.back = this.back.prev = { value, next: this.back };
//     }
//     removeBack() {
//         let value = this.peekBack();
//         if (this.front === this.back) this.front = this.back = undefined;
//         else (this.back = this.back.next).back = undefined;
//         return value;
//     }
//     peekBack() { 
//         return this.back && this.back.value;
//     }
// }

// demo

parseData(createGraph);