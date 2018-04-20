$(document).ready(function () {
    var chartHidden = true;
	var isVisible = false;
	
	$("#open-button").click(function() {
	    $('html,body').animate({
	        scrollTop: $("#begin-page").offset().top - 60},
	        1000,'easeOutSine');
	});
	
   /* Scrolling fade in images*/
    $(window).scroll( function(){
        $('.fade-in').each( function(i){         
            var top_of_object = $(this).offset().top; /*+ $(this).outerHeight();*/
            var top_of_window = $(window).scrollTop(); /* + $(window).height();*/
            /* If the object peaks into window, fade it */
            if( top_of_window + $(window).height() - 200 > top_of_object){             
                $(this).animate({'opacity':'1'},3000);                   
            }      
        });   
    });

    // Grouped bar chart
	  var ctx = document.getElementById("gardenChart").getContext('2d');
	  var myChart = new Chart(ctx, {
	      type: 'bar',
	      data: {
	          labels: ["UCGTCF", "SOGA", "Clark Kerr", "Oxford Tract", "Farmer's Market", "Grocery Recovery", "Daylight Foods"],
	           datasets: [{
		 			label: 'Jan',
		            data: [0, 0, 6, 50, 0, 0,0],
		            backgroundColor: 'rgba(112, 173, 71, 1)'},
	  		 	 	{ label: 'Feb',
	      			  data: [10, 0, 20, 25, 0, 0, 0],
	    			  backgroundColor: 'rgba(68, 114, 196, 1)'},
	    			  { label: 'Mar',
	      			  data: [55, 0, 33, 36, 0, 0, 132],
	    			  backgroundColor: 'rgba(225, 192, 0, 1)'},
	    			  { label: 'Apr',
	      			  data: [140, 0, 0, 0, 227, 0, 461],
	    			  backgroundColor: 'rgba(67, 104, 43, 1)'
        		}]
	      },
	      options: {plugins:{"deferred": { "yOffset": 200, "delay": 500 } }, 
	     			title: {
            			display: true,
            			text: 'Monthly Food Pantry Donations by Source (Spring 2018)',
            			fontSize: 20
        			},
        			 responsive:true,
        			 maintainAspectRatio:false,
        			 scales: {

        			 	xAxes: [{
					      scaleLabel: {
					        display: true,
					        labelString: 'Campus Garden',
					        // fontStyle: 'bold',
					        fontSize: 18
					      }
					    }],
					    yAxes: [{
					    	 ticks: {
				                beginAtZero:true
				            },
					      scaleLabel: {
					        display: true,
					        labelString: 'Produce Donated (lbs)',
					        // fontStyle: 'bold',
					        fontSize: 18
					      }
					    }]
					  }     
        	}
	  });


	// Pie Chart 1
	var ctx2 = document.getElementById("pieChart1").getContext('2d');
	var myChart = new Chart(ctx2, {
	  type: 'pie',
	  data: {
	    labels: ["Fruit", "Herbs", "Greens", "Root Veg.", "Cruciferous", "Squash"],
	    datasets: [{
	      backgroundColor: [
	        "#EA7D3C",
	        "#FBBD2F",
	        "#73AC4D",
	        "#A84A19",
	        "#956D24",
	        "#44672F",
	      ],
	      data: [103, 9, 51, 7, 13, 29]
	    }]
	  },
	  options: {
	  	plugins:{"deferred": { "yOffset": 100, "delay": 300 } }, 
	     			title: {
            			display: true,
            			text: 'Pantry Produce by Type (March 2018)',
            			fontSize: 20
        			},
        tooltips: {
	      callbacks: {
	        label: function(tooltipItem, data) {
	        	var dataset = data.datasets[tooltipItem.datasetIndex];
	          var total = dataset.data.reduce(function(previousValue, currentValue, currentIndex, array) {
	            return previousValue + currentValue;
	          });
	          var currentValue = dataset.data[tooltipItem.index];
	          var precentage = Math.floor(((currentValue/total) * 100)+0.5);         
	          return precentage + "%" + " ("+currentValue+" lbs)";
	        }
	      }
	    },
        responsive:true,
	  	legend: {
			display: true,
			position: 'right',
			labels:{
				fontSize: 16
			}
		},
	  }
	});

	
	// Pie Chart 2
	var ctx3 = document.getElementById("pieChart2").getContext('2d');
	var myChart = new Chart(ctx3, {
	  type: 'pie',
	  data: {
	    labels: ["Gardens", "Warehouse Waste Recovery"],
	    datasets: [{
	      backgroundColor: [
	        "#A84A19",
	        "#FBBD2F",
	      ],
	      data: [124, 132]
	    }]
	  },
	  options: {
	  	plugins:{"deferred": { "yOffset": 100, "delay": 400 } }, 
	     			title: {
            			display: true,
            			text: 'Pantry Produce by Source (March 2018)',
            			fontSize: 20
        			},
        tooltips: {
	      callbacks: {
	        label: function(tooltipItem, data) {
	        	var dataset = data.datasets[tooltipItem.datasetIndex];
	          var total = dataset.data.reduce(function(previousValue, currentValue, currentIndex, array) {
	            return previousValue + currentValue;
	          });
	          var currentValue = dataset.data[tooltipItem.index];
	          var precentage = Math.floor(((currentValue/total) * 100)+0.5);         
	          return precentage + "%" + " ("+currentValue+" lbs)";
	        }
	      }
	    },
        responsive:true,
	  	legend: {
			display: true,
			position: 'right',
			labels:{
				fontSize: 16
			}
		},
	  }
	});
	  Chart.defaults.global.defaultFontFamily = "Quicksand";
	  Chart.defaults.global.defaultFontSize = 14;
});

 
