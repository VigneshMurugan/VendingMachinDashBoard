angular.module('MyApp')
		.controller('dashboardController',['$scope','dataLoad',function($scope,dataLoad){
			$scope.selectedList='dashboard';
				dataLoad.getAllData(function(data){
					$scope.config=data;
					 $scope.countries={};
			        for(var i=0;i<data.length;i++){
			        	$scope.countries[data[i]["COUNTRY"]]=1;
			        }
			        		$scope.countryKeys=Object.keys($scope.countries);
			        		$scope.selectedCountry="Country";
			        		$scope.selectedRegion="Region";
			        		$scope.selectedMarketUnit="Market";
			        		$scope.selectedLocation="Location";
			        		$scope.updateCountry($scope.countryKeys[0]);

				});

                $scope.updateRegion=function(region){
                	angular.element('div').contents().find("#barChart").html("");
                	angular.element('div').contents().find("#pieChart").html("");

                     	$scope.selectedMarketUnit="Market";
                     	$scope.selectedLocation="Location";

                     	$scope.selectedRegion=region;
                     	$scope.selectedRegionData=[];
                     	
                     	for(var p=0;p<$scope.selectedCountryData.length;p++){
                     		if($scope.selectedCountryData[p]["REGION"]==$scope.selectedRegion){
                     			$scope.selectedRegionData.push($scope.selectedCountryData[p]);
                     		}
                     	}
                     	$scope.geoLocation($scope.selectedRegionData);

                     	$scope.marketUnit={};

             			for(var k=0;k<$scope.selectedRegionData.length;k++){
             					$scope.marketUnit[$scope.selectedRegionData[k]["MARKET_UNIT"]]=1;
             			}
             			$scope.marketUnitKeys=Object.keys($scope.marketUnit);
             			$scope.drawGraphs($scope.selectedRegionData);
                     }



                $scope.updateMarketunit=function(marketUnit){
                	angular.element('div').contents().find("#barChart").html("");
                	angular.element('div').contents().find("#pieChart").html("");
                  	$scope.selectedLocation="Location";
                  		$scope.selectedMarketUnit=marketUnit;
                  		$scope.selectedMarketUnitData=[];
                  		for(var q=0;q<$scope.selectedRegionData.length;q++){
                  			if($scope.selectedRegionData[q]["MARKET_UNIT"]==$scope.selectedMarketUnit){
                  				$scope.selectedMarketUnitData.push($scope.selectedRegionData[q]);
                  			}
                  		}

                  	  	$scope.geoLocation($scope.selectedMarketUnitData);

                  	  	$scope.locations={};
                  	  	for(s=0;s<$scope.selectedMarketUnitData.length;s++){
                  	  		$scope.locations[$scope.selectedMarketUnitData[s]["CITY"]]=1;
                  	  	}
                  	  	$scope.locationsKeys=Object.keys($scope.locations);
                  	  	$scope.drawGraphs($scope.selectedMarketUnitData);

                  }


               $scope.updateLocation=function(location){
                 	angular.element('div').contents().find("#barChart").html("");
                	angular.element('div').contents().find("#pieChart").html("");
                 	$scope.selectedLocation=location;
                 	$scope.selectedLocationData=[];
                 	for(var t=0;t<$scope.selectedMarketUnitData.length;t++){
                 		if($scope.selectedMarketUnitData[t]["CITY"]==$scope.selectedLocation){
                 			$scope.selectedLocationData.push($scope.selectedMarketUnitData[t]);
                 		}
                 	}
                 	$scope.geoLocation($scope.selectedLocationData);
                 	$scope.drawGraphs($scope.selectedLocationData)
                 }



                $scope.updateCountry=function(countryName){
                	angular.element('div').contents().find("#barChart").html("");
                	angular.element('div').contents().find("#pieChart").html("");
                     	$scope.selectedRegion="Region";
                     	$scope.selectedMarketUnit="Market";
                     	$scope.selectedLocation="Location";
                     	$scope.selectedCountry=countryName;
                     	$scope.selectedCountryData=[];

             			for(var j=0;j<$scope.config.length;j++){
             				if($scope.config[j]["COUNTRY"]==$scope.selectedCountry){
             					$scope.selectedCountryData.push($scope.config[j]);
             				}
             			}
             			$scope.geoLocation($scope.selectedCountryData);

             			$scope.regions={};

             			for(var k=0;k<$scope.selectedCountryData.length;k++){
             					$scope.regions[$scope.selectedCountryData[k]["REGION"]]=1;
             			}
             			$scope.regionsKeys=Object.keys($scope.regions);
             			$scope.drawGraphs($scope.selectedCountryData);
                     };
		
                $scope.drawGraphs=function(data){
                 	      var excelObject ={};
                 	      excelObject["Dashboard_Dump"]=data;
					      var SENConnectivity = {};
					      var OverallStatus = {};
					      var keys = [];
					      var SENConnectivityValues = [];
					      var OverallStatusValues = [];
					      var OverallStatusKeys = [];
					      var newOverall=[];
					      var SENConnectivityKeys=[];
					      var connectivityIssues=[];
					      var connectivityStatus=[];
					      for (var i = 0; i < excelObject.Dashboard_Dump.length; i++)
					      {
					        SENConnectivity[excelObject.Dashboard_Dump[i]["CONNECTIVITY"]] = (SENConnectivity[excelObject.Dashboard_Dump[i]["CONNECTIVITY"]] + 1) || 1;
					        	if(excelObject.Dashboard_Dump[i]["OVERALL_STATUS"]!='Connected & Reporting')
					        		OverallStatus[excelObject.Dashboard_Dump[i]["OVERALL_STATUS"]] = (OverallStatus[excelObject.Dashboard_Dump[i]["OVERALL_STATUS"]] + 1) || 1;
					      }

					      Object.keys(SENConnectivity).forEach(function (key) {
					      						        var arrayValue = [];
					        arrayValue.push(SENConnectivity[key]);
					        SENConnectivityValues.push({"values" : arrayValue , "text" : key });
					        SENConnectivityKeys.push(key);

					        var temp={};
					        temp["label"]=key;
					        temp["value"]=SENConnectivity[key];
					        if(key==="Transmitting Data"){
					        	 temp["color"]="rgb(32,190,140)";
					        }else{
					        	temp["color"]="rgb(231,76,60)";
					        }
					       
					        connectivityStatus.push(temp);
					      });

					      Object.keys(OverallStatus).forEach(function (key) {
					        var temp={};
					        temp["text"]=key;
					        temp["value"]=OverallStatus[key];
					        connectivityIssues.push(temp);
					        console.log(key);
					        if(key!=='Connected & Reporting')
					        	OverallStatusKeys.push(key);

					       
					      });
					      

					      $scope.barChart(connectivityIssues,excelObject,OverallStatusKeys);
					      $scope.pieChart(connectivityStatus,excelObject,SENConnectivityKeys,$scope.geoLocation);
                 }
                $scope.geoLocation=function(coordinates,tabeldata){
                	$('.geodetails').html("");
                	$('.spireImage').html("");
			             var map = new google.maps.Map(document.getElementById('geoGraph'), {
			                      zoom: 4,
			                      center: {
			                           "lat": Number(coordinates[0].LAT),
			                           "lng": Number(coordinates[0].LNG)
			                     }
			               });

			             	var image="";var contentString="";
					        for (var i = 0; i < coordinates.length; i++) {
					        	            contentString='';
												if(coordinates[i].CONNECTIVITY=='Not Connected'){
												image='images/map-marker-red.png' ;
												contentString="<p>Last Heart Beat:</p>"+coordinates[i].LAST_BEAT;
												 
												}
												else{
												image ='images/map-marker-green.png' ;
												contentString="<p>Last Heart Beat:</p>"+coordinates[i].LAST_BEAT;
												 
												}
  

					           var infowindow = new google.maps.InfoWindow({
					           content: contentString
					          });
					          var marker = new google.maps.Marker({
					          position: {
					                "lat": Number(coordinates[i].LAT),
					                "lng": Number(coordinates[i].LNG)
					          },
					          map: map,
					          icon: image,
					          details:{
					                "customerName":coordinates[i].CUSTOMER_NAME,
					                "customerAddress":coordinates[i].ADDR1,
					                "equipmentId":coordinates[i].EQPMT_ID,
					                "serialNo":coordinates[i].EQPMT_SRL_NUM_VAL,
					                "lastHeartBeat":coordinates[i].LAST_BEAT,
					                "lastPour":coordinates[i].EVNT_TMSTMP,
					                "connectivity":coordinates[i].CONNECTIVITY
					          },
					          title: 'Click Here',
					          animation: google.maps.Animation.DROP
					        });

					       

					        google.maps.event.addListener(marker, 'click', (function() {
					          infowindow.open(map, this);
					          $('.geobox').show(700);
					          $('.geodetails').html("");
					          var table = '<center> <table class="table tclass" ><tr><td colspan=2> Equipment Parameters</td></tr><tr><td>Equipment Id : </td><td>'+this.details.equipmentId+'</td></tr><tr><td>Serial No : </td><td>'+this.details.serialNo+'</td></tr><tr><td>Customer Name : </td><td>'+this.details.customerName+'</td></tr><tr><td>Customer Addr : </td><td>'+this.details.customerAddress+'</td></tr><tr><td>Last Pour : </td><td>'+this.details.lastPour+'</td></tr><tr><td>Last Heart Beat : </td><td>'+this.details.lastHeartBeat+'</td></tr><tr><td>Connectivity : </td><td>'+this.details.connectivity+'</td></tr></table></center>';
					          $('.geodetails').html(table);
					          $('.spireImage').html('<img src="images/pepsi.jpg" alt="" class="chkimg" width="100%" height="87%"/>');
					        }))
					        }

                     }


                $scope.barChart=function(data,excelObject,OverallStatusKeys){

                		function wrap(text, width) {
							  text.each(function() {
							    var text = d3.select(this),
							        words = text.text().split(/\s+/).reverse(),
							        word,
							        line = [],
							        lineNumber = 0,
							        lineHeight = 1.1, // ems
							        y = text.attr("y"),
							        dy = parseFloat(text.attr("dy")),
							        tspan = text.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", dy + "em");
							    while ((word = words.pop()) && (lineNumber < 4)  ) 
							    {
							    	 line.push(word);
							      tspan.text(line.join(" "));
							      if (tspan.node().getComputedTextLength() > width) {
							        line.pop();
							        tspan.text(line.join(" "));
							        line = [word];
							        tspan = text.append("tspan").attr("x", 0).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
							      }
							    }
							  });
							}

							var margin = {top: 20, right: 20, bottom: 50, left: 40},
							    width = 500 - margin.left - margin.right,
							    height = 300 - margin.top - margin.bottom;

							var x = d3.scale.ordinal()
							    .rangeRoundBands([0, width], .8);

							var y = d3.scale.linear()
							    .range([height-30, 0]);

							var xAxis = d3.svg.axis()
							    .scale(x)
							    .orient("bottom")
							    .ticks(1);

							var yAxis = d3.svg.axis()
							    .scale(y)
							    .orient("left")
							    .ticks(0);

							var svg = d3.select("#barChart").append("svg")
							    .attr("width", width + margin.left + margin.right)
							    .attr("height", height + margin.top + margin.bottom)
							  .append("g")
							    .attr("transform", "translate(" + margin.left + "," + (margin.top) + ")");


							  x.domain(data.map(function(d) { return d.text; }));
							  y.domain([0, d3.max(data, function(d) { return d.value; })]);

							  svg.append("g")
							      .attr("class", "x axis")
							      .attr("transform", "translate(0," + (height-40) + ")")
							      .call(xAxis)
							        .selectAll(".tick text")
      								.call(wrap, x.rangeBand());
							      // .selectAll("text")
					        //       .attr("y", 0)
					        //       .attr("x", 9)
					        //       .attr("dy", ".35em")
					        //       .attr("transform", "rotate(45)")
					        //       .style("text-anchor", "start");;



							  svg.append("g")
							      .attr("class", "y axis")
							      .call(yAxis)
							    .append("text")
							      .attr("transform", "rotate(-90)")
							      .attr("x","-10")
							      .attr("dx","0")
							      .attr("y", 6)
							      .attr("dy", "1.5em")
							      .style("text-anchor", "end")
							      .style("font-size","16px")
							      .text("No.of Machines");
							

							  svg.selectAll(".bar")
							      .data(data)
							    .enter().append("rect")
							      .attr("class", "bar")
							      .attr("x", function(d) { return x(d.text); })
							      .attr("width", x.rangeBand())
							      .attr("y", function(d) { return y(d.value); })
							      .attr("height", function(d) { return (height-30) - y(d.value); })
							      .on('click',function(d,index){
							      		
							      		    var temp = [];
									        for(var i=0,item=excelObject["Dashboard_Dump"];i<item.length;i++){
									        	if(item[i]["OVERALL_STATUS"]==OverallStatusKeys[index]){
									        		temp.push(item[i]);
									        	}
									        }
									        $scope.geoLocation(temp);
									      });


							 svg.selectAll("text.bar")
									  .data(data)
									.enter().append("text")
									  .attr("class", "bar")
									  .attr("text-anchor", "middle")
									  .attr("x", function(d) { return x(d.text) +8; })
									  .attr("y", function(d) { return y(d.value)-8; })
									  .text(function(d) { return d.value; });
                 	
                    }


                 $scope.pieChart=function(data,excelObject,SENConnectivityKeys,geoLocation){

						var svg = d3.select("#pieChart").append("svg").attr("width",500).attr("height",300);

						svg.append("g").attr("id","donutStatus");


						Donut3D.draw("donutStatus",excelObject,SENConnectivityKeys,geoLocation, data, 220, 120, 130, 100, 20, .2);

                 			// add legend   
							var legend = svg.append("g")
							  .attr("class", "legend")
							  .attr("x", 380)
							  .attr("y", 100)
							  .attr("height", 100)
							  .attr("width", 100);

							legend.selectAll('g').data(data)
						      .enter()
						      .append('g')
						      .each(function(d, i) {
						        var g = d3.select(this);
						        g.append("rect")
						          .attr("x", 380)
						          .attr("y", 100+i*25)
						          .attr("width", 10)
						          .attr("height", 10)
						          .style("fill", data[i].color);
						        
						        g.append("text")
						          .attr("x", 400)
						          .attr("y", 100+i * 25 + 8)
						          .attr("height",30)
						          .attr("width",100)
						          .style("fill", data[i].color)
						          .text(data[i].label);

						      });

                 }

		}]);