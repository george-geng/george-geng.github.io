$(document).ready(function () {

	// jQuery Function Number 1
	$("#turnip img").fadeIn(5000);  
	$("#broccoli img").fadeIn(5000);        
	$("#tomato img").fadeIn(5000);  
	$("#lettuce img").fadeIn(5000);        

	var scrollToPage = false;
	$("#open-button").click(function() {
	    $('html,body').animate({
	    	// jQuery Function Number 2
	        scrollTop: $("#begin-page").offset().top - 128 + $('.icon-bar').height()},
	        1000,'easeOutSine');
	});
	// jQuery Function Number 3
	$("#garden-icon img").click(function() {
		scrollToID("#begin-page", 1000); 
	});
	$("#bike-icon img").click(function() {
		scrollToID("#bike-page", 1000); 
	});
	$("#market-icon img").click(function() {
		scrollToID("#market-page", 1000); 
	});
	$("#demo-icon img").click(function() {
		scrollToID("#demo-page", 1000); 
	});

	var lastScrollTop = 0;

    $(window).scroll( function(event){

    	//See what section is active
    	var currentScroll = $(this).scrollTop();
    	var $currentSection;
		
		  // We check the position of each of the divs compared to the windows scroll positon
	    $('.h11').each(function(i){
	      var divPosition = $(this).offset().top - 128 + $('.icon-bar').height();
	      if( divPosition - 1 < currentScroll ){
	        $currentSection = $(this);
	      }
	      var id = $currentSection.attr('id');
	      // console.log(id);
	      if (id == "begin-page"){
	      	$("#garden-icon img").css({'opacity':'0.85', 'border-bottom':'3.5px solid #252525'});
	      	$("#bike-icon img").css({'opacity':'0.3', 'border-bottom': 'none'});
	      	$("#market-icon img").css({'opacity':'0.3', 'border-bottom': 'none'});
	      	$("#demo-icon img").css({'opacity':'0.3', 'border-bottom': 'none'});
	      }
	      else if (id == "bike-page") {
	      	$("#bike-icon img").css({'opacity':'0.85', 'border-bottom':'3.5px solid #252525'});
	      	$("#garden-icon img").css({'opacity':'0.3', 'border-bottom': 'none'});
			$("#market-icon img").css({'opacity':'0.3', 'border-bottom': 'none'});
	      	$("#demo-icon img").css({'opacity':'0.3', 'border-bottom': 'none'});
	      }
	      else if (id == "market-page") {
	      	$("#market-icon img").css({'opacity':'0.85', 'border-bottom':'3.5px solid #252525'});
	      	$("#bike-icon img").css({'opacity':'0.3', 'border-bottom': 'none'});
	      	$("#garden-icon img").css({'opacity':'0.3', 'border-bottom': 'none'});
			$("#demo-icon img").css({'opactity':'0.3', 'border-bottom': 'none'});
	      }
	      else if (id == "demo-page") {
	      	$("#market-icon img").css({'opacity':'0.3', 'border-bottom': 'none'});
	      	$("#bike-icon img").css({'opacity':'0.3', 'border-bottom': 'none'});
	      	$("#garden-icon img").css({'opacity':'0.3', 'border-bottom': 'none'});
	      	$("#demo-icon img").css({'opacity':'0.85', 'border-bottom':'3.5px solid #252525'});
	      }
      
    	})
      
    	/* Scrolling fade in images*/
        $('.content-title').each( function(i){        
            var top_of_object = $(this).offset().top; /*+ $(this).outerHeight();*/
            // jQuery Function Number 4
            var top_of_window = $(window).scrollTop(); /* + $(window).height();*/
            /* If the object peaks into window, fade it */
            // jQuery Function Number 5
            if( top_of_window + $(window).height() - 200 > top_of_object){             
                $(this).css({'opacity':'1', transition:'2s'});                   
            }      
        });  

        /* Also fade in titles */
        $('.fade-in').each( function(i){        
            var top_of_object = $(this).offset().top; /*+ $(this).outerHeight();*/
            // jQuery Function Number 4
            var top_of_window = $(window).scrollTop(); /* + $(window).height();*/
            console.log( top_of_window + $(window).height() - 200);
            console.log(top_of_object);
            /* If the object peaks into window, fade it */
            // jQuery Function Number 5
            if( top_of_window + $(window).height() - 200 > top_of_object){             
                $(this).css({'opacity':'1', transition:'3s'});                   
            }      
        });  

	   /* Hide or show menubar*/
      	var st = $(this).scrollTop();
		var isNav1 = isAtSection('#begin-page');
		var isNav2 = isAtSection('#bike-page');
		var isNav3 = isAtSection('#market-page');
		var isNav4 = isAtSection('#demo-page');
		var isNav = isNav1 || isNav2 || isNav3 || isNav4;
		   if (st > lastScrollTop && !isNav){
			// JQuery Function Number 6
		   	 $(".icon-bar").fadeOut(300);
		   } else {
		   	 $(".icon-bar").fadeIn(300);
		   }
		   lastScrollTop = st;
    });

    function isAtSection(id){
    	var pos1 = Math.floor($(id).offset().top - 128 + $('.icon-bar').height()); 
    	var pos2 = Math.ceil($(id).offset().top - 128 + $('.icon-bar').height()); 
    	return Math.round(($(this).scrollTop())) == pos1 || Math.round(($(this).scrollTop())) == pos2; 
    }

    function scrollToID(id, speed) {
	    var targetOffset = $(id).offset().top - 128 + $('.icon-bar').height();
	    $('html,body').animate({ scrollTop: targetOffset }, speed, 'easeOutSine');
	}

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
            			text: 'Produce by Type (March 2018)',
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
        // maintainAspectRatio:false,
	  	legend: {
			display: true,
			position: 'right',
			labels:{
				fontSize: 14
			}
		},
	  }
	});

	
	// Pie Chart 2
	var ctx3 = document.getElementById("pieChart2").getContext('2d');
	var myChart = new Chart(ctx3, {
	  type: 'pie',
	  data: {
	    labels: ["Gardens", "Warehouse"],
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
            			text: 'Produce by Source (March 2018)',
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
         // maintainAspectRatio:false,
	  	legend: {
			display: true,
			position: 'right',
			labels:{
				fontSize: 14
			}
		},
	  }
	});
	  Chart.defaults.global.defaultFontFamily = "Quicksand";
	  Chart.defaults.global.defaultFontSize = 14;
});

 
