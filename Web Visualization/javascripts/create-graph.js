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
	var ethereum = ["Ethereum"]
	var xrp = ["XRP"]
	var tether = ["Tether"]
	var chainlink = ["Chainlink"]
	var litecoin =["Litecoin"]
	var bitcoin_Cash =["Bitcoin Cash"]
	var polkadot =["Polkadot"]
	var binance_Coin =["Binance Coin"]
	var cardano = ["Cardano"]
	var dow = ["DOW"]
	var wrapped_Bitcoin	= ["Wrapped Bitcoin"]
	var usd_Coin = ["USD Coin"]

	for (var i = 1; i < data.length-1; i++) {
		instance.push(data[i][1]);
		bitcoin.push(data[i][2]);
		ethereum.push(data[i][3]);
		xrp.push(data[i][4]);
		tether.push(data[i][5]);
		chainlink.push(data[i][6]);
		litecoin.push(data[i][7]);
		bitcoin_Cash.push(data[i][8]);
		polkadot.push(data[i][9]);
		binance_Coin.push(data[i][10]);
		cardano.push(data[i][11]);
		dow.push(data[i][12]);
		wrapped_Bitcoin.push(data[i][13]);
		usd_Coin.push(data[i][14]);
	
	} 

	var chart = c3.generate({
		bindto: '#chart',
	    data: {
	        columns: [
				bitcoin,
				ethereum,
				xrp,
				tether,
				chainlink,
				litecoin,
				bitcoin_Cash,
				polkadot,
				binance_Coin,
				cardano,
				dow,
				wrapped_Bitcoin,
				usd_Coin

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

parseData(createGraph);